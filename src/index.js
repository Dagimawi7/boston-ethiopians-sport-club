// index.js

// Importing the main React library to use JSX and create components
import React from 'react';

// Importing ReactDOM to render our React app into the actual HTML page
import ReactDOM from 'react-dom/client';

// Importing the main App component (where all the routing and pages are defined)
import App from './App';

// Importing CSS file for global styles (you can customize your website look here)
import './index.css';

// Creating the root element where the React app will be attached in the HTML (usually in public/index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside the root div so the whole website shows up
root.render(<App />);
