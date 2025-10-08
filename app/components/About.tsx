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
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about-header" className="text-center mb-16">
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
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Image and Content Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image */}
          <div>
            <img 
              className="w-full h-[500px] object-contain object-center rounded-2xl shadow-2xl" 
              src="/images/Home/damo.png" 
              alt="Developer Profile" 
            />
          </div>

          {/* Right Column - Content */}
          <div>
            <Text
              variant="h3"
              size="3xl"
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
              <Badge variant="primary">
                2+ Years Experience
              </Badge>
              <Badge variant="success">
                20+ Projects
              </Badge>
              <Badge variant="warning">
                Remote Work
              </Badge>
            </div>
          </div>
        </div>

        {/* Technical Skills Section - Full Width Below */}
        <div className="w-full">
          <Text
            variant="h3"
            size="3xl"
            fontFamily="rajdhani"
            color="black"
            weight="bold"
            className="mb-10 text-center"
          >
            Technical Skills
          </Text>
          <div id="technical-skills" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} variant="default" hover="lift" shadow="md">
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
                    className="bg-linear-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
