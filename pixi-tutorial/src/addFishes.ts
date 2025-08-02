import { Container, Sprite } from 'pixi.js';

export function addFishes(app, fishes) {
    const fishContainer = new Container();

    app.stage.addChild(fishContainer);

    // How many fishes should be in the container
    const fishCount = 20;
    // Load fish assets
    const fishAssets = ['fish1', 'fish2', 'fish3', 'fish4', 'fish5'];

    // Create the fishes
    for (let i = 0; i < fishCount; i++) {
        const fishAsset = fishAssets[i % fishAssets.length];
        const fish = Sprite.from(fishAsset);

        fish.anchor.set(0.5);

        // Parameters for animation
        fish.direction = Math.random() * Math.PI * 2;
        fish.speed = 2 + Math.random() * 2;
        fish.turnSpeed = Math.random() - 0.8;

        // Location of spawnpoint
        fish.x = Math.random() * app.screen.width;
        fish.y = Math.random() * app.screen.height;
        fish.scale.set(0.5 + Math.random() * 0.2);

        // Add the fish to the container
        fishContainer.addChild(fish);
        // Spawn the fish
        fishes.push(fish);
    }
}

export function animateFishes(app, fishes, time) {
    // Amount of time passed since last call
    const delta = time.deltaTime;

    // Bound for fish movement
    const stagePadding = 100;
    const boundWidth = app.screen.width + stagePadding * 2;
    const boundHeight = app.screen.height + stagePadding * 2;

    // Animate each fish
    fishes.forEach((fish) => {
        // Move fish
        fish.direction += fish.turnSpeed * 0.01;
        fish.x += Math.sin(fish.direction) * fish.speed;
        fish.y += Math.cos(fish.direction) * fish.speed;
        fish.rotation = -fish.direction - Math.PI / 2;

        // Keep fish within screen bound
        if (fish.x < -stagePadding) {
            fish.x += boundWidth;
        }
        if (fish.x > app.screen.width + stagePadding) {
            fish.x -= boundWidth;
        }
        if (fish.y < -stagePadding) {
            fish.y += boundHeight;
        }
        if (fish.y > app.screen.height + stagePadding) {
            fish.y -= boundHeight;
        }
    })
}