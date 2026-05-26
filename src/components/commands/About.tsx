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
        Hi, my name is <BoldSpan>Navaneeth M S</BoldSpan>
      </p>
      <p>
        Cyber security researcher and <BoldSpan>Product security</BoldSpan> intern at HighRadius.
      </p>
      <p>
        Starting with no prior bug bounty experience, I reported vulnerabilities and received bounty from Google and Microsoft within two months.
      </p>
      <p>Always learning, building and growing.</p>
    </Container>
  );
};

export default About;
