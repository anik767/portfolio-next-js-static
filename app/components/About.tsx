'use client';

import { Text, Badge, Card } from './common';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 90 },
    { name: 'Python', level: 75 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Figma', level: 85 }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Text
            variant="h1"
            size="4xl"
            weight="extrabold"
            fontFamily="rajdhani"
            color="black"
            align="center"
          >
            About Me
          </Text>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <img className="w-full h-[300px] object-contain object-left rounded-2xl shadow-lg mb-8" src="\images\Home\damo.png" alt="Developer Profile" />
            <Text
              variant="h3"
              size="2xl"
              fontFamily="rajdhani"
              color="black"
              weight="bold"
              className="mb-6"
            >
              Passionate Developer & Designer
            </Text>
            <Text
              variant="body"
              size="lg"
              fontFamily="poppins"
              color="gray"
              className="mb-6 leading-relaxed"
            >
              I'm a creative and detail-oriented developer with over 5 years of experience
              building web applications and digital experiences. I love turning complex
              problems into simple, beautiful, and intuitive solutions.
            </Text>
            <Text
              variant="body"
              size="lg"
              fontFamily="poppins"
              color="gray"
              className="mb-6 leading-relaxed"
            >
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
              I believe in continuous learning and staying up-to-date with the latest trends
              in web development.
            </Text>
            <div className="flex flex-wrap gap-4">
              <Badge variant="primary" >
                2+ Years Experience
              </Badge>
              <Badge variant="success" >
                20+ Projects
              </Badge>
              <Badge variant="warning" >
                Remote Work
              </Badge>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <Text
              variant="h3"
              size="2xl"
              fontFamily="rajdhani"
              color="black"
              weight="bold"
              className="mb-8"
            >
              Technical Skills
            </Text>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                        <Card key={index} variant="default" hover="fade" shadow="md">
                  <div className="flex justify-between items-center mb-3">
                    <Text variant="body" fontFamily="poppins" weight="medium" color="black">
                      {skill.name}
                    </Text>
                    <Text variant="small" fontFamily="poppins" color="gray">
                      {skill.level}%
                    </Text>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card variant="elevated" padding="xl" hover="pulse" shadow="inner" className="text-center">
            <Text variant="h2" size="4xl" fontFamily="rajdhani" gradient="blue" className="mb-3">
              100%
            </Text>
            <Text variant="body" fontFamily="poppins" weight="medium" color="black">
              Client Satisfaction
            </Text>
          </Card>
                  <Card variant="elevated" padding="xl" hover="pulse" shadow="inner" className="text-center">
            <Text variant="h2" size="4xl" fontFamily="rajdhani" gradient="blue" className="mb-3">
              24/7
            </Text>
            <Text variant="body" fontFamily="poppins" weight="medium" color="black">
              Support Available
            </Text>
          </Card>
                  <Card variant="elevated" padding="xl" hover="pulse" shadow="inner" className="text-center">
            <Text variant="h2" size="4xl" fontFamily="rajdhani" gradient="blue" className="mb-3">
              Fast
            </Text>
            <Text variant="body" fontFamily="poppins" weight="medium" color="black">
              Delivery Time
            </Text>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
