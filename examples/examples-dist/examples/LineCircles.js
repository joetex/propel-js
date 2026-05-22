import { physics } from "../../../dist/index.js";
export function lineCirclesInit() {
    const world = physics.createWorld({ x: 0, y: 280 });
    world.damp = 0.995;
    world.angularDamp = 0.995;
    const friction = 0.4;
    const restitution = 0.5;
    const floor = physics.createLine(world, { x: 40, y: 460 }, { x: 460, y: 460 }, 0, friction, restitution);
    const ramp1 = physics.createLine(world, { x: 80, y: 250 }, { x: 240, y: 360 }, 0, friction, restitution);
    const ramp2 = physics.createLine(world, { x: 280, y: 340 }, { x: 430, y: 260 }, 0, friction, restitution);
    physics.addBody(world, floor);
    physics.addBody(world, ramp1);
    physics.addBody(world, ramp2);
    const circle1 = physics.createCircle(world, { x: 110, y: 40 }, 22, 1, friction, 0.7);
    const circle2 = physics.createCircle(world, { x: 180, y: 0 }, 18, 1, friction, 0.7);
    const circle3 = physics.createCircle(world, { x: 320, y: -40 }, 24, 1, friction, 0.7);
    physics.addBody(world, circle1);
    physics.addBody(world, circle2);
    physics.addBody(world, circle3);
    return world;
}
