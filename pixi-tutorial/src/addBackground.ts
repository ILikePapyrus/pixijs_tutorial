import { Sprite } from 'pixi.js';

export function addBackground(app) {
    // Create sprite
    const background = Sprite.from('background');

    // Anchor bg to center
    background.anchor.set(0.5);

    // Fit sprite
    if (app.screen.width > app.screen.height) {
        background.width = app.screen.width * 1.2;
        background.scale.y = background.scale.x;
    } else {
        background.height = app.screen.height * 1.2;
        background.scale.x = background.scale.y;
    }

    // Position sprite to center of preview
    background.x = app.screen.width / 2;
    background.y = app.screen.height / 2;

    // Add background
    app.stage.addChild(background);
}