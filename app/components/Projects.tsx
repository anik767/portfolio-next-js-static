'use client';

import { Text, Card, Badge, Button } from './common';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern features including real-time inventory management, payment processing, and admin dashboard.',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: ['User Authentication', 'Payment Processing', 'Admin Dashboard', 'Real-time Updates', 'Mobile Responsive'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/username/ecommerce',
      status: 'Live',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with team features, real-time updates, and project tracking capabilities.',
      image: '/images/projects/taskmanager.jpg',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Docker'],
      features: ['Team Collaboration', 'Real-time Updates', 'File Sharing', 'Progress Tracking', 'Notifications'],
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/username/taskmanager',
      status: 'Live',
      category: 'Web App'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/images/projects/weather.jpg',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      features: ['Location-based Forecast', 'Interactive Maps', 'Weather Charts', '7-day Forecast', 'Mobile App'],
      liveUrl: 'https://weather-demo.com',
      githubUrl: 'https://github.com/username/weather',
      status: 'Live',
      category: 'Frontend'
    },
    {
      title: 'Blog CMS',
      description: 'A content management system for bloggers with markdown support, SEO optimization, and analytics dashboard.',
      image: '/images/projects/blog.jpg',
      technologies: ['Next.js', 'Prisma', 'MySQL', 'Vercel', 'Cloudinary'],
      features: ['Markdown Editor', 'SEO Optimization', 'Analytics Dashboard', 'Comment System', 'Multi-author Support'],
      liveUrl: 'https://blog-cms-demo.com',
      githubUrl: 'https://github.com/username/blog-cms',
      status: 'Live',
      category: 'CMS'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects, skills, and professional experience.',
      image: '/images/projects/portfolio.jpg',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vercel'],
      features: ['Responsive Design', 'Smooth Animations', 'Contact Form', 'Project Showcase', 'SEO Optimized'],
      liveUrl: 'https://portfolio-demo.com',
      githubUrl: 'https://github.com/username/portfolio',
      status: 'Live',
      category: 'Portfolio'
    },
    {
      title: 'API Integration Tool',
      description: 'A developer tool for testing and documenting REST APIs with interactive documentation and testing capabilities.',
      image: '/images/projects/api-tool.jpg',
      technologies: ['React', 'Node.js', 'Swagger', 'Jest', 'Docker'],
      features: ['API Testing', 'Interactive Docs', 'Request Builder', 'Response Validation', 'Team Sharing'],
      liveUrl: 'https://api-tool-demo.com',
      githubUrl: 'https://github.com/username/api-tool',
      status: 'Live',
      category: 'Developer Tool'
    }
  ];

  const categories = ['All', 'Full Stack', 'Web App', 'Frontend', 'CMS', 'Portfolio', 'Developer Tool'];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="projects-header" className="text-center mb-16">
          <Text 
            variant="h2" 
            size="3xl" 
            fontFamily="rajdhani" 
            color="black" 
            weight="extrabold"
            align="center"
            className="md:text-4xl mb-4"
          >
            My Projects
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
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </Text>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant={category === 'All' ? 'primary' : 'secondary'} 
              size="md"
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div id="projects-content" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              variant="elevated"
              hover="scale"
              shadow="2xl"
              className="group overflow-hidden project-card"
              padding="none"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="success" size="sm">
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="info" size="sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <Text 
                  variant="h3" 
                  size="xl" 
                  fontFamily="rajdhani" 
                  color="black" 
                  weight="bold"
                  className="mb-3"
                >
                  {project.title}
                </Text>
                
                <Text 
                  variant="body" 
                  fontFamily="poppins" 
                  color="gray" 
                  className="mb-4 leading-relaxed"
                >
                  {project.description}
                </Text>

                {/* Technologies */}
                <div className="mb-4">
                  <Text 
                    variant="small" 
                    fontFamily="poppins" 
                    color="black" 
                    weight="semibold"
                    className="mb-2"
                  >
                    Technologies:
                  </Text>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <Text 
                    variant="small" 
                    fontFamily="poppins" 
                    color="black" 
                    weight="semibold"
                    className="mb-2"
                  >
                    Key Features:
                  </Text>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <Text variant="small" fontFamily="poppins" color="gray">
                          {feature}
                        </Text>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <Text variant="small" fontFamily="poppins" color="gray" className="ml-5">
                        +{project.features.length - 3} more features
                      </Text>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    variant="primary"
                    size="sm"
                    className="flex-1"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </Button>
                  <Button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card 
            variant="filled" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0"
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
              Interested in My Work?
            </Text>
            <Text 
              variant="body" 
              size="lg" 
              fontFamily="poppins" 
              color="white" 
              align="center"
              className="mb-6 max-w-2xl mx-auto opacity-90"
            >
              Let's discuss how I can help bring your next project to life with innovative solutions and modern technologies.
            </Text>
            <div className="flex justify-center">
              <Button
                scrollTo="contact"
                variant="outline"
                size="md"
                color="gray"
              >
                Start a Project
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;