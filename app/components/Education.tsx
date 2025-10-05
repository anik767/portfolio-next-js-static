'use client';

import { Text, Card, Badge } from './common';

const Education = () => {
  const education = [
    {
      institution: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2015 - 2019',
      location: 'New York, NY',
      gpa: '3.8/4.0',
      description: 'Focused on software engineering, algorithms, and data structures. Completed capstone project on web application development.',
      courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Development', 'Machine Learning'],
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        'President of Computer Science Club',
        'Won 1st place in University Hackathon 2018'
      ]
    },
    {
      institution: 'Tech Bootcamp Academy',
      degree: 'Full Stack Web Development Certificate',
      duration: '2019',
      location: 'San Francisco, CA',
      gpa: 'A+',
      description: 'Intensive 6-month program covering modern web development technologies and best practices.',
      courses: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Git', 'Deployment'],
      achievements: [
        'Top 5% of graduating class',
        'Led team project that won Best App Award',
        'Mentored 3 junior students'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAA-123456',
      description: 'Validates expertise in designing distributed systems on AWS platform.',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability']
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PD-789012',
      description: 'Demonstrates ability to build and deploy applications on Google Cloud Platform.',
      skills: ['GCP Services', 'Kubernetes', 'Docker', 'CI/CD']
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      credentialId: 'CKA-345678',
      description: 'Validates skills in Kubernetes cluster administration and troubleshooting.',
      skills: ['Kubernetes', 'Container Orchestration', 'Cluster Management', 'Troubleshooting']
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2021',
      credentialId: 'AZ-900-901234',
      description: 'Foundational knowledge of cloud concepts and Azure services.',
      skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Compliance']
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
            Education & Certifications
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
            My educational background and professional certifications that validate my expertise.
          </Text>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <Text 
            variant="h3" 
            size="2xl" 
            fontFamily="rajdhani" 
            color="black" 
            weight="bold"
            align="center"
            className="mb-8"
          >
            Education
          </Text>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                variant="elevated"
                hover="slide"
                shadow="colored"
                className="group"
                padding="lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column - Institution Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4">
                        {edu.institution.split(' ').map(word => word.charAt(0)).join('')}
                      </div>
                      <div>
                        <Text 
                          variant="h3" 
                          size="lg" 
                          fontFamily="rajdhani" 
                          color="black" 
                          weight="bold"
                          className="mb-1"
                        >
                          {edu.institution}
                        </Text>
                        <Text 
                          variant="body" 
                          fontFamily="poppins" 
                          color="gray" 
                          size="sm"
                        >
                          {edu.location}
                        </Text>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Badge variant="primary" size="sm">
                        {edu.duration}
                      </Badge>
                      <Badge variant="success" size="sm">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:col-span-2">
                    <Text 
                      variant="h4" 
                      size="xl" 
                      fontFamily="rajdhani" 
                      color="black" 
                      weight="bold"
                      className="mb-3"
                    >
                      {edu.degree}
                    </Text>
                    
                    <Text 
                      variant="body" 
                      fontFamily="poppins" 
                      color="gray" 
                      className="mb-4 leading-relaxed"
                    >
                      {edu.description}
                    </Text>

                    {/* Courses */}
                    <div className="mb-4">
                      <Text 
                        variant="small" 
                        fontFamily="poppins" 
                        color="black" 
                        weight="semibold"
                        className="mb-2"
                      >
                        Key Courses:
                      </Text>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary" size="sm">
                            {course}
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
                        Achievements:
                      </Text>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

        {/* Certifications Section */}
        <div>
          <Text 
            variant="h3" 
            size="2xl" 
            fontFamily="rajdhani" 
            color="black" 
            weight="bold"
            align="center"
            className="mb-8"
          >
            Professional Certifications
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                variant="elevated"
                hover="slide"
                shadow="colored"
                className="group"
                padding="lg"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                    {cert.issuer.split(' ').map(word => word.charAt(0)).join('')}
                  </div>
                  <div className="flex-1">
                    <Text 
                      variant="h4" 
                      size="lg" 
                      fontFamily="rajdhani" 
                      color="black" 
                      weight="bold"
                      className="mb-1"
                    >
                      {cert.name}
                    </Text>
                    <Text 
                      variant="body" 
                      fontFamily="poppins" 
                      color="gray" 
                      size="sm"
                      className="mb-2"
                    >
                      {cert.issuer}
                    </Text>
                    <div className="flex items-center space-x-2">
                      <Badge variant="success" size="sm">
                        {cert.date}
                      </Badge>
                      <Text variant="small" fontFamily="poppins" color="gray">
                        ID: {cert.credentialId}
                      </Text>
                    </div>
                  </div>
                </div>

                <Text 
                  variant="body" 
                  fontFamily="poppins" 
                  color="gray" 
                  className="mb-4 leading-relaxed"
                >
                  {cert.description}
                </Text>

                <div>
                  <Text 
                    variant="small" 
                    fontFamily="poppins" 
                    color="black" 
                    weight="semibold"
                    className="mb-2"
                  >
                    Skills Validated:
                  </Text>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="info" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;