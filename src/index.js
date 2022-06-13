
import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<GifExpertApp tab="home" />);