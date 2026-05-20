import React, { useEffect } from 'react';
import styled from 'styled-components';
import { themes } from '../../styles/theme';

const Container = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`;

const ThemesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ThemeName = styled.span`
  margin-right: 0.875rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
`;

const Usage = styled.div<{ marginY?: boolean }>`
  margin-top: ${({ marginY }) => (marginY ? '0.75rem' : '0.25rem')};
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

interface ThemesProps {
  args: string[];
  setThemeName: (name: string) => void;
}

const Themes: React.FC<ThemesProps> = ({ args, setThemeName }) => {
  const themeNames = Object.keys(themes);

  useEffect(() => {
    if (args.length === 2 && args[0] === 'set') {
      const selected = args[1];
      if (themeNames.includes(selected)) {
        setThemeName(selected);
      }
    }
  }, [args, setThemeName, themeNames]);

  const hasInvalidArgs = args.length > 0 && (args[0] !== 'set' || args.length !== 2 || !themeNames.includes(args[1]));

  if (hasInvalidArgs) {
    return (
      <Usage data-testid="themes-invalid-arg">
        Usage: themes set &lt;theme-name&gt; <br />
        eg: themes set ubuntu
      </Usage>
    );
  }

  if (args.length === 2 && args[0] === 'set') {
    return (
      <Container>
        Theme set to "{args[1]}"!
      </Container>
    );
  }

  return (
    <Container data-testid="themes">
      <ThemesGrid>
        {themeNames.map(name => (
          <ThemeName key={name}>{name}</ThemeName>
        ))}
      </ThemesGrid>
      <Usage marginY>
        Usage: themes set &lt;theme-name&gt; <br />
        eg: themes set ubuntu
      </Usage>
    </Container>
  );
};

export default Themes;
