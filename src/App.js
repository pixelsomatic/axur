import React from 'react';
import styled from "styled-components";
import List from './components/List';

function App() {
  return (
    <AppWrapper>
      <AppHeader>

      </AppHeader>
      <body>
        <List/>
      </body>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
  :root{
    --bg: #fdfdfd;
    --highlight1: #ED4264;
    --highlight2: #FFEDBC;
    --color: #1a1e24;
    --font-number: Montserrat, Roboto, Helvetica, Arial, sans-serif;
    --font-head: "Space Mono", Consolas, Menlo, Monaco, "Courier New", monospace;
    --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const AppHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;