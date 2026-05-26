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
    title: "PassLord",
    desc: "Profile-based password wordlist generator for ethical hacking, security testing, and password auditing. Generates millions of intelligent password combinations.",
    url: "https://github.com/navnee1h/passlord"
  },

  {
    id: 2,
    title: "ADRoute",
    desc: "Active Directory attack path visualization tool designed to support security assessments and attack path analysis.",
    url: "https://github.com/navnee1h/ADRoute"
  },

  {
    id: 3,
    title: "ClickJacking ",
    desc: "Security awareness project demonstrating Clickjacking attacks and browser-based UI redressing techniques for educational purposes.",
    url: "https://github.com/navnee1h/clickjacking"
  },

  {
    id: 4,
    title: "Enterprise Password Security & Audit System",
    desc: "Password auditing platform helping organizations identify weak and reused credentials to strengthen password security posture.",
    url: "https://github.com/navnee1h/Security-audit-app"
  },

  {
    id: 5,
    title: "Reverse IP Lookup",
    desc: "OSINT utility that identifies websites hosted on the same server IP for reconnaissance and infrastructure mapping.",
    url: "https://github.com/navnee1h/reverse_ip"
  },

  {
    id: 6,
    title: "ShutdownTrigger",
    desc: "Webhook-driven Linux automation utility enabling remote shutdown execution for administration workflows.",
    url: "https://github.com/navnee1h/ShutdownTrigger"
  },

  {
    id: 7,
    title: "Python File Upload Server",
    desc: "Lightweight localhost file upload server with transfer monitoring and upload visibility features.",
    url: "https://github.com/navnee1h/Python-file-upload-server"
  },

  {
    id: 8,
    title: "Terminal Portfolio",
    desc: "Interactive terminal-inspired portfolio built using React and TypeScript with command-based navigation.",
    url: "https://github.com/navnee1h/terminal-portfolio"
  },
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
        Talk is cheap. Show me the code? I got you. <br />
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
