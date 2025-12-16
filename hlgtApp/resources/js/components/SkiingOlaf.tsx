import { useEffect, useState } from 'react';

export default function SkiingOlaf() {
    const SPRITE_SIZE = 100;

    // start position off-screen to the right
    const [position, setPosition] = useState(window.innerWidth + SPRITE_SIZE);
    const [currentFrame, setCurrentFrame] = useState(0);

    const framePositions = [
        { x: 0, y: 0 },
        { x: -100, y: 0 },
        { x: 0, y: -100 },
        { x: -100, y: -100 }
    ];

    useEffect(() => {
        // frames animation
        const frameInterval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % 4);
        }, 150);

        // Movement in a loop right → left
        const moveInterval = setInterval(() => {
            setPosition((prev) => {
                if (prev < -SPRITE_SIZE) {
                    // Reappears on the right
                    return window.innerWidth + SPRITE_SIZE;
                }
                return prev - 4;
            });
        }, 30);

        return () => {
            clearInterval(frameInterval);
            clearInterval(moveInterval);
        };
    }, []);

    return (
        <div
            className="absolute pointer-events-none"
            style={{
                left: `${position}px`,
                bottom: '5px',
                transform: 'scaleX(1)', // Looks to the left
            }}
        >
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundImage: 'url(/images/olafsprite.png)',
                    backgroundSize: '200px 200px',
                    backgroundPosition: `${framePositions[currentFrame].x}px ${framePositions[currentFrame].y}px`,
                    imageRendering: 'crisp-edges',
                    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
                }}
            />
        </div>
    );
}
