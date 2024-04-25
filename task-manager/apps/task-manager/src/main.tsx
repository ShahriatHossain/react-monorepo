import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';


import App from './app/app';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter basename="react-monorepo">
      <FluentProvider theme={teamsLightTheme}>
        <App />
      </FluentProvider>
    </BrowserRouter>
  </StrictMode>
);

