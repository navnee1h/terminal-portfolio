import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`;

const CmdItem = styled.div`
  margin-bottom: 0.25rem;
`;

const CmdName = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const CmdDesc = styled.span`
  color: ${({ theme }) => theme.colors.text[200]};
  margin-bottom: 0.75rem;

  @media (max-width: 550px) {
    display: block;
  }
`;

const KeyboardHelp = styled.div`
  font-size: 0.875rem;
  margin-top: 1rem;

  @media (max-width: 550px) {
    display: none;
  }

  div {
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.colors.text[300]};
  }
`;

function padSpaces(tabCount: number) {
  return "\u00A0".repeat(tabCount * 2);
}

export const commandsList = [
  { cmd: "about", desc: "about navaneeth", tab: 4 },
  { cmd: "clear", desc: "clear the terminal", tab: 4 },
  { cmd: "echo", desc: "print out anything", tab: 5 },
  { cmd: "education", desc: "my education background", tab: 2 },
  { cmd: "email", desc: "send an email to me", tab: 4 },
  { cmd: "gui", desc: "go to my portfolio in GUI", tab: 5 },
  { cmd: "help", desc: "check available commands", tab: 5 },
  { cmd: "history", desc: "view command history", tab: 3 },
  { cmd: "projects", desc: "view projects that I've coded", tab: 2 },
  { cmd: "pwd", desc: "print current working directory", tab: 5 },
  { cmd: "socials", desc: "check out my social accounts", tab: 3 },
  { cmd: "themes", desc: "check available themes", tab: 4 },
  { cmd: "welcome", desc: "display hero section", tab: 3 },
  { cmd: "whoami", desc: "about current user", tab: 4 },
  { cmd: "skills", desc: "show my technical skills", tab: 4 },
  { cmd: "contact", desc: "show contact information", tab: 3 },
  { cmd: "time", desc: "show current time", tab: 5 },
  { cmd: "shortcuts", desc: "show keyboard shortcuts", tab: 2 }
];

const Help: React.FC = () => {
  return (
    <Container data-testid="help">
      {commandsList.map(({ cmd, desc, tab }) => (
        <CmdItem key={cmd}>
          <CmdName>{cmd}</CmdName>
          {padSpaces(tab)}
          <CmdDesc>- {desc}</CmdDesc>
        </CmdItem>
      ))}
      <KeyboardHelp>
        <div>Tab or Ctrl + i =&gt; Autocompletes the command</div>
        <div>Up Arrow =&gt; Go back to previous command</div>
        <div>Ctrl + l =&gt; Clear the terminal</div>
      </KeyboardHelp>
    </Container>
  );
};

export default Help;
