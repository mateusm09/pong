import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {}

    create() {
        const upper = this.add.rectangle(400, 100, 600, 10, 0xffffff);
        const lower = this.add.rectangle(400, 500, 600, 10, 0xffffff);
        const left = this.add.rectangle(100, 300, 10, 400, 0xffffff);
        const right = this.add.rectangle(700, 300, 10, 400, 0xffffff);

        const boundaries = this.physics.add.staticGroup([upper, lower, left, right]);

        const ball = this.add.circle(400, 300, 10, 0xffffff);
        const ballPhysics = this.physics.add.group(ball);
        ballPhysics.setVelocity(100, 100);

        this.physics.add.collider(ballPhysics, boundaries, this.onHitBorders, undefined, this);
    }

    onHitBorders(
        ball: Phaser.Types.Physics.Arcade.GameObjectWithBody,
        border: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    ) {
        console.log('collision detected');

        if (ball.body.blocked.right || ball.body.blocked.left) {
            ball.body.velocity.x *= -1;
        }

        if (ball.body.blocked.up || ball.body.blocked.down) {
            ball.body.velocity.y *= -1;
        }
    }
}
