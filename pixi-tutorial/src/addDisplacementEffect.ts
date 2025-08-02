import { DisplacementFilter, Sprite } from 'pixi.js';

export function addDisplacementEffect(app) {
    // Import sprite
    const sprite = Sprite.from('displacement');

    sprite.texture.baseTexture.wrapMode = 'repeat';

    // Create filter
    const filter = new DisplacementFilter({
        sprite,
        scale: 50,
    });

    // Add filter to stage container list
    app.stage.filters = [filter];
}