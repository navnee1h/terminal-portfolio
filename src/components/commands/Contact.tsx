import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`;

const ContactList = styled.div`
  margin: 0.5rem 0;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 1rem;
  min-width: 100px;
  font-weight: bold;
`;

const ValueLink = styled.a`
  color: ${({ theme }) => theme.colors.text[200]};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;

const Contact: React.FC = () => {
  const contacts = [
    {
      label: "Email",
      value: "navaneethms182@gmail.com",
      link: "mailto:navaneethms182@gmail.com"
    },
    {
      label: "GitHub",
      value: "github.com/navnee1h",
      link: "https://github.com/navnee1h"
    }
  ];

  return (
    <Container data-testid="contact">
      <ContactList>
        {contacts.map(({ label, value, link }) => (
          <ContactItem key={label}>
            <Label>{label}:</Label>
            <ValueLink href={link} target="_blank" rel="noopener noreferrer">
              {value}
            </ValueLink>
          </ContactItem>
        ))}
      </ContactList>
    </Container>
  );
};

export default Contact;
