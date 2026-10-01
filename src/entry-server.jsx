import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export { siteCopy } from './data.js';

export const render = (language) => renderToString(<App language={language} />);
