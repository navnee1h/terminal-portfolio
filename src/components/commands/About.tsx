import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  p {
    margin-top: 0.5rem;
    line-height: 1.5rem;
  }
`;

const BoldSpan = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const About: React.FC = () => {
  return (
    <Container data-testid="about">
      <p>
        Hi, my name is <BoldSpan>Navaneeth M.S</BoldSpan>!
      </p>
      <p>
        Doing my degree in <BoldSpan>Cyber Forensics</BoldSpan>, passionate about learning more about computers and cybersecurity.
      </p>
      <p>
        I am a self-learner, building real-world skills and making money from what I know so far. I like meeting knowledgeable people, growing my network, and learning more about this field.
      </p>
      <p>I’m here to learn, build, and grow!</p>
    </Container>
  );
};

export default About;
