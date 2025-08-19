'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import { Mail, Github, Linkedin, Code, User, Book, Briefcase, ExternalLink, Globe, Star, GitFork } from 'lucide-react';

const SocialLink = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full transition-all duration-300 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white shadow-lg border border-white/30">
    <Icon size={24} />
  </a>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white border-b-2 border-white/50 pb-2">
    {children}
  </h2>
);

const Card = ({ title, date, children }) => (
  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 border border-white/20">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {date && <span className="text-sm text-gray-300 mt-1 sm:mt-0">{date}</span>}
    </div>
    <div className="text-gray-200 leading-relaxed">
      {children}
    </div>
  </div>
);

const LanguagesAndTools = () => (
  <Card title="Languages and Tools">
    <p className="text-gray-200 leading-relaxed mb-4">
      I use a variety of technologies to bring projects to life, including:
    </p>
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
      <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"> <Image src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width={40} height={40} /> </a>
      <a href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="aws" width={40} height={40} /> </a>
      <a href="https://azure.microsoft.com/en-in/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width={40} height={40} /> </a>
      <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width={40} height={40} /> </a>
      <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width={40} height={40} /> </a>
      <a href="https://www.cockroachlabs.com/product/cockroachdb/" target="_blank" rel="noreferrer"> <Image src="https://cdn.worldvectorlogo.com/logos/cockroachdb.svg" alt="cockroachdb" width={40} height={40} /> </a>
      <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width={40} height={40} /> </a>
      <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width={40} height={40} /> </a>
      <a href="https://www.elastic.co" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" alt="elasticsearch" width={40} height={40} /> </a>
      <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width={40} height={40} /> </a>
      <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width={40} height={40} /> </a>
      <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width={40} height={40} /> </a>
      <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/flask/flask-original-wordmark.svg" alt="flask" width={40} height={40} /> </a>
      <a href="https://www.framer.com/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="framer" width={40} height={40} /> </a>
      <a href="https://cloud.google.com" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width={40} height={40} /> </a>
      <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width={40} height={40} /> </a>
      <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width={40} height={40} /> </a>
      <a href="https://www.java.com" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width={40} height={40} /> </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width={40} height={40} /> </a>
      <a href="https://www.jenkins.io" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width={40} height={40} /> </a>
      <a href="https://kubernetes.io" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width={40} height={40} /> </a>
      <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width={40} height={40} /> </a>
      <a href="https://mariadb.org/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/mariadb/mariadb-original-wordmark.svg" alt="mariadb" width={40} height={40} /> </a>
      <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width={40} height={40} /> </a>
      <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width={40} height={40} /> </a>
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <Image src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width={40} height={40} /> </a>
      <a href="https://www.nginx.com" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width={40} height={40} /> </a>
      <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width={40} height={40} /> </a>
      <a href="https://www.oracle.com/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="oracle" width={40} height={40} /> </a>
      <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/photoshop/photoshop-plain.svg" alt="photoshop" width={40} height={40} /> </a>
      <a href="https://www.php.net" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width={40} height={40} /> </a>
      <a href="https://postman.com" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width={40} height={40} /> </a>
      <a href="https://www.python.org" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width={40} height={40} /> </a>
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width={40} height={40} /> </a>
      <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <Image src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width={40} height={40} /> </a>
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width={40} height={40} /> </a>
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width={40} height={40} /> </a>
    </div>
  </Card>
);

const About = () => (
  <>
    <SectionTitle>About Me</SectionTitle>
    <p className="text-lg leading-relaxed text-gray-200">
      An aspiring cybersecurity and networking professional, a beginner in NLP, and a part-time photographer who blends tech precision with creative vision.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <Card title="Core Skills">
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
          <li><strong>Languages:</strong> Python, Java, JavaScript</li>
          <li><strong>Frameworks:</strong> Next.js, React.js, FastAPI, Flask</li>
          <li><strong>Databases:</strong> SQL, MongoDB</li>
        </ul>
      </Card>
      <Card title="Primary Focus">
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
          <li>Cybersecurity & Networking</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Application Security & Ethical Hacking</li>
          <li>Photography & Post-Production</li>
        </ul>
      </Card>
    </div>
    <div className="mt-8">
      <LanguagesAndTools />
    </div>
  </>
);

const Education = () => (
  <>
    <SectionTitle>Education</SectionTitle>
    <Card title="BTech, Cyber Security" date="Aug 2022 - Aug 2026">
      <p className="text-gray-200">NIIT University, Neemrana, Rajasthan</p>
      <p className="mt-2 text-sm text-gray-300 leading-relaxed">
        Coursework includes: Computer Architecture, Operating Systems, Computer Networks, Object Oriented Programming, Secure Programming and Application Security, DBMS, Network Security, Artificial Intelligence, Cloud Computing, Ethical Hacking, VAPT and Information Security.
      </p>
    </Card>
  </>
);

