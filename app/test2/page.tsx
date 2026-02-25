'use client';

import {
  Dropdown,
  DropdownTrigger,
  DropdownPopover
} from '../components/theam/dropdown';
import { Button } from '../components/theam';

export default function Test2Page() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Premium Dropdown System
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A state-of-the-art context-driven dropdown system. Highly accessible, perfectly responsive, and exceptionally animated.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {/* Dropdown Component Examples */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-100">⚡ Smooth Standard Implementation</h2>
            <div className="relative w-full max-w-sm">
              <Dropdown delay={80}>
                <DropdownTrigger>
                  <Button
                    type="button"
                    variant="neoncyan"
                    className="w-full flex items-center justify-between px-4 py-3 shadow-[0_18px_45px_rgba(168,85,247,0.6)] hover:shadow-[0_22px_55px_rgba(14,165,233,0.8)]"
                  >
                    <span className="font-medium">Choose option</span>
                    <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Button>
                </DropdownTrigger>

                <DropdownPopover className="rounded-2xl bg-slate-950/90 border border-fuchsia-500/40 shadow-[0_18px_45px_rgba(236,72,153,0.55)] backdrop-blur-xl">
                  <ul className="flex flex-col w-full text-slate-100 font-medium">
                    <li className="w-full text-left px-4 py-3 text-sm hover:bg-gradient-to-r from-fuchsia-500/15 to-cyan-400/15 transition-colors cursor-pointer select-none">
                      Neon Magenta
                    </li>
                    <li className="w-full text-left px-4 py-3 text-sm hover:bg-gradient-to-r from-cyan-400/15 to-emerald-400/15 transition-colors cursor-pointer select-none border-y border-slate-800/50">
                      Cyber Cyan
                    </li>
                    <li className="w-full text-left px-4 py-3 text-sm hover:bg-gradient-to-r from-purple-500/15 to-sky-400/15 transition-colors cursor-pointer select-none">
                      Vaporwave Mix
                    </li>
                  </ul>
                </DropdownPopover>
              </Dropdown>
            </div>
          </div>

          {/* Another Dropdown Component Example */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-100">🌈 Pastel Theme Dropdown</h2>
            <div className="relative w-full max-w-sm">
              <Dropdown delay={80}>
                <DropdownTrigger>
                  <Button
                    type="button"
                    variant="mintice"
                    className="w-full flex items-center justify-between px-4 py-3 text-slate-800 shadow-[0_16px_40px_rgba(148,163,184,0.55)] hover:shadow-[0_20px_50px_rgba(148,163,184,0.75)]"
                  >
                    <span className="font-medium">Pick pastel palette</span>
                    <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/60 text-slate-700">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Button>
                </DropdownTrigger>

                <DropdownPopover className="rounded-2xl bg-white/95 border border-slate-200 shadow-xl backdrop-blur-xl text-slate-800">
                  <ul className="flex flex-col w-full font-medium">
                    <li className="w-full text-left px-4 py-3 text-sm hover:bg-gradient-to-r from-rose-100 to-amber-100 transition-colors cursor-pointer select-none">
                      Peach & Rose
                    </li>
                    <li className="w-full text-left px-4 py-3 text-sm hover:bg-gradient-to-r from-sky-100 to-indigo-100 transition-colors cursor-pointer select-none border-y border-slate-100">
                      Sky Fade
                    </li>
                    <li className="w-full text-left px-4 py-3 text-sm hover:bg-gradient-to-r from-emerald-100 to-teal-100 transition-colors cursor-pointer select-none">
                      Mint Breeze
                    </li>
                  </ul>
                </DropdownPopover>
              </Dropdown>
            </div>
          </div>
        </section>

        {/* Dropdown API Demo Section */}
        <section className="mt-12 rounded-3xl bg-slate-900/40 border border-slate-700/50 p-6 md:p-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-100">🛠️ How to use the Context API</h2>
            <p className="text-slate-300">
              The dropdown is a polished, professional suite cleanly split into three semantic components logic pieces which naturally handle accessibility and resizing.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">1. Components Explained</h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li>
                  <strong className="text-slate-100 font-mono text-base">{'<Dropdown>'}</strong>
                  <p className="mt-1">Provides the Context. Manages open state, timeouts independently.</p>
                </li>
                <li>
                  <strong className="text-slate-100 font-mono text-base">{'<DropdownTrigger>'}</strong>
                  <p className="mt-1">Invisibly wraps the anchor component adding ARIA tags, tab indexing, and hover intelligence natively.</p>
                </li>
                <li>
                  <strong className="text-slate-100 font-mono text-base">{'<DropdownPopover>'}</strong>
                  <p className="mt-1">Auto-positions perfectly using ResizeObservers. Triggers the exquisite Framer Motion scale-fade entry inherently applying click-to-close features to child `&lt;ul /&gt;` trees unconditionally.</p>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-sky-400">2. Code & Visual Example</h3>

              <div className="mb-4 p-4 border border-slate-700/50 rounded-xl bg-slate-900/50 flex flex-col items-center justify-center min-h-[160px]">
                <p className="text-sm text-slate-400 mb-4">Interactive Demo:</p>
                <Dropdown delay={60}>
                  <DropdownTrigger>
                    <Button variant="emerald">Launch Professional Menu</Button>
                  </DropdownTrigger>
                  <DropdownPopover className="w-56 bg-slate-800/90 backdrop-blur-md border border-slate-600/50 rounded-xl shadow-2xl z-50">
                    <ul className="flex flex-col font-medium overflow-hidden rounded-xl">
                      <li className="w-full text-left px-4 py-3 text-sm text-slate-200 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer select-none">
                        Manage Account
                      </li>
                      <li className="w-full text-left px-4 py-3 text-sm text-slate-200 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer select-none">
                        Billing Details
                      </li>
                      <li className="w-full text-left px-4 py-3 text-sm text-rose-400 hover:bg-rose-500/20 transition-colors border-t border-slate-700/50 font-semibold cursor-pointer select-none">
                        Sign Out
                      </li>
                    </ul>
                  </DropdownPopover>
                </Dropdown>
              </div>

              <div className="bg-slate-950 rounded-xl p-5 overflow-x-auto text-sm font-mono text-slate-300 border border-slate-800 shadow-inner">
                <pre><code>{`import { 
  Dropdown, DropdownTrigger, DropdownPopover 
} from '../components/theam/dropdown';

export function ProMenu() {
  return (
    <Dropdown delay={80}>
      <DropdownTrigger>
        <Button>Launch Professional Menu</Button>
      </DropdownTrigger>
      
      <DropdownPopover className="bg-slate-800 rounded-xl">
        <ul className="flex flex-col">
          <li className="hover:bg-slate-700">Account</li>
          <li className="hover:bg-slate-700">Billing</li>
        </ul>
      </DropdownPopover>
    </Dropdown>
  );
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
