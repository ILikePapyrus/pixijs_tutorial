import { Application } from 'pixi.js';

// Create app
const app = new Application();

// Async IIFE
(async () => {
  // Init app
  await app.init({background: '#021f4b', resizeTo: window});

  // Add canvas to DOM
  document.body.appendChild(app.canvas);
})();