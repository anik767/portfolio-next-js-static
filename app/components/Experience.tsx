'use client';

import { Text, Card, Badge , Button } from './theam';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'Remote',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'],
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on major projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      company: 'Digital Agency Pro',
      position: 'Frontend Developer',
      duration: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed responsive web applications and mobile-first designs for various clients. Collaborated with design teams to create exceptional user experiences.',
      technologies: ['React', 'Vue.js', 'JavaScript', 'SASS', 'Figma', 'Git'],
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Improved website loading speed by 35%',
        'Created reusable component library used across projects'
      ]
    },
    {
      company: 'StartupXYZ',
      position: 'Junior Web Developer',
      duration: '2019 - 2020',
      location: 'San Francisco, CA',
      description: 'Started my professional journey building web applications and learning modern development practices. Worked closely with senior developers on various projects.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP'],
      achievements: [
        'Completed 10+ small to medium projects',
        'Learned modern JavaScript frameworks',
        'Contributed to open-source projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="experience-header" className="text-center mb-16">
          <Text 
            variant="h2" 
            size="3xl" 
            fontFamily="rajdhani" 
            color="black" 
            weight="extrabold"
            align="center"
            className="md:text-4xl mb-4"
          >
            Work Experience
          </Text>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <Text 
            variant="body" 
            size="lg" 
            fontFamily="poppins" 
            color="gray" 
            align="center"
            className="max-w-3xl mx-auto"
          >
            My professional journey in web development, from junior developer to senior full stack engineer.
          </Text>
        </div>

        <div id="experience-content" className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              variant="elevated"
              hover="slide"
              shadow="lg"
              className="group experience-item"
              padding="lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Company Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                      {exp.company.charAt(0)}
                    </div>
                    <div>
                      <Text 
                        variant="h3" 
                        size="xl" 
                        fontFamily="rajdhani" 
                        color="black" 
                        weight="bold"
                        className="mb-1"
                      >
                        {exp.company}
                      </Text>
                      <Text 
                        variant="body" 
                        fontFamily="poppins" 
                        color="gray" 
                        size="sm"
                      >
                        {exp.location}
                      </Text>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="emerald" size="md">
                      {exp.duration}
                    </Badge>
                    <Text 
                      variant="body" 
                      fontFamily="poppins" 
                      color="black" 
                      weight="semibold"
                      className="text-lg"
                    >
                      {exp.position}
                    </Text>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-2">
                  <Text 
                    variant="body" 
                    fontFamily="poppins" 
                    color="gray" 
                    className="mb-4 leading-relaxed"
                  >
                    {exp.description}
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
                      Technologies Used:
                    </Text>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="elegant" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <Text 
                      variant="small" 
                      fontFamily="poppins" 
                      color="black" 
                      weight="semibold"
                      className="mb-2"
                    >
                      Key Achievements:
                    </Text>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <Text variant="small" fontFamily="poppins" color="gray">
                            {achievement}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;