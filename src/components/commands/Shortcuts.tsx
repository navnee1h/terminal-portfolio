import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`;

const ShortcutList = styled.div`
  margin: 0.5rem 0;
`;

const ShortcutItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const KeyBadge = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.body};
  padding: 0.25rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  margin-right: 1rem;
  min-width: 100px;
  text-align: center;
  font-weight: bold;
`;

const Description = styled.span`
  color: ${({ theme }) => theme.colors.text[200]};
`;

const Shortcuts: React.FC = () => {
  const shortcuts = [
    { key: "Tab", description: "Auto complete" },
    { key: "Ctrl + L", description: "Clear the terminal" },
    { key: "Ctrl + C", description: "Cancel the running command" },
    { key: "↑", description: "Previous command" },
    { key: "↓", description: "Next command" },
    { key: "Ctrl + U", description: "Clear the Line" },
    { key: "Ctrl + W", description: "Delete the last word" }
  ];

  return (
    <Container>
      <ShortcutList>
        {shortcuts.map(({ key, description }) => (
          <ShortcutItem key={key}>
            <KeyBadge>{key}</KeyBadge>
            <Description>{description}</Description>
          </ShortcutItem>
        ))}
      </ShortcutList>
    </Container>
  );
};

export default Shortcuts;
