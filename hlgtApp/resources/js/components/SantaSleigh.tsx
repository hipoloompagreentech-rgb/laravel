import { useEffect, useState } from 'react';

export default function SantaSleigh() {
    const FRAME_WIDTH = 680;
    const FRAME_HEIGHT = 460;

    const [position, setPosition] = useState(-FRAME_WIDTH);
    const [currentFrame, setCurrentFrame] = useState(0);

    // 2 columnas × 2 filas
    const framePositions = [
        { x: 0, y: 0 },
        { x: -680, y: 0 },
        { x: 0, y: -460 },
        { x: -680, y: -460 },
    ];

    useEffect(() => {
        const frameInterval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % framePositions.length);
        }, 160);

        const moveInterval = setInterval(() => {
            setPosition((prev) => {
                if (prev > window.innerWidth + FRAME_WIDTH) {
                    return -FRAME_WIDTH;
                }
                return prev + 2;
            });
        }, 30);

        return () => {
            clearInterval(frameInterval);
            clearInterval(moveInterval);
        };
    }, []);

    return (
        <div
            className="absolute pointer-events-none z-40"
            style={{
                left: `${position}px`,
                top: '64px', // justo debajo del navbar
            }}
        >
            <div
    style={{
        width: `${FRAME_WIDTH}px`,
        height: `${FRAME_HEIGHT}px`,
        backgroundImage: 'url(/images/hiposanta.png)',
        backgroundSize: '1536px 925px',
        backgroundPosition: `${framePositions[currentFrame].x}px ${framePositions[currentFrame].y}px`,
        imageRendering: 'crisp-edges',
        filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.35))',

        transform: 'scale(0.2)',
        transformOrigin: 'top left',
    }}
/>
        </div>
    );
}
