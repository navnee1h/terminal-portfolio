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

const SocialItem = styled.div`
  margin-bottom: 0.25rem;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const Desc = styled.span`
  color: ${({ theme }) => theme.colors.text[200]};
  margin-left: 0.75rem;
`;

const Usage = styled.div<{ marginY?: boolean }>`
  margin-top: ${({ marginY }) => (marginY ? '0.75rem' : '0.25rem')};
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export interface Social {
  id: number;
  title: string;
  url: string;
}

export const socialsList: Social[] = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/navnee1h"
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://linkedin.com/in/navnee1h/"
  },
  {
    id: 3,
    title: "Portfolio",
    url: "https://navnee1h.github.io/"
  }
];

interface SocialsProps {
  args: string[];
}

const Socials: React.FC<SocialsProps> = ({ args }) => {
  useEffect(() => {
    if (args.length === 2 && args[0] === 'go') {
      const id = parseInt(args[1], 10);
      const social = socialsList.find(s => s.id === id);
      if (social) {
        window.open(social.url, '_blank');
      }
    }
  }, [args]);

  const hasInvalidArgs = args.length > 0 && (args[0] !== 'go' || args.length !== 2 || isNaN(parseInt(args[1], 10)) || !socialsList.some(s => s.id === parseInt(args[1], 10)));

  if (hasInvalidArgs) {
    return (
      <Usage data-testid="socials-invalid-arg">
        Usage: socials go &lt;social-no&gt; <br />
        eg: socials go 1
      </Usage>
    );
  }

  if (args.length === 2 && args[0] === 'go') {
    const id = parseInt(args[1], 10);
    const social = socialsList.find(s => s.id === id);
    return (
      <Container>
        Opening {social?.title}...
      </Container>
    );
  }

  return (
    <Container data-testid="socials">
      <Intro>Here are my social links:</Intro>
      {socialsList.map(({ id, title, url }) => (
        <SocialItem key={id}>
          <Label>{id}. {title}</Label>
          <Desc>- {url}</Desc>
        </SocialItem>
      ))}
      <Usage marginY>
        Usage: socials go &lt;social-no&gt; <br />
        eg: socials go 1
      </Usage>
    </Container>
  );
};

export default Socials;
