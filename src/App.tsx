import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themes } from './styles/theme';
import { GlobalStyle } from './styles/global';
import Terminal from './components/Terminal';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  const [themeName, setThemeName] = useState<string>('dark');
  const activeTheme = themes[themeName] || themes.dark;

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <AppContainer>
        <Terminal setThemeName={setThemeName} activeThemeName={themeName} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
