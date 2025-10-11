'use client';

import { useState } from 'react';
import { BackgroundCard, ProductCard, Table, Tabs } from './common';
import Badge from './common/Badge';
import Button from './common/Button';
import Card from './common/Card';
import Text from './common/Text';

const Test = () => {
  // Modal state
  const [isModalOpen, setModalOpen] = useState(false);

  // Sample data for components
  const products = [
    {
      title: "Premium Laptop",
      description: "High-performance laptop with latest technology and sleek design.",
      price: "$1,299",
      image: "/images/example.png",
      badge: "New",
      badgeVariant: "primary" as const
    },
    {
      title: "Wireless Headphones",
      description: "Noise-cancelling wireless headphones with premium sound quality.",
      price: "$199",
      image: "/images/example.png",
      badge: "Sale",
      badgeVariant: "success" as const
    },
    {
      title: "Smart Watch",
      description: "Advanced smartwatch with health monitoring and fitness tracking.",
      price: "$399",
      image: "/images/example.png",
      badge: "Popular",
      badgeVariant: "warning" as const
    }
  ];

  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Developer", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager", status: "Inactive" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Developer", status: "Active" }
  ];

  const tableColumns = [
    { key: 'id', title: 'ID', width: '80px' },
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'role', title: 'Role' },
    { 
      key: 'status', 
      title: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'Active' ? 'success' : 'warning'} size="sm">
          {value}
        </Badge>
      )
    }
  ];

  const tabItems = [
    {
      key: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-4">
          <Text variant="h3" color="black">Project Overview</Text>
          <Text variant="body" color="gray">
            This is a comprehensive overview of the project. It includes all the key information
            about the project goals, timeline, and deliverables.
          </Text>
          <div className="grid grid-cols-2 gap-4">
            <Card variant="outlined">
              <Text variant="h4" color="black">Timeline</Text>
              <Text variant="body" color="gray">3 months</Text>
            </Card>
            <Card variant="outlined">
              <Text variant="h4" color="black">Budget</Text>
              <Text variant="body" color="gray">$50,000</Text>
            </Card>
          </div>
        </div>
      )
    },
    {
      key: 'details',
      label: 'Details',
      content: (
        <div className="space-y-4">
          <Text variant="h3" color="black">Project Details</Text>
          <Text variant="body" color="gray">
            Detailed information about the project requirements, technical specifications,
            and implementation details.
          </Text>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Badge variant="success" size="sm" className="mr-2">✓</Badge>
              <Text variant="body" color="gray">Frontend Development</Text>
            </li>
            <li className="flex items-center">
              <Badge variant="success" size="sm" className="mr-2">✓</Badge>
              <Text variant="body" color="gray">Backend API</Text>
            </li>
            <li className="flex items-center">
              <Badge variant="warning" size="sm" className="mr-2">⏳</Badge>
              <Text variant="body" color="gray">Database Design</Text>
            </li>
          </ul>
        </div>
      )
    },
    {
      key: 'team',
      label: 'Team',
      content: (
        <div className="space-y-4">
          <Text variant="h3" color="black">Team Members</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tableData.slice(0, 4).map((member) => (
              <Card key={member.id} variant="outlined">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <Text variant="body" color="black" weight="semibold">{member.name}</Text>
                    <Text variant="small" color="gray">{member.role}</Text>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )
    }
  ];

  const badgeVariants = [
    { variant: 'primary' as const, label: 'Primary' },
    { variant: 'secondary' as const, label: 'Secondary' },
    { variant: 'PurpleLight' as const, label: 'Purple Light' },
    { variant: 'Emerald' as const, label: 'Emerald' },
    { variant: 'Neutral' as const, label: 'Neutral' },
    { variant: 'cyan' as const, label: 'Cyan' },
    { variant: 'purple' as const, label: 'Purple' },
    { variant: 'success' as const, label: 'Success' },
    { variant: 'warning' as const, label: 'Warning' },
    { variant: 'info' as const, label: 'Info' },
    { variant: 'accent' as const, label: 'Accent' }
  ];

  const sizes = [
    { size: 'sm' as const, label: 'Small' },
    { size: 'md' as const, label: 'Medium' },
    { size: 'lg' as const, label: 'Large' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Component Library Test</h1>
          <p className="text-xl text-gray-600">Comprehensive showcase of all UI components</p>
        </div>

        {/* ========== BADGE TESTS ========== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🏷️ Badge Component</h2>
            <p className="text-gray-600">All badge variants and sizes</p>
          </div>

          {/* All Variants - Medium Size */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">All Variants (Medium Size)</h2>
            <div className="flex flex-wrap gap-4">
              {badgeVariants.map((badge) => (
                <Badge key={badge.variant} variant={badge.variant}>
                  {badge.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Size Comparison */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Size Comparison</h2>
            {sizes.map((sizeObj) => (
              <div key={sizeObj.size} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">{sizeObj.label}</h3>
                <div className="flex flex-wrap gap-4">
                  {badgeVariants.slice(0, 6).map((badge) => (
                    <Badge key={`${badge.variant}-${sizeObj.size}`} variant={badge.variant} size={sizeObj.size}>
                      {badge.label}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* With Icons (Example) */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">With Icons</h2>
            <div className="flex flex-wrap gap-4">
              <Badge variant="primary">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                React
              </Badge>
              <Badge variant="success">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Completed
              </Badge>
              <Badge variant="warning">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Alert
              </Badge>
              <Badge variant="info">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Info
              </Badge>
              <Badge variant="accent">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </Badge>
            </div>
          </div>

          {/* With Counts */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">With Counts</h2>
            <div className="flex flex-wrap gap-4">
              <Badge variant="primary">New <span className="ml-1 font-bold">12</span></Badge>
              <Badge variant="success">Done <span className="ml-1 font-bold">45</span></Badge>
              <Badge variant="warning">Pending <span className="ml-1 font-bold">8</span></Badge>
              <Badge variant="info">Views <span className="ml-1 font-bold">1.2K</span></Badge>
              <Badge variant="accent">Hot <span className="ml-1 font-bold">🔥</span></Badge>
            </div>
          </div>
        </div>

        {/* ========== BUTTON TESTS ========== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🔘 Button Component</h2>
            <p className="text-gray-600">All button variants and sizes</p>
          </div>

          {/* Button Variants */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="success">Success Button</Button>
              <Button variant="outline" color="blue">Outline Button</Button>
              <Button variant="warning" color="blue">warning Button</Button>
              <Button variant="info" color="blue">info Button</Button>
              <Button variant="accent" color="blue">accent Button</Button>
            </div>
          </div>

          {/* Button Sizes */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm">Small Button</Button>
              <Button variant="primary" size="md">Medium Button</Button>
              <Button variant="primary" size="lg">Large Button</Button>
            </div>
          </div>

          {/* Button with Icons */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Edit
              </Button>
              <Button variant="success">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Save
              </Button>
              <Button variant="outline" color="red">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Delete
              </Button>
            </div>
          </div>

          {/* Button States */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Normal</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>
        </div>

        {/* ========== CARD TESTS ========== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🃏 Card Component</h2>
            <p className="text-gray-600">All card variants and styles</p>
          </div>

          {/* Card Variants */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default">
                <h4 className="text-lg font-bold mb-2">Default Card</h4>
                <p className="text-gray-600">This is a default card with standard styling.</p>
              </Card>
              <Card variant="outlined">
                <h4 className="text-lg font-bold mb-2">Outlined Card</h4>
                <p className="text-gray-600">This card has an outline border.</p>
              </Card>
              <Card variant="elevated">
                <h4 className="text-lg font-bold mb-2">Gradient Card</h4>
                <p className="text-gray-600">This card has a gradient background.</p>
              </Card>
            </div>
          </div>

          {/* Card Shadows */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Shadow Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card shadow="sm">
                <h4 className="text-lg font-bold mb-2">Small Shadow</h4>
                <p className="text-gray-600">Subtle shadow effect.</p>
              </Card>
              <Card shadow="md">
                <h4 className="text-lg font-bold mb-2">Medium Shadow</h4>
                <p className="text-gray-600">Moderate shadow effect.</p>
              </Card>
              <Card shadow="lg">
                <h4 className="text-lg font-bold mb-2">Large Shadow</h4>
                <p className="text-gray-600">Strong shadow effect.</p>
              </Card>
            </div>
          </div>

          {/* Card Hover Effects */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Hover Effects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card hover="lift">
                <h4 className="text-lg font-bold mb-2">Lift on Hover</h4>
                <p className="text-gray-600">Card lifts up when you hover over it.</p>
              </Card>
              <Card hover="glow">
                <h4 className="text-lg font-bold mb-2">Glow on Hover</h4>
                <p className="text-gray-600">Card glows when you hover over it.</p>
              </Card>
              <Card hover="fade">
                <h4 className="text-lg font-bold mb-2">Fade on Hover</h4>
                <p className="text-gray-600">Card fades when you hover over it.</p>
              </Card>
            </div>
          </div>

          {/* Background Card */}


          <BackgroundCard className='mt-4'>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Background Card</h3>

            <BackgroundCard variant="default" size="sm" className="mb-4" id="background-card-default" >
              <h4 className="text-lg font-bold mb-2">Default Card</h4>
              <p className="text-gray-600">This card has a background color.</p>
            </BackgroundCard>
            <BackgroundCard variant="outlined" size="md" className="mb-4" id="background-card-outlined">
              <h4 className="text-lg font-bold mb-2">Outlined Card</h4>
              <p className="text-gray-600">This card has a background color.</p>
            </BackgroundCard>
            <BackgroundCard variant="elevated" size="lg" className="mb-4" id="background-card-elevated">
              <h4 className="text-lg font-bold mb-2">Elevated Card</h4>
              <p className="text-gray-600">This card has a background color.</p>
            </BackgroundCard>
                <BackgroundCard variant="colored" size="sm" className="mb-4" id="background-card-filled">
                  <h4 className="text-lg font-bold mb-2">colored Card</h4>
              <p className="text-gray-600">This card has a background color.</p>
            </BackgroundCard>

          </BackgroundCard>

        </div>

        {/* ========== TEXT TESTS ========== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">📝 Text Component</h2>
            <p className="text-gray-600">All text variants and sizes</p>
          </div>

          {/* Text Variants */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Variants</h3>
            <div className="space-y-4">
              <Text variant="h1" color='pink'>Heading 1 - Large Title with Pink Color</Text>
              <Text variant="h2" color='primary'>Heading 2 - Section Title with Primary Color</Text>
              <Text variant="h3" color='secondary'>Heading 3 - Subsection Title with Secondary Color</Text>
              <Text variant="body" color='accent'>Body Text - This is regular body text for paragraphs and content with Accent Color</Text>
              <Text variant="small" color='black'>Small Text - This is smaller text for captions and notes with Black Color</Text>
            </div>
          </div>

          {/* Text Colors */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Colors</h3>
            <div className="space-y-4">
              <Text variant="h3" color="primary">Primary Color Text</Text>
              <Text variant="h3" color="secondary">Secondary Color Text</Text>
              <Text variant="h3" color="accent">Accent Color Text</Text>
              <Text variant="body" color="muted">Muted Color Text</Text>
            </div>
          </div>

          {/* Text Weights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Font Weights</h3>
            <div className="space-y-4">
              <Text variant="body" weight="light">Light Weight Text</Text>
              <Text variant="body" weight="normal">Normal Weight Text</Text>
              <Text variant="body" weight="medium">Medium Weight Text</Text>
              <Text variant="body" weight="semibold">Semibold Weight Text</Text>
              <Text variant="body" weight="bold">Bold Weight Text</Text>
            </div>
          </div>

          {/* Text Gradients */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Gradient Text</h3>
            <div className="space-y-4">
              <Text variant="h1" gradient="blue">Blue Gradient Heading</Text>
              <Text variant="h2" gradient="purple">Purple Gradient Heading</Text>
              <Text variant="h2" gradient="pink">Pink Gradient Heading</Text>
            </div>
          </div>
        </div>

        {/* ========== PRODUCT CARD TESTS ========== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🛍️ Product Card Component</h2>
            <p className="text-gray-600">E-commerce product cards with various features</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Product Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  badge={product.badge}
                  badgeVariant={product.badgeVariant}
                  onAddToCart={() => console.log('Added to cart:', product.title)}
                  onViewDetails={() => console.log('View details:', product.title)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ========== TABLE TESTS ========== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">📊 Table Component</h2>
            <p className="text-gray-600">Data tables with various styling options</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Basic Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={false}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Bordered Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={false}
              hoverable={true}
              bordered={true}
            />
          </div>
        </div>

        {/* ========== TABS TESTS ========== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">📑 Tabs Component</h2>
            <p className="text-gray-600">Tabbed interfaces with different styles</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Default Tabs</h3>
            <Tabs
              items={tabItems}
              defaultActiveKey="overview"
              variant="default"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Pills Tabs</h3>
            <Tabs
              items={tabItems}
              defaultActiveKey="overview"
              variant="pills"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Underline Tabs</h3>
            <Tabs
              items={tabItems}
              defaultActiveKey="overview"
              variant="underline"
            />
          </div>
        </div>

        

        

      </div>
    </div>
  );
};

export default Test;
