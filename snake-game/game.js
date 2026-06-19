// Canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game constants
const gridSize = 20;
const tileCount = canvas.width / gridSize;

// Game variables
let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let direction = { x: 1, y: 0 };
let nextDirection = { x: 1, y: 0 };
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
let gameRunning = false;
let gamePaused = false;
let gameLoopId = null;

// Update high score display
document.getElementById('highScore').textContent = highScore;

// Event listeners for keyboard input
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
    if (!gameRunning) return;

    switch (e.key.toLowerCase()) {
        case 'arrowup':
        case 'w':
            if (direction.y === 0) nextDirection = { x: 0, y: -1 };
            e.preventDefault();
            break;
        case 'arrowdown':
        case 's':
            if (direction.y === 0) nextDirection = { x: 0, y: 1 };
            e.preventDefault();
            break;
        case 'arrowleft':
        case 'a':
            if (direction.x === 0) nextDirection = { x: -1, y: 0 };
            e.preventDefault();
            break;
        case 'arrowright':
        case 'd':
            if (direction.x === 0) nextDirection = { x: 1, y: 0 };
            e.preventDefault();
            break;
    }
}

function startGame() {
    if (gameRunning) return;
    gameRunning = true;
    gamePaused = false;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('pauseBtn').disabled = false;
    gameLoopId = setInterval(gameLoop, 100);
}

function togglePause() {
    gamePaused = !gamePaused;
    const pauseBtn = document.getElementById('pauseBtn');
    pauseBtn.textContent = gamePaused ? 'Resume' : 'Pause';
}

function resetGame() {
    gameRunning = false;
    gamePaused = false;
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
    document.getElementById('pauseBtn').textContent = 'Pause';
    clearInterval(gameLoopId);
    draw();
}

function gameLoop() {
    if (!gamePaused) {
        update();
    }
    draw();
}

function update() {
    // Update direction
    direction = nextDirection;

    // Calculate new head position
    const head = snake[0];
    const newHead = {
        x: head.x + direction.x,
        y: head.y + direction.y
    };

    // Check wall collision
    if (newHead.x < 0 || newHead.x >= tileCount || newHead.y < 0 || newHead.y >= tileCount) {
        endGame();
        return;
    }

    // Check self collision
    if (snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        endGame();
        return;
    }

    // Add new head
    snake.unshift(newHead);

    // Check food collision
    if (newHead.x === food.x && newHead.y === food.y) {
        score += 10;
        document.getElementById('score').textContent = score;
        generateFood();
    } else {
        // Remove tail if no food eaten
        snake.pop();
    }
}

function generateFood() {
    let newFood;
    let collision;
    do {
        collision = false;
        newFood = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
        // Check if food spawns on snake
        if (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
            collision = true;
        }
    } while (collision);
    food = newFood;
}

function draw() {
    // Clear canvas
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid (optional)
    ctx.strokeStyle = '#2a2a4e';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
    }

    // Draw snake
    snake.forEach((segment, index) => {
        if (index === 0) {
            // Head
            ctx.fillStyle = '#00ff00';
        } else {
            // Body - gradient effect
            ctx.fillStyle = `hsl(120, 100%, ${50 - index * 2}%)`;
        }
        ctx.fillRect(
            segment.x * gridSize + 1,
            segment.y * gridSize + 1,
            gridSize - 2,
            gridSize - 2
        );
    });

    // Draw food
    ctx.fillStyle = '#ff4444';
    ctx.beginPath();
    ctx.arc(
        food.x * gridSize + gridSize / 2,
        food.y * gridSize + gridSize / 2,
        gridSize / 2 - 2,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

function endGame() {
    gameRunning = false;
    clearInterval(gameLoopId);
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
    document.getElementById('pauseBtn').textContent = 'Pause';

    // Update high score
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('snakeHighScore', highScore);
        document.getElementById('highScore').textContent = highScore;
        alert(`Game Over! New High Score: ${score}`);
    } else {
        alert(`Game Over! Score: ${score}`);
    }
}

// Initial draw
draw();