import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SlimeGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const canvasRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    if (gameStarted && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Game state
      let animationFrameId;
      let lastTime = 0;
      const player = {
        x: canvas.width / 2,
        y: canvas.height - 50,
        size: 30,
        speed: 6
      };
      
      const obstacles = [];
      const obstacleSpeed = 3;
      const obstacleSpawnRate = 50; // Lower is faster
      let obstacleTimer = 0;
      let currentScore = 0;
      
      // Keyboard state
      const keys = {
        ArrowLeft: false,
        ArrowRight: false
      };
      
      // Event listeners
      const handleKeyDown = (e) => {
        if (keys.hasOwnProperty(e.key)) {
          keys[e.key] = true;
        }
      };
      
      const handleKeyUp = (e) => {
        if (keys.hasOwnProperty(e.key)) {
          keys[e.key] = false;
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      
      // Game loop
      const gameLoop = (timestamp) => {
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        
        // Clear canvas
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update player
        if (keys.ArrowLeft) player.x = Math.max(player.size / 2, player.x - player.speed);
        if (keys.ArrowRight) player.x = Math.min(canvas.width - player.size / 2, player.x + player.speed);
        
        // Draw player (slime)
        ctx.fillStyle = '#0aff7a';
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.size / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Create obstacles
        obstacleTimer += deltaTime;
        if (obstacleTimer > obstacleSpawnRate) {
          obstacleTimer = 0;
          obstacles.push({
            x: Math.random() * (canvas.width - 20) + 10,
            y: -20,
            size: Math.random() * 20 + 10,
            speed: obstacleSpeed + Math.random() * 2
          });
        }
        
        // Update and draw obstacles
        for (let i = obstacles.length - 1; i >= 0; i--) {
          const obstacle = obstacles[i];
          obstacle.y += obstacle.speed;
          
          // Draw obstacle
          ctx.fillStyle = '#ff5577';
          ctx.beginPath();
          ctx.arc(obstacle.x, obstacle.y, obstacle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Check collision
          const dx = player.x - obstacle.x;
          const dy = player.y - obstacle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < player.size / 2 + obstacle.size) {
            // Collision detected - game over
            setGameStarted(false);
            setScore(currentScore);
            if (currentScore > highScore) {
              setHighScore(currentScore);
            }
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            return;
          }
          
          // Remove obstacles that are off screen
          if (obstacle.y > canvas.height + obstacle.size) {
            obstacles.splice(i, 1);
            currentScore++;
            setScore(currentScore);
          }
        }
        
        // Draw score
        ctx.fillStyle = '#fff';
        ctx.font = '16px Arial';
        ctx.fillText(`Score: ${currentScore}`, 10, 20);
        
        animationFrameId = requestAnimationFrame(gameLoop);
      };
      
      // Start game loop
      animationFrameId = requestAnimationFrame(gameLoop);
      
      // Cleanup
      gameRef.current = {
        cleanup: () => {
          cancelAnimationFrame(animationFrameId);
          window.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('keyup', handleKeyUp);
        }
      };
      
      return () => {
        if (gameRef.current) {
          gameRef.current.cleanup();
        }
      };
    }
  }, [gameStarted, highScore]);

  const startGame = () => {
    setScore(0);
    setGameStarted(true);
  };

  return (
    <section id="game" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Slime Dodge</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test your reflexes in our mini-game. Dodge the obstacles and collect points!
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xl border-4 border-slime-400 rounded-lg overflow-hidden shadow-lg shadow-slime-400/20">
            {!gameStarted && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                <h3 className="text-2xl font-bold mb-2">Slime Dodge</h3>
                <p className="text-gray-300 mb-4">Use arrow keys to move and avoid obstacles</p>
                <p className="text-gray-400 mb-6">High Score: {highScore}</p>
                <motion.button
                  onClick={startGame}
                  className="slime-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Game
                </motion.button>
              </div>
            )}
            
            <canvas 
              ref={canvasRef} 
              width={600} 
              height={400}
              className="w-full h-[400px] bg-black"
            />
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-slime-400/10 max-w-xl w-full">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">Current Score</p>
                <p className="text-2xl font-bold text-slime-400">{score}</p>
              </div>
              <div>
                <p className="font-semibold">High Score</p>
                <p className="text-2xl font-bold text-slime-400">{highScore}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlimeGame;
