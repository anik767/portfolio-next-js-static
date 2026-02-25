'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Context ---
function noop(..._: unknown[]): void {
  // Do nothing
}

export interface ContextValue {
  anchorEl: HTMLElement | null;
  onPopoverMouseEnter: (event: React.MouseEvent<HTMLElement>) => void;
  onPopoverMouseLeave: (event: React.MouseEvent<HTMLElement>) => void;
  onPopoverEscapePressed: () => void;
  onTriggerMouseEnter: (event: React.MouseEvent<HTMLElement>) => void;
  onTriggerMouseLeave: (event: React.MouseEvent<HTMLElement>) => void;
  onTriggerKeyUp: (event: React.KeyboardEvent<HTMLElement>) => void;
  open: boolean;
}

export const DropdownContext = React.createContext<ContextValue>({
  anchorEl: null,
  onPopoverMouseEnter: noop,
  onPopoverMouseLeave: noop,
  onPopoverEscapePressed: noop,
  onTriggerMouseEnter: noop,
  onTriggerMouseLeave: noop,
  onTriggerKeyUp: noop,
  open: false,
});

// --- Dropdown Container ---
export interface DropdownProps {
  children: React.ReactNode;
  delay?: number;
}

export function Dropdown({ children, delay = 100 }: Readonly<DropdownProps>): React.JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const cleanupRef = React.useRef<NodeJS.Timeout | undefined>(undefined);

  const handleTriggerMouseEnter = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
    clearTimeout(cleanupRef.current);
    setAnchorEl(event.currentTarget);
  }, []);

  const handleTriggerMouseLeave = React.useCallback(() => {
    cleanupRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, delay);
  }, [delay]);

  const handleTriggerKeyUp = React.useCallback((event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setAnchorEl(event.currentTarget);
    }
  }, []);

  const handlePopoverMouseEnter = React.useCallback(() => {
    clearTimeout(cleanupRef.current);
  }, []);

  const handlePopoverMouseLeave = React.useCallback(() => {
    cleanupRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, delay);
  }, [delay]);

  const handlePopoverEscapePressed = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);

  return (
    <DropdownContext.Provider
      value={{
        anchorEl,
        onPopoverMouseEnter: handlePopoverMouseEnter,
        onPopoverMouseLeave: handlePopoverMouseLeave,
        onPopoverEscapePressed: handlePopoverEscapePressed,
        onTriggerMouseEnter: handleTriggerMouseEnter,
        onTriggerMouseLeave: handleTriggerMouseLeave,
        onTriggerKeyUp: handleTriggerKeyUp,
        open,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}

// --- Dropdown Trigger ---
export interface DropdownTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownTrigger({ children, className = '' }: DropdownTriggerProps): React.JSX.Element {
  const { onTriggerMouseEnter, onTriggerMouseLeave, onTriggerKeyUp, open } = React.useContext(DropdownContext);

  return (
    <div
      className={`inline-block w-full ${className}`}
      onMouseEnter={onTriggerMouseEnter}
      onMouseLeave={onTriggerMouseLeave}
      onKeyUp={onTriggerKeyUp}
      onClick={(e) => {
        if (open) {
          onTriggerMouseLeave(e);
        } else {
          onTriggerMouseEnter(e);
        }
      }}
      role="button"
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={open}
    >
      {children}
    </div>
  );
}

// --- Dropdown Popover ---
export interface DropdownPopoverProps {
  children?: React.ReactNode;
  className?: string;
}

export function DropdownPopover({ children, className = '' }: Readonly<DropdownPopoverProps>): React.JSX.Element {
  const { anchorEl, onPopoverMouseEnter, onPopoverMouseLeave, onPopoverEscapePressed, open } =
    React.useContext(DropdownContext);

  React.useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onPopoverEscapePressed();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [open, onPopoverEscapePressed]);

  const [rect, setRect] = React.useState<DOMRect | null>(null);

  React.useEffect(() => {
    if (anchorEl) {
      setRect(anchorEl.getBoundingClientRect());

      const observer = new ResizeObserver(() => {
        setRect(anchorEl.getBoundingClientRect());
      });
      observer.observe(anchorEl);

      return () => observer.disconnect();
    } else {
      setRect(null);
    }
  }, [anchorEl]);

  return (
    <AnimatePresence>
      {open && rect && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }} // Premium spring-like ease
          className={`fixed z-50 overflow-hidden ${className}`}
          style={{
            top: `${rect.bottom + window.scrollY + 8}px`, // 8px professional offset gap
            left: `${rect.left + window.scrollX}px`,
            minWidth: `${rect.width}px`,
          }}
          onMouseEnter={onPopoverMouseEnter as any}
          onMouseLeave={onPopoverMouseLeave as any}
          onClick={() => {
            onPopoverEscapePressed();
          }}
          role="menu"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
