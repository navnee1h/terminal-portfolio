import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const CategoryBox = styled.div`
  margin-bottom: 1rem;
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  color: ${({ theme }) => theme.colors.text[200]};
  margin: 0.25rem 0;
  display: flex;
  align-items: center;
  
  &:before {
    content: ">";
    color: ${({ theme }) => theme.colors.secondary};
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const Skills: React.FC = () => {
  const skillsData = {
    Technical: [
      "Python",
      "C",
      "C++",
      "SQL",
      "HTML/CSS",
      "Secure code review",
      "Penetration testing & Exploitation",
      "Cryptography",
      "Cyber Laws & Compliance",
      "IOT Security"
    ],
    Tools: [
      "Wireshark",
      "Nmap",
      "Burpsuite",
      "Prompt Engineering",
    ],
    "Devops & Platforms": [
      "Linux",
      "Git",
      "Docker",
      "SIEM Tools",
      "IDS"
    ]
  };

  return (
    <Container data-testid="skills">
      <SkillsGrid>
        {Object.entries(skillsData).map(([category, skills]) => (
          <CategoryBox key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillList>
              {skills.map(skill => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillList>
          </CategoryBox>
        ))}
      </SkillsGrid>
    </Container>
  );
};

export default Skills;
