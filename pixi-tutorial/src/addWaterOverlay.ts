import { Texture, TilingSprite } from 'pixi.js';

// Reference water overlay
let overlay;

export function addWaterOverlay(app) {
    // Create texture
    const texture = Texture.from('overlay');

    // Create tiling sprite
    overlay = new TilingSprite({
        texture,
        width: app.screen.width,
        height: app.screen.height,
    });

    // Add overlay to stage
    app.stage.addChild(overlay);
}

// Animate overlay using ticker
export function animateWaterOverlay(app, time) {
    // Extract deltaTime
    const delta = time.deltaTime;

    // Animate overlay
    overlay.tilePosition.x -= delta;
    overlay.tilePosition.y -= delta;
}