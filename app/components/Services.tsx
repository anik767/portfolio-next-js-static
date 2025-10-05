'use client';

import { Text, Button, Card } from './common';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: ['React Native', 'Flutter', 'Native Development', 'App Store Optimization']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Security & Performance',
      description: 'Secure and optimized applications with best practices and performance monitoring.',
      features: ['Security Audits', 'Performance Optimization', 'Code Review', 'Testing']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Consulting',
      description: 'Technical consulting and guidance for your development projects and team.',
      features: ['Architecture Planning', 'Technology Stack', 'Code Review', 'Team Training']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support to keep your applications running smoothly.',
      features: ['Bug Fixes', 'Updates', 'Monitoring', '24/7 Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Text 
            variant="h2" 
            size="3xl" 
            fontFamily="rajdhani" 
            color="black" 
            weight="extrabold"
            align="center"
            className="md:text-4xl mb-4"
          >
            My Services
          </Text>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <Text 
            variant="body" 
            size="lg" 
            fontFamily="poppins" 
            color="gray" 
            align="center"
            className="max-w-3xl mx-auto"
          >
            I offer a comprehensive range of development and design services to help 
            bring your ideas to life and grow your business.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              variant="elevated"
              hover="lift"
              shadow="xl"
              className="group"
              padding="md"
            >
              <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">
                {service.icon}
              </div>
              <Text 
                variant="h3" 
                size="xl" 
                fontFamily="rajdhani" 
                color="black" 
                weight="bold"
                className="mb-3"
              >
                {service.title}
              </Text>
              <Text 
                variant="body" 
                fontFamily="poppins" 
                color="gray" 
                className="mb-4 leading-relaxed"
              >
                {service.description}
              </Text>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <Text variant="small" fontFamily="poppins" color="gray">
                      {feature}
                    </Text>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card 
            variant="filled" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
            padding="xl"
          >
            <Text 
              variant="h3" 
              size="2xl" 
              fontFamily="rajdhani" 
              color="white" 
              weight="bold"
              align="center"
              className="mb-4"
            >
              Ready to Start Your Project?
            </Text>
            <Text 
              variant="body" 
              size="lg" 
              fontFamily="poppins" 
              color="white" 
              align="center"
              className="mb-6 max-w-2xl mx-auto opacity-90"
            >
              Let's discuss your requirements and create something amazing together. 
              I'm here to help you achieve your goals.
            </Text>
            <div className="flex justify-center">
              <Button
                scrollTo="contact"
                variant="outline"
                size="md"
                Align="center"
                color="gray"
              >
                Get Started Today
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
