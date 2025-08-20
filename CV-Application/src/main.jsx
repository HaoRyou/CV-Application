import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Information from './components/Information';
import Education from './components/Education';
import Experience from './components/Experience';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Information />
    <Education />
    <Experience />
  </StrictMode>
);
