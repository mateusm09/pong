import Phaser from 'phaser';

export const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#33A5E7',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
        },
    },
    scale: {
        width: 800,
        height: 600,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};
