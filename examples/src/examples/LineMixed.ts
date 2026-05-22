import { physics } from "../../../dist/index.js";

export function lineMixedInit(): physics.World {
    const world = physics.createWorld({ x: 0, y: 280 });
    world.damp = 0.994;
    world.angularDamp = 0.992;

    const friction = 0.55;
    const restitution = 0.35;

    const floor = physics.createLine(world, { x: 20, y: 465 }, { x: 480, y: 465 }, 0, friction, restitution);
    const ramp1 = physics.createLine(world, { x: 50, y: 370 }, { x: 200, y: 260 }, 0, friction, restitution);
    const ramp2 = physics.createLine(world, { x: 210, y: 260 }, { x: 340, y: 290 }, 0, friction, restitution);
    const ramp3 = physics.createLine(world, { x: 350, y: 290 }, { x: 470, y: 210 }, 0, friction, restitution);
    physics.addBody(world, floor);
    physics.addBody(world, ramp1);
    physics.addBody(world, ramp2);
    physics.addBody(world, ramp3);

    const circle = physics.createCircle(world, { x: 100, y: 20 }, 24, 1, 0.4, 0.75);
    const box = physics.createRectangle(world, { x: 170, y: -40 }, 50, 50, 1.4, 0.65, 0.25);
    const plank = physics.createRectangle(world, { x: 320, y: -90 }, 90, 20, 1.2, 0.5, 0.2);
    physics.addBody(world, circle);
    physics.addBody(world, box);
    physics.addBody(world, plank);

    return world;
}