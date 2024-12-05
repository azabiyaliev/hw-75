import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { store } from './app/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline/>
      <App />
    </BrowserRouter>
  </Provider>,
)
