import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`;

const Header = styled.div`
  margin-bottom: 0.75rem;
`;

const Item = styled.div`
  margin-bottom: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  .desc {
    color: ${({ theme }) => theme.colors.text[200]};
  }
`;

const Education: React.FC = () => {
  const educationList = [
    {
      title: "Product Security Intern",
      desc: "HighRadius | 2026 April - Present"
    },
    {
      title: "B.Sc Cyber Forensics",
      desc: "MG University | 2023 - 2026"
    },
    {
      title: "Continuous Learning",
      desc: "CTFs, Bug bounty, security projects, and independent research"
    }
  ];
  return (
    <Container data-testid="education">
      <Header>Here is my education background!</Header>
      {educationList.map(({ title, desc }) => (
        <Item key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </Item>
      ))}
    </Container>
  );
};

export default Education;
