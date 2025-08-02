import { Application } from 'pixi.js'

// Async IIFE
(async () => {
    // Create app
    const app = new Application();

    // Init
    await app.init({background: '#1099bb', resizeTo: window});

    // Add canvas to DOM
    document.body.appendChild(app.canvas);
})