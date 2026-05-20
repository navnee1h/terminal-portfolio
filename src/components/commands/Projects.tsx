import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`;

const Intro = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

const ProjectItem = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.875rem;
`;

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Desc = styled.div`
  color: ${({ theme }) => theme.colors.text[200]};
  text-align: justify;
  line-height: 1.5rem;
  max-width: 600px;
`;

const Usage = styled.div<{ marginY?: boolean }>`
  margin-top: ${({ marginY }) => (marginY ? '0.75rem' : '0.25rem')};
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export interface Project {
  id: number;
  title: string;
  desc: string;
  url: string;
}

export const projectsList: Project[] = [
  {
    id: 1,
    title: "passLord",
    desc: "A Python tool that generates target-based password wordlists for password cracking and cryptographic analysis.",
    url: "https://github.com/navnee1h/passlord"
  },
  {
    id: 2,
    title: "Security Audit App",
    desc: "A Flask web app that audits user password strength and provides a data-rich admin dashboard for security analytics.",
    url: "https://github.com/navnee1h/Security-audit-app"
  },
  {
    id: 3,
    title: "Instagram Phish",
    desc: "A cloned Instagram login page for phishing demonstration and security awareness. For educational use only.",
    url: "https://github.com/navnee1h/instaphish-awareness-demonstration"
  },
  {
    id: 4,
    title: "Personal Portfolio (gui)",
    desc: "Personal portfolio website of Navaneeth M S",
    url: "https://navnee1h.github.io/"
  },
  {
    id: 5,
    title: "File Upload Server",
    desc: "A lightweight Python-based file upload server with upload speed indication, running on localhost.",
    url: "https://github.com/navnee1h/Python-file-upload-server"
  },
  {
    id: 6,
    title: "ShutdownTrigger",
    desc: "Triggers system shutdown on a Linux server using a webhook — useful for remote control scenarios.",
    url: "https://github.com/navnee1h/ShutdownTrigger"
  },
  {
    id: 7,
    title: "Reverse IP Lookup",
    desc: "Identifies all websites hosted on the same server IP — helpful for OSINT and reconnaissance.",
    url: "https://github.com/navnee1h/reverse_ip"
  }
];

interface ProjectsProps {
  args: string[];
}

const Projects: React.FC<ProjectsProps> = ({ args }) => {
  useEffect(() => {
    if (args.length === 2 && args[0] === 'go') {
      const id = parseInt(args[1], 10);
      const project = projectsList.find(p => p.id === id);
      if (project) {
        window.open(project.url, '_blank');
      }
    }
  }, [args]);

  const hasInvalidArgs = args.length > 0 && (args[0] !== 'go' || args.length !== 2 || isNaN(parseInt(args[1], 10)) || !projectsList.some(p => p.id === parseInt(args[1], 10)));

  if (hasInvalidArgs) {
    return (
      <Usage data-testid="projects-invalid-arg">
        Usage: projects go &lt;project-no&gt; <br />
        eg: projects go 4
      </Usage>
    );
  }

  if (args.length === 2 && args[0] === 'go') {
    const id = parseInt(args[1], 10);
    const project = projectsList.find(p => p.id === id);
    return (
      <Container>
        Opening project {id} ({project?.title})...
      </Container>
    );
  }

  return (
    <Container data-testid="projects">
      <Intro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss:
      </Intro>
      {projectsList.map(({ id, title, desc }) => (
        <ProjectItem key={id}>
          <Title>{id}. {title}</Title>
          <Desc>{desc}</Desc>
        </ProjectItem>
      ))}
      <Usage marginY>
        Usage: projects go &lt;project-no&gt; <br />
        eg: projects go 4
      </Usage>
    </Container>
  );
};

export default Projects;
