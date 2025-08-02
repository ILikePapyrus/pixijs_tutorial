import { Sprite } from 'pixi.js';

export function addBackground() {
    // Create sprite
    const background = Sprite.from('background');

    // Anchor bg to center
    background.anchor.set(0.5);

    // Fit sprite
    if (app.screen.width > app.screen.height) {

    }
}