const Experience = () => (
  <>
    <SectionTitle>Experience</SectionTitle>
    <div className="space-y-8">
      <Card title="Capture Lead" date="June 2024 - Present">
        <p className="text-gray-200">SiNUsoid, NIIT University</p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-gray-300">
          <li>Handled a team of 30 volunteers.</li>
          <li>Captured and edited the Annual Tech Fest of NIIT University.</li>
          <li>Consistently produced superior post-production results.</li>
        </ul>
      </Card>
      <Card title="Official Student Photographer & Club Coordinator" date="Aug 2023 - May 2024">
        <p className="text-gray-200">Instils-NU, NIIT University</p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-gray-300">
          <li>Led a team of 37 photographers.</li>
          <li>Recorded a variety of events, including sessions and workshops, ensuring a high standard of quality.</li>
          <li>Processed all images during post-production using color grading and various editing techniques.</li>
        </ul>
      </Card>
    </div>
  </>
);

const Projects = ({ repos, isLoading, error }) => (
  <>
    <SectionTitle>Projects</SectionTitle>
    {isLoading && <p className="text-center text-gray-300">Loading starred projects from GitHub...</p>}
    {error && <p className="text-center text-red-400">Error: {error}</p>}
    {!isLoading && !error && repos.length === 0 && (
      <p className="text-center text-gray-300">No starred repositories found on GitHub.</p>
    )}
    {!isLoading && !error && repos.length > 0 && (
      <div className="space-y-6 md:space-y-8">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg transition-all duration-300 border border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">{repo.name}</a>
              </h3>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-1 mt-2 md:mt-0"
              >
                <span className="text-sm">View on GitHub</span>
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-gray-200 mt-2 mb-3 leading-relaxed">{repo.description || "No description provided."}</p>
            <div className="flex flex-wrap items-center text-sm text-gray-300 space-x-4">
              {repo.language && (
                <span className="flex items-center space-x-1">
                  <Code size={14} className="text-indigo-400" />
                  <span>{repo.language}</span>
                </span>
              )}
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-white transition-colors"
                >
                  <Globe size={14} className="text-indigo-400" />
                  <span>Live Demo</span>
                </a>
              )}
              <span className="flex items-center space-x-1">
                <Star size={14} className="text-indigo-400" />
                <span>{repo.stargazers_count}</span>
              </span>
              <span className="flex items-center space-x-1">
                <GitFork size={14} className="text-indigo-400" />
                <span>{repo.forks_count}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    )}
  </>
);

export default function App() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/MrCrafter32/starred?sort=updated');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories.');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const navItems = [
    { name: 'About', sectionId: 'about' },
    { name: 'Education', sectionId: 'education' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Projects', sectionId: 'projects' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-300 main-bg dark">
      <style>
        {`
          .main-bg {
            background-image: url('https://images.unsplash.com/photo-1755128368298-198903712688?q=80&w=1472&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
          }
          .main-bg::before {
            content: '';
            position: fixed; /* Use fixed to cover the whole viewport */
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            backdrop-filter: blur(10px) brightness(0.7);
            z-index: 1; 
            background-color: rgba(17, 24, 40, 0.4); /* Dark tint */
          }
        `}
      </style>
      
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-wide">Jagadeesh Chandra Duggirala</h1>
            <h2 className="text-lg md:text-xl text-gray-300 mt-2 tracking-wide">Cybersecurity & Photography</h2>
            <div className="flex space-x-6 mt-10">
              <SocialLink href="mailto:jagadeesh.duggirala22@st.niituniversity.in" icon={Mail} />
              <SocialLink href="https://github.com/MrCrafter32" icon={Github} />
              <SocialLink href="www.linkedin.com/in/jagadeesh-chandra-duggirala-8aa715251" icon={Linkedin} />
              <SocialLink href="https://mrcrafter.tech" icon={Code} />
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="sticky top-4 bg-white/10 backdrop-blur-lg z-30 py-4 mb-16 border border-white/20 transition-colors duration-300 rounded-2xl shadow-md">
            <ul className="flex justify-center space-x-2 md:space-x-6">
              {navItems.map((item) => (
                <li key={item.sectionId}>
                  <a
                    href={`#${item.sectionId}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.sectionId); }}
                    className="font-medium text-gray-200 hover:text-white transition-colors duration-200 px-2 py-2 md:px-3 rounded-md text-sm md:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="space-y-24">
            <section id="about" className="scroll-mt-24">
              <About />
            </section>

            <section id="education" className="scroll-mt-24">
              <Education />
            </section>

            <section id="experience" className="scroll-mt-24">
              <Experience />
            </section>

            <section id="projects" className="scroll-mt-24">
              <Projects repos={repos} isLoading={isLoading} error={error} />
            </section>
          </div>
        </main>
        
        
      </div>
    </div>
  );
}
