import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SkylessApp from './SkylessApp';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SkylessApp />
    </StrictMode>
);
