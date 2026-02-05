import { useEffect, useRef } from 'react';
import styles from './GlobalCanvas.module.css';

const GlobalCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
            drawScene();
        };

        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // No velocity needed for static
                this.size = Math.random() * 2 + 1.5; // Slightly larger
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(117, 90, 226, 0.6)'; // Much higher opacity
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            // Density: 1 particle per 15px of width (approx 60-100 on desktop)
            const particleCount = Math.min(window.innerWidth / 15, 80);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawScene = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) => {
                particle.draw();

                // Draw connections
                for (let j = index + 1; j < particles.length; j++) {
                    const dx = particle.x - particles[j].x;
                    const dy = particle.y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 180) { // Connect further
                        ctx.beginPath();
                        // Opacity fades with distance, starting at 0.4
                        ctx.strokeStyle = `rgba(117, 90, 226, ${0.4 - distance / 500})`;
                        ctx.lineWidth = 1.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            });
        };

        resizeCanvas(); // Initialize and draw

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default GlobalCanvas;
