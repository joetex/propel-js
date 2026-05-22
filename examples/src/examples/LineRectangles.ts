import { physics } from "../../../dist/index.js";

export function lineRectanglesInit(): physics.World {
    const world = physics.createWorld({ x: 0, y: 280 });
    world.damp = 0.992;
    world.angularDamp = 0.992;

    const friction = 0.7;
    const restitution = 0.2;

    const floor = physics.createLine(world, { x: 30, y: 460 }, { x: 470, y: 460 }, 0, friction, restitution);
    const ramp1 = physics.createLine(world, { x: 60, y: 330 }, { x: 220, y: 260 }, 0, friction, restitution);
    const ramp2 = physics.createLine(world, { x: 280, y: 300 }, { x: 430, y: 220 }, 0, friction, restitution);
    physics.addBody(world, floor);
    physics.addBody(world, ramp1);
    physics.addBody(world, ramp2);

    const rect1 = physics.createRectangle(world, { x: 110, y: 70 }, 48, 48, 1.5, friction, restitution);
    const rect2 = physics.createRectangle(world, { x: 180, y: 0 }, 60, 24, 1, friction, restitution);
    const rect3 = physics.createRectangle(world, { x: 320, y: -60 }, 30, 70, 1.2, friction, restitution);
    physics.addBody(world, rect1);
    physics.addBody(world, rect2);
    physics.addBody(world, rect3);

    return world;
}