import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';
import About from './commands/About';
import Education from './commands/Education';
import Projects from './commands/Projects';
import Skills from './commands/Skills';
import Contact from './commands/Contact';
import Socials from './commands/Socials';
import Themes from './commands/Themes';
import Time from './commands/Time';
import Shortcuts from './commands/Shortcuts';
import Help, { commandsList } from './commands/Help';
import { themes } from '../styles/theme';

const TerminalWrapper = styled.div`
  padding: 1.25rem;
  padding-top: 0.75rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
`;

const ExecutionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PromptLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const PromptPrefix = styled.span`
  margin-right: 0.75rem;
  font-weight: bold;
`;

const VisitorText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const HostText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const InputForm = styled.form`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const InputField = styled.input`
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text[100]};
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
`;

const EchoOutput = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
`;

const ErrorOutput = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const PromptPrefixComponent: React.FC = () => (
  <PromptPrefix>
    <VisitorText>visitor</VisitorText>@<HostText>navnee1h.github.io</HostText>:~$
  </PromptPrefix>
);

interface TerminalProps {
  setThemeName: (name: string) => void;
  activeThemeName: string;
}

const Terminal: React.FC<TerminalProps> = ({ setThemeName, activeThemeName }) => {
  const [executions, setExecutions] = useState<Array<{ id: string; command: string; output: React.ReactNode }>>([]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with welcome screen
  useEffect(() => {
    setExecutions([
      {
        id: 'welcome',
        command: '',
        output: <Welcome onHelpClick={handleHelpClick} />
      }
    ]);
  }, []);

  // Scroll to bottom whenever executions change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [executions]);

  // Keep focus on input
  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  const handleHelpClick = () => {
    handleCommandRun('help');
  };

  const handleCommandRun = (cmdLine: string) => {
    const trimmed = cmdLine.trim();
    if (!trimmed) {
      setExecutions(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          command: '',
          output: null
        }
      ]);
      return;
    }

    // Add to history
    setCmdHistory(prev => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const parts = trimmed.split(/\s+/);
    const mainCommand = parts[0].toLowerCase();
    const args = parts.slice(1);

    let outputElement: React.ReactNode = null;

    switch (mainCommand) {
      case 'help':
        outputElement = <Help />;
        break;
      case 'clear':
        setExecutions([]);
        setInputVal('');
        return;
      case 'about':
        outputElement = args.length > 0 ? <ErrorOutput>Usage: about</ErrorOutput> : <About />;
        break;
      case 'education':
        outputElement = args.length > 0 ? <ErrorOutput>Usage: education</ErrorOutput> : <Education />;
        break;
      case 'projects':
        outputElement = <Projects args={args} />;
        break;
      case 'skills':
        outputElement = args.length > 0 ? <ErrorOutput>Usage: skills</ErrorOutput> : <Skills />;
        break;
      case 'contact':
        outputElement = args.length > 0 ? <ErrorOutput>Usage: contact</ErrorOutput> : <Contact />;
        break;
      case 'socials':
        outputElement = <Socials args={args} />;
        break;
      case 'themes':
        outputElement = <Themes args={args} setThemeName={setThemeName} />;
        break;
      case 'time':
        outputElement = args.length > 0 ? <ErrorOutput>Usage: time</ErrorOutput> : <Time />;
        break;
      case 'shortcuts':
        outputElement = args.length > 0 ? <ErrorOutput>Usage: shortcuts</ErrorOutput> : <Shortcuts />;
        break;
      case 'welcome':
        outputElement = args.length > 0 ? <ErrorOutput>Usage: welcome</ErrorOutput> : <Welcome onHelpClick={handleHelpClick} />;
        break;
      case 'whoami':
        outputElement = args.length > 0 ? <ErrorOutput>Usage: whoami</ErrorOutput> : <EchoOutput>visitor</EchoOutput>;
        break;
      case 'pwd':
        outputElement = args.length > 0 ? <ErrorOutput>Usage: pwd</ErrorOutput> : <EchoOutput>/home/navnee1h</EchoOutput>;
        break;
      case 'echo':
        outputElement = <EchoOutput>{args.join(' ')}</EchoOutput>;
        break;
      case 'email':
        if (args.length === 0) {
          window.open('mailto:navaneethms182@gmail.com', '_self');
          outputElement = <EchoOutput>navaneethms182@gmail.com</EchoOutput>;
        } else {
          outputElement = <ErrorOutput>Usage: email</ErrorOutput>;
        }
        break;
      case 'gui':
        if (args.length === 0) {
          window.open('https://navnee1h.github.io/', '_blank');
          outputElement = null;
        } else {
          outputElement = <ErrorOutput>Usage: gui</ErrorOutput>;
        }
        break;
      case 'history':
        if (args.length > 0) {
          outputElement = <ErrorOutput>Usage: history</ErrorOutput>;
        } else {
          outputElement = (
            <EchoOutput>
              {cmdHistory.slice().reverse().map((h, i) => (
                <div key={i}>{h}</div>
              ))}
              <div>history</div>
            </EchoOutput>
          );
        }
        break;
      default:
        outputElement = <ErrorOutput>command not found: {mainCommand}</ErrorOutput>;
        break;
    }

    setExecutions(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        output: outputElement
      }
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommandRun(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex < cmdHistory.length) {
        setHistoryIndex(nextIndex);
        setInputVal(cmdHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInputVal(cmdHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const currentInput = inputVal.trim().toLowerCase();
      if (!currentInput) return;

      const availableNames = commandsList.map(c => c.cmd);

      // Autocomplete for themes set
      if (inputVal.startsWith('themes set ')) {
        const arg = inputVal.substring(11).trim().toLowerCase();
        const matchingThemes = Object.keys(themes).filter(t => t.startsWith(arg));
        if (matchingThemes.length === 1) {
          setInputVal(`themes set ${matchingThemes[0]}`);
        }
        return;
      }

      // Default autocompletion
      const matches = availableNames.filter(c => c.startsWith(currentInput));
      if (matches.length === 1) {
        setInputVal(matches[0]);
      } else if (matches.length > 1) {
        setExecutions(prev => [
          ...prev,
          {
            id: Math.random().toString(),
            command: inputVal,
            output: <EchoOutput>{matches.join('  ')}</EchoOutput>
          }
        ]);
      }
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setExecutions([]);
      setInputVal('');
    } else if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
      setExecutions(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          command: inputVal + '^C',
          output: null
        }
      ]);
      setInputVal('');
    }
  };

  return (
    <TerminalWrapper onClick={focusInput}>
      <ExecutionsContainer>
        {executions.map(exec => (
          <div key={exec.id}>
            {exec.command !== undefined && exec.id !== 'welcome' && (
              <PromptLine style={{ marginBottom: '0.25rem' }}>
                <PromptPrefixComponent />
                <span>{exec.command}</span>
              </PromptLine>
            )}
            {exec.output}
          </div>
        ))}
      </ExecutionsContainer>
      
      <PromptLine style={{ marginTop: '0.5rem' }}>
        <PromptPrefixComponent />
        <InputForm onSubmit={e => e.preventDefault()}>
          <InputField
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </InputForm>
      </PromptLine>
      <div ref={bottomRef} style={{ height: '1px' }} />
    </TerminalWrapper>
  );
};

export default Terminal;
