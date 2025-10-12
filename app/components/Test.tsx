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
      badgeVariant: "cyanblue" as const
    },
    {
      title: "Wireless Headphones",
      description: "Noise-cancelling wireless headphones with premium sound quality.",
      price: "$199",
      image: "/images/example.png",
      badge: "Sale",
      badgeVariant: "elegant" as const
    },
    {
      title: "Smart Watch",
      description: "Advanced smartwatch with health monitoring and fitness tracking.",
      price: "$399",
      image: "/images/example.png",
      badge: "Popular",
      badgeVariant: "ocean" as const
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
        <Badge variant={value === 'Active' ? 'elegant' : 'rose'} size="sm">
          {value}
        </Badge>
      )
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Component Library Test</h1>
          <p className="text-xl text-gray-600">Comprehensive showcase of all UI components</p>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">All Text Variants</h3>
            <div className="space-y-4">
              <Text variant="h1" color='primary'>Heading 1 - Large Title with Pink Color</Text>
              <Text variant="h2" color='primary'>Heading 2 - Section Title with Primary Color</Text>
              <Text variant="h3" color='secondary'>Heading 3 - Subsection Title with Secondary Color</Text>
              <Text variant="h4" color='accent'>Heading 4 - Smaller Heading with Accent Color</Text>
              <Text variant="h5" color='black'>Heading 5 - Even Smaller Heading with Black Color</Text>
              <Text variant="h6" color='gray'>Heading 6 - Smallest Heading with Gray Color</Text>
              <Text variant="body" color='primary'>Body Text - This is regular body text for paragraphs and content with Primary Color</Text>
              <Text variant="caption" color='muted'>Caption Text - This is caption text for image captions and descriptions with Muted Color</Text>
              <Text variant="small" color='black'>Small Text - This is smaller text for fine print and notes with Black Color</Text>
              <Text variant="stock" color='secondary'>Stock Text - This is stock variant text with Secondary Color</Text>
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
            <p className="text-gray-600">Modern e-commerce cards with themed variants and shadows</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Emerald Cards</h3>
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
                  variant="emerald"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">CyanBlue Cards</h3>
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
                  variant="cyanblue"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Elegant Cards</h3>
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
                  variant="elegant"
                />
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Dark Cards</h3>
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
                  variant="dark"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Sunset Cards</h3>
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
                  variant="sunset"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Rose Cards</h3>
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
                  variant="rose"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Fuchsia Cards</h3>
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
                  variant="fuchsia"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Outline Cards</h3>
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
                  variant="outline"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Lime Cards</h3>
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
                  variant="lime"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Sky Cards</h3>
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
                  variant="sky"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ocean Cards</h3>
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
                  variant="ocean"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ========== TABLE TESTS ========== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">📊 Table Component</h2>
            <p className="text-gray-600">Modern data tables with gradient themes and shadows</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Emerald Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={false}
              variant="emerald"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">CyanBlue Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={false}
              variant="cyanblue"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Elegant Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={false}
              variant="elegant"
            />
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Dark Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={false}
              variant="dark"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Sunset Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={false}
              variant="sunset"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Rose Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={true}
              variant="rose"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Fuchsia Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={false}
              variant="fuchsia"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Outline Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={false}
              variant="outline"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Lime Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={false}
              variant="lime"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Sky Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={false}
              variant="sky"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ocean Table</h3>
            <Table
              columns={tableColumns}
              data={tableData}
              striped={true}
              hoverable={true}
              bordered={false}
              variant="ocean"
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Emerald Tabs</h3>
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: 'Tab 1',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">First Tab Content</Text>
                      <Text variant="body" color="gray">
                        This is the content for the first tab. You can add any component or text here.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab2',
                  label: 'Tab 2',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Second Tab Content</Text>
                      <Text variant="body" color="gray">
                        This is the content for the second tab. You can customize this content.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab3',
                  label: 'Tab 3',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Third Tab Content</Text>
                      <Text variant="body" color="gray">
                        This is the content for the third tab. Add your custom content here.
                      </Text>
                    </div>
                  )
                }
              ]}
              defaultActiveKey="tab1"
              variant="emerald"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Fuchsia Tabs</h3>
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: 'Tab 1',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">First Tab Content</Text>
                      <Text variant="body" color="gray">
                        This is the content for the first tab. You can add any component or text here.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab2',
                  label: 'Tab 2',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Second Tab Content</Text>
                      <Text variant="body" color="gray">
                        This is the content for the second tab. You can customize this content.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab3',
                  label: 'Tab 3',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Third Tab Content</Text>
                      <Text variant="body" color="gray">
                        This is the content for the third tab. Add your custom content here.
                      </Text>
                    </div>
                  )
                }
              ]}
              defaultActiveKey="tab1"
              variant="fuchsia"
              size="md"
              fullWidth={false}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Outline Tabs</h3>
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: 'Tab 1',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">First Tab Content</Text>
                      <Text variant="body" color="gray">
                        This is the content for the first tab. You can add any component or text here.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab2',
                  label: 'Tab 2',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Second Tab Content</Text>
                      <Text variant="body" color="gray">
                        This is the content for the second tab. You can customize this content.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab3',
                  label: 'Tab 3',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Third Tab Content</Text>
                      <Text variant="body" color="gray">
                        This is the content for the third tab. Add your custom content here.
                      </Text>
                    </div>
                  )
                }
              ]}
              defaultActiveKey="tab1"
              variant="outline"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">CyanBlue Tabs</h3>
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: 'Dashboard',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Dashboard Overview</Text>
                      <Text variant="body" color="gray">
                        Modern cyan-themed tabs with clean design and smooth animations.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab2',
                  label: 'Analytics',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Analytics Data</Text>
                      <Text variant="body" color="gray">
                        View your analytics and performance metrics here.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab3',
                  label: 'Settings',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Settings Panel</Text>
                      <Text variant="body" color="gray">
                        Configure your preferences and options.
                      </Text>
                    </div>
                  )
                }
              ]}
              defaultActiveKey="tab1"
              variant="cyanblue"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Lime Tabs</h3>
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: 'Gaming',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Gaming Section</Text>
                      <Text variant="body" color="gray">
                        Lime-themed tabs with vibrant lime green glow effect.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab2',
                  label: 'Tournaments',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Tournaments</Text>
                      <Text variant="body" color="gray">
                        Check out the latest gaming tournaments and competitions.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab3',
                  label: 'Leaderboard',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Leaderboard</Text>
                      <Text variant="body" color="gray">
                        Top players and rankings displayed here.
                      </Text>
                    </div>
                  )
                }
              ]}
              defaultActiveKey="tab1"
              variant="lime"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Sunset Tabs</h3>
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: 'Creative',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Creative Content</Text>
                      <Text variant="body" color="gray">
                        Colorful gradient tabs with orange, pink, and purple hues.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab2',
                  label: 'Portfolio',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Portfolio Showcase</Text>
                      <Text variant="body" color="gray">
                        Display your creative work and projects.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab3',
                  label: 'Gallery',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Image Gallery</Text>
                      <Text variant="body" color="gray">
                        Browse through the beautiful image collection.
                      </Text>
                    </div>
                  )
                }
              ]}
              defaultActiveKey="tab1"
              variant="sunset"
            />
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Dark Tabs</h3>
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: 'Code',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="white">Code Editor</Text>
                      <Text variant="body" color="white">
                        Dark mode tabs perfect for coding interfaces and developer tools.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab2',
                  label: 'Terminal',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="white">Terminal</Text>
                      <Text variant="body" color="white">
                        Command line interface and terminal output.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab3',
                  label: 'Console',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="white">Console Logs</Text>
                      <Text variant="body" color="white">
                        View application logs and debug information.
                      </Text>
                    </div>
                  )
                }
              ]}
              defaultActiveKey="tab1"
              variant="dark"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Elegant Tabs</h3>
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: 'Premium',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Premium Content</Text>
                      <Text variant="body" color="gray">
                        Elegant tabs with golden amber accents for luxury brands.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab2',
                  label: 'Exclusive',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Exclusive Access</Text>
                      <Text variant="body" color="gray">
                        Special features available to premium members only.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab3',
                  label: 'VIP',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">VIP Benefits</Text>
                      <Text variant="body" color="gray">
                        Discover all the exclusive VIP perks and advantages.
                      </Text>
                    </div>
                  )
                }
              ]}
              defaultActiveKey="tab1"
              variant="elegant"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Rose Tabs (Horizontal)</h3>
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: 'Home',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Home Page</Text>
                      <Text variant="body" color="gray">
                        Clean minimal design with rose accent border.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab2',
                  label: 'About',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">About Section</Text>
                      <Text variant="body" color="gray">
                        Simple and elegant tab style.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab3',
                  label: 'Contact',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Contact Info</Text>
                      <Text variant="body" color="gray">
                        Get in touch with us here.
                      </Text>
                    </div>
                  )
                }
              ]}
              defaultActiveKey="tab1"
              variant="rose"
              orientation="horizontal"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Sky Tabs</h3>
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: 'Design',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Design System</Text>
                      <Text variant="body" color="gray">
                        Beautiful sky blue gradient with modern styling.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab2',
                  label: 'Development',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Development Guide</Text>
                      <Text variant="body" color="gray">
                        Build beautiful interfaces with ease.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab3',
                  label: 'Documentation',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Documentation</Text>
                      <Text variant="body" color="gray">
                        Complete guide to all features and APIs.
                      </Text>
                    </div>
                  )
                }
              ]}
              defaultActiveKey="tab1"
              variant="sky"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ocean Tabs</h3>
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: 'Ocean',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Ocean Theme</Text>
                      <Text variant="body" color="gray">
                        Fully rounded tabs with blue, teal and cyan gradient.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab2',
                  label: 'Beach',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Beach Vibes</Text>
                      <Text variant="body" color="gray">
                        Relax with soothing ocean colors.
                      </Text>
                    </div>
                  )
                },
                {
                  key: 'tab3',
                  label: 'Waves',
                  content: (
                    <div className="space-y-4">
                      <Text variant="h3" color="black">Wave Design</Text>
                      <Text variant="body" color="gray">
                        Smooth flowing design elements.
                      </Text>
                    </div>
                  )
                }
              ]}
              defaultActiveKey="tab1"
              variant="ocean"
            />
          </div>
        </div>

        {/* ========== BADGE TESTS ========== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🏷️ Badge Component</h2>
            <p className="text-gray-600">Status badges and labels with themed variants</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Emerald Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="emerald">Default</Badge>
                <Badge variant="emerald" size="sm">Small</Badge>
                <Badge variant="emerald" size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Outline Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline">Outline</Badge>
                <Badge variant="outline" size="sm">Small</Badge>
                <Badge variant="outline" size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">CyanBlue Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="cyanblue">Modern</Badge>
                <Badge variant="cyanblue" size="sm">Small</Badge>
                <Badge variant="cyanblue" size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Lime Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="lime">Lime</Badge>
                <Badge variant="lime" size="sm">Small</Badge>
                <Badge variant="lime" size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sunset Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="sunset">Gradient</Badge>
                <Badge variant="sunset" size="sm">Small</Badge>
                <Badge variant="sunset" size="lg">Large</Badge>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Dark Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="dark">Dark</Badge>
                <Badge variant="dark" size="sm">Small</Badge>
                <Badge variant="dark" size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Elegant Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="elegant">Elegant</Badge>
                <Badge variant="elegant" size="sm">Small</Badge>
                <Badge variant="elegant" size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Fuchsia Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="fuchsia">Fuchsia</Badge>
                <Badge variant="fuchsia" size="sm">Small</Badge>
                <Badge variant="fuchsia" size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sky Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="sky">Sky</Badge>
                <Badge variant="sky" size="sm">Small</Badge>
                <Badge variant="sky" size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ocean Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="ocean">Ocean</Badge>
                <Badge variant="ocean" size="sm">Small</Badge>
                <Badge variant="ocean" size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rose Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="rose">Minimal</Badge>
                <Badge variant="rose" size="sm">Small</Badge>
                <Badge variant="rose" size="lg">Large</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* ========== BUTTON TESTS ========== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🔘 Button Component</h2>
            <p className="text-gray-600">Interactive buttons with themed variants and sizes</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Emerald Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="emerald" size="sm">Small</Button>
                <Button variant="emerald">Medium</Button>
                <Button variant="emerald" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Outline Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm">Small</Button>
                <Button variant="outline">Medium</Button>
                <Button variant="outline" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">CyanBlue Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="cyanblue" size="sm">Small</Button>
                <Button variant="cyanblue">Medium</Button>
                <Button variant="cyanblue" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Lime Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="lime" size="sm">Small</Button>
                <Button variant="lime">Medium</Button>
                <Button variant="lime" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sunset Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="sunset" size="sm">Small</Button>
                <Button variant="sunset">Medium</Button>
                <Button variant="sunset" size="lg">Large</Button>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Dark Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="dark" size="sm">Small</Button>
                <Button variant="dark">Medium</Button>
                <Button variant="dark" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Elegant Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="elegant" size="sm">Small</Button>
                <Button variant="elegant">Medium</Button>
                <Button variant="elegant" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Fuchsia Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="fuchsia" size="sm">Small</Button>
                <Button variant="fuchsia">Medium</Button>
                <Button variant="fuchsia" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sky Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="sky" size="sm">Small</Button>
                <Button variant="sky">Medium</Button>
                <Button variant="sky" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ocean Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="ocean" size="sm">Small</Button>
                <Button variant="ocean">Medium</Button>
                <Button variant="ocean" size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rose Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="rose" size="sm">Small</Button>
                <Button variant="rose">Medium</Button>
                <Button variant="rose" size="lg">Large</Button>
              </div>
            </div>
          </div>
        </div>

        {/* ========== THEME PREVIEW SECTION ========== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🎨 Theme Preview Gallery</h2>
            <p className="text-gray-600 mb-2">Explore 75+ color combinations organized by color families</p>
            <p className="text-sm text-gray-500">🔴 Red • 💖 Pink • 🟣 Purple • 🔵 Blue • 🍃 Green • 🌇 Orange • ⬛ Gray</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">

            {/* ==================== 🎨 MIXED VARIATIONS (Popular Picks) ==================== */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 pb-2 border-b-2 border-gray-200">🎨 Mixed Variations - Popular Picks</h2>
            </div>

            {/* Crimson Fire Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🔥 Crimson Fire</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/60 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-lg shadow-lg shadow-red-500/40 hover:shadow-xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-rose-500 text-white rounded-full shadow-md shadow-rose-500/50 hover:shadow-lg hover:shadow-rose-500/70 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            

            {/* Violet Magic Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">✨ Violet Magic</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-violet-600 text-white rounded-lg shadow-lg shadow-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg shadow-xl shadow-violet-500/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            

            

            {/* Coral Reef Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🪸 Coral Reef</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg shadow-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-lg shadow-xl shadow-pink-500/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-rose-400 text-white rounded-full shadow-lg shadow-rose-400/50 hover:shadow-xl hover:shadow-rose-400/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Midnight Shadow Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌙 Midnight Shadow</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-slate-700 text-white rounded-lg shadow-lg shadow-slate-700/50 hover:shadow-2xl hover:shadow-slate-700/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-slate-700 to-gray-900 text-white rounded-lg shadow-xl shadow-slate-700/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow-lg shadow-gray-800/60 hover:shadow-2xl hover:shadow-gray-800/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Cherry Blossom Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌸 Cherry Blossom</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-pink-300 text-gray-800 rounded-lg shadow-lg shadow-pink-300/50 hover:shadow-2xl hover:shadow-pink-300/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-pink-200 to-rose-300 text-gray-800 rounded-lg shadow-xl shadow-pink-300/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-rose-200 text-gray-800 rounded-2xl shadow-lg shadow-rose-200/50 hover:shadow-xl hover:shadow-rose-200/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Lavender Fields Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💜 Lavender Fields</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-purple-400 text-white rounded-lg shadow-lg shadow-purple-400/50 hover:shadow-2xl hover:shadow-purple-400/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-300 to-violet-500 text-white rounded-lg shadow-xl shadow-purple-400/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-violet-400 text-white rounded-full shadow-lg shadow-violet-400/50 hover:shadow-xl hover:shadow-violet-400/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>



            {/* Tangerine Twist Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍊 Tangerine Twist</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg shadow-orange-600/50 hover:shadow-2xl hover:shadow-orange-600/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-xl shadow-orange-600/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-red-500 text-white rounded-2xl shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            

            {/* Slate Storm Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ Slate Storm</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-slate-600 text-white rounded-lg shadow-lg shadow-slate-600/50 hover:shadow-2xl hover:shadow-slate-600/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-700 text-white rounded-lg shadow-xl shadow-slate-600/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-gray-700 text-white rounded-xl shadow-lg shadow-gray-700/60 hover:shadow-2xl hover:shadow-gray-700/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Ruby Red Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💍 Ruby Red</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-red-700 text-white rounded-lg shadow-lg shadow-red-700/50 hover:shadow-2xl hover:shadow-red-700/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg shadow-xl shadow-red-700/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-pink-700 text-white rounded-2xl shadow-lg shadow-pink-700/50 hover:shadow-xl hover:shadow-pink-700/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>


            {/* Peachy Keen Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍑 Peachy Keen</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-400 text-white rounded-lg shadow-lg shadow-orange-400/50 hover:shadow-2xl hover:shadow-orange-400/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-300 to-pink-400 text-white rounded-lg shadow-xl shadow-orange-400/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-pink-400 text-white rounded-xl shadow-lg shadow-pink-400/50 hover:shadow-xl hover:shadow-pink-400/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            

            {/* Magenta Storm Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💗 Magenta Storm</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-fuchsia-600 text-white rounded-lg shadow-lg shadow-fuchsia-600/50 hover:shadow-2xl hover:shadow-fuchsia-600/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-700 text-white rounded-lg shadow-xl shadow-fuchsia-600/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-purple-700 text-white rounded-full shadow-lg shadow-purple-700/60 hover:shadow-xl hover:shadow-purple-700/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Bronze Glow Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🥉 Bronze Glow</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-amber-700 text-white rounded-lg shadow-lg shadow-amber-700/50 hover:shadow-2xl hover:shadow-amber-700/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-lg shadow-xl shadow-amber-700/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-orange-700 text-white rounded-xl shadow-lg shadow-orange-700/60 hover:shadow-2xl hover:shadow-orange-700/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            

            {/* Burgundy Wine Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍷 Burgundy Wine</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-red-800 text-white rounded-lg shadow-lg shadow-red-800/50 hover:shadow-2xl hover:shadow-red-800/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-red-800 to-rose-700 text-white rounded-lg shadow-xl shadow-red-800/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-rose-700 text-white rounded-full shadow-lg shadow-rose-700/60 hover:shadow-xl hover:shadow-rose-700/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Hot Pink Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💕 Hot Pink</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-lg shadow-pink-600/50 hover:shadow-2xl hover:shadow-pink-600/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white rounded-lg shadow-xl shadow-pink-600/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-fuchsia-600 text-white rounded-2xl shadow-lg shadow-fuchsia-600/60 hover:shadow-2xl hover:shadow-fuchsia-600/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            

            

            {/* Plum Purple Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍇 Plum Purple</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow-lg shadow-purple-700/50 hover:shadow-2xl hover:shadow-purple-700/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-700 to-fuchsia-700 text-white rounded-lg shadow-xl shadow-purple-700/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-fuchsia-700 text-white rounded-full shadow-lg shadow-fuchsia-700/60 hover:shadow-xl hover:shadow-fuchsia-700/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Steel Gray Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🔩 Steel Gray</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg shadow-gray-600/50 hover:shadow-2xl hover:shadow-gray-600/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-gray-500 to-slate-700 text-white rounded-lg shadow-xl shadow-gray-600/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-slate-700 text-white rounded-xl shadow-lg shadow-slate-700/60 hover:shadow-2xl hover:shadow-slate-700/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            

            {/* Twilight Blue Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌆 Twilight Blue</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-lg shadow-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded-lg shadow-xl shadow-indigo-500/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg shadow-purple-500/60 hover:shadow-xl hover:shadow-purple-500/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Watermelon Fresh Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍉 Watermelon Fresh</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-rose-500 text-white rounded-lg shadow-lg shadow-rose-500/50 hover:shadow-2xl hover:shadow-rose-500/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-lg shadow-xl shadow-rose-500/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow-lg shadow-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Charcoal Dark Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🖤 Charcoal Dark</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow-lg shadow-gray-900/60 hover:shadow-2xl hover:shadow-gray-900/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg shadow-xl shadow-gray-900/50 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-black text-white rounded-2xl shadow-2xl shadow-black/60 hover:shadow-2xl hover:shadow-black/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            

            {/* ==================== PINK & ROSE FAMILY ==================== */}
            <div className="mb-8 mt-12">
              <h2 className="text-2xl font-bold text-pink-600 mb-4 pb-2 border-b-2 border-pink-200">💖 Pink & Rose Family</h2>
            </div>

            {/* Neon Pink Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💖 Neon Pink</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-xl shadow-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white rounded-lg shadow-2xl shadow-pink-500/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-fuchsia-500 text-white rounded-2xl shadow-xl shadow-fuchsia-500/70 hover:shadow-2xl hover:shadow-fuchsia-500/90 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* ==================== GRAY & BLACK FAMILY ==================== */}
            <div className="mb-8 mt-12">
              <h2 className="text-2xl font-bold text-gray-700 mb-4 pb-2 border-b-2 border-gray-300">⬛ Gray & Black Family</h2>
            </div>

            {/* Carbon Black Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⬛ Carbon Black</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-black text-white rounded-lg shadow-2xl shadow-black/70 hover:shadow-2xl hover:shadow-black/90 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg shadow-2xl shadow-black/60 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-gray-950 text-white rounded-full shadow-2xl shadow-gray-950/80 hover:shadow-2xl hover:shadow-gray-950/95 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* ==================== GREEN VARIANTS ==================== */}
            <div className="mb-8 mt-12">
              <h2 className="text-2xl font-bold text-green-600 mb-4 pb-2 border-b-2 border-green-200">🍃 Green Variants - All Shades</h2>
              <p className="text-sm text-gray-500 mb-4">Mint Ice • Mint Fresh • Seafoam • Sage • Emerald Shine • Emerald Forest • Jade • Forest • Electric Lime • Lime Zest</p>
            </div>

            {/* Mint Ice Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍃 Mint Ice</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-green-300 text-gray-900 rounded-lg shadow-lg shadow-green-300/50 hover:shadow-2xl hover:shadow-green-300/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-green-200 to-teal-300 text-gray-900 rounded-lg shadow-xl shadow-green-300/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-teal-300 text-gray-900 rounded-xl shadow-lg shadow-teal-300/60 hover:shadow-2xl hover:shadow-teal-300/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Mint Fresh Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌿 Mint Fresh</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg shadow-green-500/50 hover:shadow-2xl hover:shadow-green-500/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-lg shadow-xl shadow-green-500/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Seafoam Green Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌊 Seafoam Green</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-teal-300 text-gray-900 rounded-lg shadow-lg shadow-teal-300/50 hover:shadow-2xl hover:shadow-teal-300/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-teal-200 to-green-300 text-gray-900 rounded-lg shadow-xl shadow-teal-300/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-green-300 text-gray-900 rounded-2xl shadow-lg shadow-green-300/60 hover:shadow-2xl hover:shadow-green-300/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Sage Green Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌿 Sage Green</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-green-400 text-white rounded-lg shadow-lg shadow-green-400/50 hover:shadow-2xl hover:shadow-green-400/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-green-300 to-emerald-500 text-white rounded-lg shadow-xl shadow-green-400/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Jade Green Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💚 Jade Green</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg shadow-green-600/50 hover:shadow-2xl hover:shadow-green-600/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg shadow-xl shadow-green-600/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-emerald-700 text-white rounded-full shadow-lg shadow-emerald-700/60 hover:shadow-xl hover:shadow-emerald-700/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Emerald Forest Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌳 Emerald Forest</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-lg shadow-emerald-600/50 hover:shadow-2xl hover:shadow-emerald-600/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-700 text-white rounded-lg shadow-xl shadow-emerald-600/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-green-700 text-white rounded-xl shadow-lg shadow-green-700/60 hover:shadow-2xl hover:shadow-green-700/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Forest Green Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Forest Green</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-green-800 text-white rounded-lg shadow-xl shadow-green-800/60 hover:shadow-2xl hover:shadow-green-800/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-green-800 to-emerald-800 text-white rounded-lg shadow-2xl shadow-green-800/50 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-emerald-800 text-white rounded-full shadow-xl shadow-emerald-800/70 hover:shadow-2xl hover:shadow-emerald-800/90 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Electric Lime Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ Electric Lime</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-lime-400 text-gray-900 rounded-lg shadow-xl shadow-lime-400/60 hover:shadow-2xl hover:shadow-lime-400/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-lime-300 to-green-500 text-white rounded-lg shadow-2xl shadow-lime-400/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow-xl shadow-green-500/70 hover:shadow-2xl hover:shadow-green-500/90 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Lime Zest Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍋 Lime Zest</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-lime-600 text-white rounded-lg shadow-lg shadow-lime-600/50 hover:shadow-2xl hover:shadow-lime-600/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-lg shadow-xl shadow-lime-600/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/60 hover:shadow-xl hover:shadow-green-500/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Emerald Shine Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">✨ Emerald Shine</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg shadow-xl shadow-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-600 text-white rounded-lg shadow-2xl shadow-emerald-500/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-teal-600 text-white rounded-xl shadow-xl shadow-teal-600/70 hover:shadow-2xl hover:shadow-teal-600/90 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Neon Green Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ Neon Green</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-lime-500 text-white rounded-lg shadow-lg shadow-lime-500/50 hover:shadow-2xl hover:shadow-lime-500/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-lime-400 to-green-600 text-white rounded-lg shadow-xl shadow-lime-500/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg shadow-green-600/50 hover:shadow-xl hover:shadow-green-600/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Forest Moss Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Forest Moss</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-green-700 text-white rounded-lg shadow-lg shadow-green-700/50 hover:shadow-2xl hover:shadow-green-700/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-700 text-white rounded-lg shadow-xl shadow-green-700/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-teal-700 text-white rounded-xl shadow-lg shadow-teal-700/50 hover:shadow-xl hover:shadow-teal-700/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* ==================== ORANGE & YELLOW FAMILY ==================== */}
            <div className="mb-8 mt-12">
              <h2 className="text-2xl font-bold text-orange-600 mb-4 pb-2 border-b-2 border-orange-200">🌇 Orange & Yellow Family</h2>
            </div>

            {/* Sunset Orange Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌇 Sunset Orange</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-xl shadow-orange-600/60 hover:shadow-2xl hover:shadow-orange-600/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg shadow-xl shadow-orange-600/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-amber-600 text-white rounded-2xl shadow-xl shadow-amber-600/70 hover:shadow-2xl hover:shadow-amber-600/90 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Neon Orange Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🟧 Neon Orange</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-xl shadow-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg shadow-2xl shadow-orange-500/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-red-500 text-white rounded-full shadow-xl shadow-red-500/70 hover:shadow-2xl hover:shadow-red-500/90 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Amber Sunset Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌄 Amber Sunset</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-amber-600 text-white rounded-lg shadow-xl shadow-amber-600/60 hover:shadow-2xl hover:shadow-amber-600/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg shadow-2xl shadow-amber-600/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-orange-600 text-white rounded-xl shadow-xl shadow-orange-600/70 hover:shadow-2xl hover:shadow-orange-600/90 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Tropical Mango Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🥭 Tropical Mango</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-400 to-amber-600 text-white rounded-lg shadow-xl shadow-orange-500/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-amber-600 text-white rounded-2xl shadow-lg shadow-amber-600/60 hover:shadow-2xl hover:shadow-amber-600/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Honey Gold Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍯 Honey Gold</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow-lg shadow-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-600 text-white rounded-lg shadow-xl shadow-amber-500/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-yellow-600 text-white rounded-2xl shadow-lg shadow-yellow-600/60 hover:shadow-xl hover:shadow-yellow-600/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Golden Hour Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌅 Golden Hour</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-lg shadow-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg shadow-xl shadow-yellow-500/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* ==================== BLUE & CYAN FAMILY ==================== */}
            <div className="mb-8 mt-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 pb-2 border-b-2 border-blue-200">🌊 Blue & Cyan Family</h2>
            </div>

            {/* Ocean Breeze Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌬️ Ocean Breeze</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg shadow-lg shadow-cyan-600/50 hover:shadow-2xl hover:shadow-cyan-600/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg shadow-xl shadow-cyan-600/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/60 hover:shadow-2xl hover:shadow-blue-600/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Neon Cyan Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💠 Neon Cyan</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-cyan-400 text-gray-900 rounded-lg shadow-xl shadow-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-300 to-blue-400 text-white rounded-lg shadow-2xl shadow-cyan-400/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-blue-400 text-white rounded-full shadow-xl shadow-blue-400/70 hover:shadow-2xl hover:shadow-blue-400/90 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Turquoise Glow Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🔷 Turquoise Glow</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-teal-400 text-white rounded-lg shadow-xl shadow-teal-400/60 hover:shadow-2xl hover:shadow-teal-400/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-teal-300 to-cyan-500 text-white rounded-lg shadow-2xl shadow-teal-400/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-cyan-500 text-white rounded-full shadow-xl shadow-cyan-500/70 hover:shadow-2xl hover:shadow-cyan-500/90 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Sapphire Sky Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💠 Sapphire Sky</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-sky-600 text-white rounded-lg shadow-xl shadow-sky-600/60 hover:shadow-2xl hover:shadow-sky-600/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-lg shadow-2xl shadow-sky-600/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-blue-700 text-white rounded-2xl shadow-xl shadow-blue-700/70 hover:shadow-2xl hover:shadow-blue-700/90 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Cobalt Blue Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🔵 Cobalt Blue</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow-xl shadow-blue-700/60 hover:shadow-2xl hover:shadow-blue-700/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-lg shadow-2xl shadow-blue-700/50 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-indigo-800 text-white rounded-xl shadow-xl shadow-indigo-800/70 hover:shadow-2xl hover:shadow-indigo-800/90 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Deep Ocean Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌊 Deep Ocean</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-800 text-white rounded-lg shadow-lg shadow-blue-800/50 hover:shadow-2xl hover:shadow-blue-800/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-800 to-cyan-700 text-white rounded-lg shadow-xl shadow-blue-800/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-cyan-700 text-white rounded-xl shadow-lg shadow-cyan-700/60 hover:shadow-2xl hover:shadow-cyan-700/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Sky Blue Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">☁️ Sky Blue</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-sky-400 text-white rounded-lg shadow-lg shadow-sky-400/50 hover:shadow-2xl hover:shadow-sky-400/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-sky-300 to-blue-400 text-white rounded-lg shadow-xl shadow-sky-400/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-blue-400 text-white rounded-2xl shadow-lg shadow-blue-400/60 hover:shadow-xl hover:shadow-blue-400/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

              {/* Electric Blue Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ Electric Blue</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-lg shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-cyan-500 text-white rounded-2xl shadow-lg shadow-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Glacier Blue Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🧊 Glacier Blue</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-300 text-gray-900 rounded-lg shadow-lg shadow-blue-300/50 hover:shadow-2xl hover:shadow-blue-300/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-200 to-cyan-300 text-gray-900 rounded-lg shadow-xl shadow-blue-300/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-cyan-300 text-gray-900 rounded-xl shadow-lg shadow-cyan-300/60 hover:shadow-2xl hover:shadow-cyan-300/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Aqua Marine Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌊 Aqua Marine</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg shadow-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-600 text-white rounded-lg shadow-xl shadow-teal-500/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-cyan-600 text-white rounded-full shadow-lg shadow-cyan-600/50 hover:shadow-xl hover:shadow-cyan-600/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Arctic Ice Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">❄️ Arctic Ice</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg shadow-xl shadow-cyan-500/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-blue-400 text-white rounded-2xl shadow-lg shadow-blue-400/50 hover:shadow-xl hover:shadow-blue-400/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Sapphire Dream Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💎 Sapphire Dream</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/60 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-xl shadow-blue-600/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/70 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>
            
            {/* ==================== PURPLE & VIOLET FAMILY ==================== */}
            <div className="mb-8 mt-12">
              <h2 className="text-2xl font-bold text-purple-600 mb-4 pb-2 border-b-2 border-purple-200">👑 Purple & Violet Family</h2>
            </div>

            {/* Royal Purple Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">👑 Royal Purple</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-purple-800 text-white rounded-lg shadow-xl shadow-purple-800/60 hover:shadow-2xl hover:shadow-purple-800/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-800 to-violet-800 text-white rounded-lg shadow-2xl shadow-purple-800/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-violet-800 text-white rounded-xl shadow-xl shadow-violet-800/70 hover:shadow-2xl hover:shadow-violet-800/90 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Coral Pink Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🐚 Coral Pink</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-rose-400 text-white rounded-lg shadow-lg shadow-rose-400/50 hover:shadow-2xl hover:shadow-rose-400/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-rose-300 to-pink-400 text-white rounded-lg shadow-xl shadow-rose-400/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-pink-400 text-white rounded-2xl shadow-lg shadow-pink-400/60 hover:shadow-2xl hover:shadow-pink-400/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            

            {/* Graphite Gray Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🎨 Graphite Gray</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-lg shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-gray-600 to-slate-800 text-white rounded-lg shadow-xl shadow-gray-700/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-slate-800 text-white rounded-xl shadow-lg shadow-slate-800/60 hover:shadow-2xl hover:shadow-slate-800/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Lemon Yellow Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍋 Lemon Yellow</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg shadow-lg shadow-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-300 to-amber-400 text-gray-900 rounded-lg shadow-xl shadow-yellow-400/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-amber-400 text-gray-900 rounded-2xl shadow-lg shadow-amber-400/60 hover:shadow-2xl hover:shadow-amber-400/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            

            {/* Lavender Dream Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🪻 Lavender Dream</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-purple-300 text-gray-900 rounded-lg shadow-lg shadow-purple-300/50 hover:shadow-2xl hover:shadow-purple-300/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-200 to-violet-300 text-gray-900 rounded-lg shadow-xl shadow-purple-300/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-violet-300 text-gray-900 rounded-xl shadow-lg shadow-violet-300/60 hover:shadow-2xl hover:shadow-violet-300/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Berry Blast Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍓 Berry Blast</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-xl shadow-red-500/60 hover:shadow-2xl hover:shadow-red-500/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-lg shadow-2xl shadow-red-500/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-xl shadow-pink-500/70 hover:shadow-2xl hover:shadow-pink-500/90 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Crimson Red Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🔴 Crimson Red</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-xl shadow-red-600/60 hover:shadow-2xl hover:shadow-red-600/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-lg shadow-2xl shadow-red-600/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-rose-600 text-white rounded-2xl shadow-xl shadow-rose-600/70 hover:shadow-2xl hover:shadow-rose-600/90 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            

            {/* Midnight Blue Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌃 Midnight Blue</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow-xl shadow-blue-900/60 hover:shadow-2xl hover:shadow-blue-900/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-lg shadow-2xl shadow-blue-900/50 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-indigo-900 text-white rounded-xl shadow-xl shadow-indigo-900/70 hover:shadow-2xl hover:shadow-indigo-900/90 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Neon Violet Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🟣 Neon Violet</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-violet-500 text-white rounded-lg shadow-xl shadow-violet-500/60 hover:shadow-2xl hover:shadow-violet-500/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-violet-400 to-purple-600 text-white rounded-lg shadow-2xl shadow-violet-500/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-xl shadow-purple-600/70 hover:shadow-2xl hover:shadow-purple-600/90 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Silver Metallic Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🥈 Silver Metallic</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gray-400 text-gray-900 rounded-lg shadow-lg shadow-gray-400/50 hover:shadow-2xl hover:shadow-gray-400/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-gray-300 to-slate-400 text-gray-900 rounded-lg shadow-xl shadow-gray-400/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-slate-400 text-gray-900 rounded-full shadow-lg shadow-slate-400/60 hover:shadow-2xl hover:shadow-slate-400/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Raspberry Rose Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🫐 Raspberry Rose</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-rose-600 text-white rounded-lg shadow-xl shadow-rose-600/60 hover:shadow-2xl hover:shadow-rose-600/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg shadow-2xl shadow-rose-600/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow-xl shadow-pink-600/70 hover:shadow-2xl hover:shadow-pink-600/90 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Cosmic Purple Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌌 Cosmic Purple</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-xl shadow-purple-600/60 hover:shadow-2xl hover:shadow-purple-600/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-lg shadow-2xl shadow-purple-600/50 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-indigo-700 text-white rounded-full shadow-xl shadow-indigo-700/70 hover:shadow-2xl hover:shadow-indigo-700/90 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            

            {/* Berry Blast Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍓 Berry Blast</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-xl shadow-red-500/60 hover:shadow-2xl hover:shadow-red-500/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-lg shadow-2xl shadow-red-500/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-xl shadow-pink-500/70 hover:shadow-2xl hover:shadow-pink-500/90 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            

            {/* Peach Cream Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍑 Peach Cream</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-300 text-gray-900 rounded-lg shadow-lg shadow-orange-300/50 hover:shadow-2xl hover:shadow-orange-300/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-200 to-rose-300 text-gray-900 rounded-lg shadow-xl shadow-orange-300/40 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-rose-300 text-gray-900 rounded-2xl shadow-lg shadow-rose-300/60 hover:shadow-2xl hover:shadow-rose-300/80 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Blush Pink Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💗 Blush Pink</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-pink-300 text-gray-900 rounded-lg shadow-lg shadow-pink-300/50 hover:shadow-2xl hover:shadow-pink-300/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-pink-200 to-rose-300 text-gray-900 rounded-lg shadow-xl shadow-pink-300/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-rose-300 text-gray-900 rounded-xl shadow-lg shadow-rose-300/60 hover:shadow-2xl hover:shadow-rose-300/80 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            

            {/* Copper Bronze Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🟤 Copper Bronze</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-700 text-white rounded-lg shadow-xl shadow-orange-700/60 hover:shadow-2xl hover:shadow-orange-700/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-700 to-amber-800 text-white rounded-lg shadow-2xl shadow-orange-700/50 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-amber-800 text-white rounded-full shadow-xl shadow-amber-800/70 hover:shadow-2xl hover:shadow-amber-800/90 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Neon Magenta Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌟 Neon Magenta</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-fuchsia-500 text-white rounded-lg shadow-2xl shadow-fuchsia-500/70 hover:shadow-2xl hover:shadow-fuchsia-500/90 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-fuchsia-400 to-pink-600 text-white rounded-lg shadow-2xl shadow-fuchsia-500/60 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow-2xl shadow-pink-600/80 hover:shadow-2xl hover:shadow-pink-600/95 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Amethyst Purple Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💎 Amethyst Purple</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-xl shadow-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-lg shadow-2xl shadow-purple-500/50 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-violet-600 text-white rounded-full shadow-xl shadow-violet-600/70 hover:shadow-2xl hover:shadow-violet-600/90 transition-all">
                  Rounded
                </button>
              </div>
            </div>

            {/* Caramel Gold Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🍮 Caramel Gold</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-xl shadow-yellow-600/60 hover:shadow-2xl hover:shadow-yellow-600/80 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-700 text-white rounded-lg shadow-2xl shadow-yellow-600/50 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-amber-700 text-white rounded-xl shadow-xl shadow-amber-700/70 hover:shadow-2xl hover:shadow-amber-700/90 transition-all">
                  Rounded XL
                </button>
              </div>
            </div>

            {/* Navy Storm Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⚓ Navy Storm</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-950 text-white rounded-lg shadow-2xl shadow-blue-950/70 hover:shadow-2xl hover:shadow-blue-950/90 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-lg shadow-2xl shadow-blue-950/60 hover:shadow-2xl hover:scale-105 transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl shadow-2xl shadow-slate-900/80 hover:shadow-2xl hover:shadow-slate-900/95 transition-all">
                  2XL Round
                </button>
              </div>
            </div>

            {/* Sunset Pink Theme */}
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌅 Sunset Pink</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-rose-300 text-gray-900 rounded-lg shadow-lg shadow-rose-300/50 hover:shadow-2xl hover:shadow-rose-300/70 transition-all">
                  Button
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-rose-200 to-orange-300 text-gray-900 rounded-lg shadow-xl shadow-rose-300/40 hover:shadow-2xl transition-all">
                  Gradient
                </button>
                <button className="px-6 py-3 bg-orange-300 text-gray-900 rounded-full shadow-lg shadow-orange-300/60 hover:shadow-2xl hover:shadow-orange-300/80 transition-all">
                  Rounded
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Test;
