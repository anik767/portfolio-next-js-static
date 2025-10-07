'use client';

import { Text, Card, Button, SocialLink } from './common';

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'john.doe@example.com',
      description: 'Send me an email anytime',
      action: 'mailto:john.doe@example.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call me for urgent matters',
      action: 'tel:+15551234567'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'New York, NY',
      description: 'Available for remote work',
      action: null
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'I typically respond quickly',
      action: null
    }
  ];

  const socialLinks = [
    { platform: 'github', href: 'https://github.com/johndoe' },
    { platform: 'linkedin', href: 'https://linkedin.com/in/johndoe' },
    { platform: 'twitter', href: 'https://twitter.com/johndoe' },
    { platform: 'instagram', href: 'https://instagram.com/johndoe' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="contact-header" className="text-center mb-16">
          <Text 
            variant="h2" 
            size="3xl" 
            fontFamily="rajdhani" 
            color="black" 
            weight="extrabold"
            align="center"
            className="md:text-4xl mb-4"
          >
            Get In Touch
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
            Ready to start your next project? I'd love to hear from you. 
            Let's discuss how we can work together to bring your ideas to life.
          </Text>
        </div>

        <div id="contact-content" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              variant="elevated"
              hover="lift"
              shadow="lg"
              className="group text-center contact-card"
              padding="lg"
            >
              <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors flex justify-center">
                {info.icon}
              </div>
              <Text 
                variant="h4" 
                size="lg" 
                fontFamily="rajdhani" 
                color="black" 
                weight="bold"
                align="center"
                className="mb-2"
              >
                {info.title}
              </Text>
              <Text 
                variant="body" 
                fontFamily="poppins" 
                color="black" 
                weight="medium"
                align="center"
                className="mb-2"
              >
                {info.value}
              </Text>
              <Text 
                variant="small" 
                fontFamily="poppins" 
                color="gray" 
                align="center"
              >
                {info.description}
              </Text>
              {info.action && (
                <div className="mt-4">
                  <Button
                    onClick={() => window.open(info.action, '_self')}
                    variant="secondary"
                    size="sm"
                      Align="center"
                      className="w-full"
                  >
                    {info.title === 'Email' ? 'Send Email' : 'Call Now'}
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Social Links Section */}
        <div className="text-center mb-16">
          <Text 
            variant="h3" 
            size="2xl" 
            fontFamily="rajdhani" 
            color="black" 
            weight="bold"
            align="center"
            className="mb-6"
          >
            Connect With Me
          </Text>
          <Text 
            variant="body" 
            fontFamily="poppins" 
            color="gray" 
            align="center"
            className="mb-8"
          >
            Follow me on social media for updates and insights
          </Text>
          <div id="social-links" className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <SocialLink
                key={index}
                href={social.href}
                platform={social.platform as any}
                className="social-link-item"
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
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
              Let's Work Together
            </Text>
            <Text 
              variant="body" 
              size="lg" 
              fontFamily="poppins" 
              color="white" 
              align="center"
              className="mb-6 max-w-2xl mx-auto opacity-90"
            >
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you have a project in mind or just want to chat, I'd love to hear from you!
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('mailto:john.doe@example.com', '_self')}
                variant="outline"
                size="md"
                Align="center"
                color="gray"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </Button>
              <Button
                onClick={() => window.open('tel:+15551234567', '_self')}
                variant="outline"
                size="md"
                color="gray"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;