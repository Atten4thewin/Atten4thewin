# 🐍 Snake Game

A classic snake game built with vanilla HTML5, CSS3, and JavaScript. No frameworks, no dependencies—just pure web technology!

## 🎮 Play Now

[**Play the Snake Game Online**](https://atten4thewin.github.io/Atten4thewin/snake-game/)

## ✨ Features

- **Classic Snake Gameplay**: Navigate your snake to eat food and grow
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **High Score Tracking**: Your high score is saved locally in your browser
- **Smooth Controls**: Use arrow keys or WASD to move
- **Pause/Resume**: Take a break anytime with the pause button
- **Beautiful UI**: Modern gradient design with smooth animations
- **Collision Detection**: Game ends when you hit walls or yourself

## 🎯 How to Play

1. Click **Start Game** to begin
2. Use **Arrow Keys** ⬅️ ⬆️ ⬇️ ➡️ or **WASD** to move the snake
3. Eat the **red food** 🔴 to grow and earn points (10 points each)
4. Avoid hitting the **walls** and your **own body**
5. Beat your high score!

### Controls
- **Arrow Keys** or **WASD** - Move snake
- **Pause Button** - Pause/Resume game
- **Reset Button** - Start a new game

## 📁 Project Structure

```
snake-game/
├── index.html    # Main HTML file
├── styles.css    # Styling and animations
├── game.js       # Game logic and mechanics
└── README.md     # This file
```

## 🛠️ Technical Details

### HTML5 Canvas
The game uses the HTML5 Canvas API for rendering the game board and all graphics.

### Game Mechanics
- **Grid-based movement**: The snake moves in a 20x20 grid system
- **Collision detection**: Checks for wall collisions and self-collision
- **Food spawning**: Randomly generates food that doesn't spawn on the snake
- **Score system**: Increases by 10 points for each food eaten

### Local Storage
High scores are persisted using browser's `localStorage` API, so your record is saved between sessions!

## 🎨 Design

- **Color Scheme**: Purple gradient background with neon green snake and red food
- **Grid Background**: Dark blue grid for visual guidance
- **Responsive Layout**: CSS Flexbox for responsive design
- **Smooth Animations**: Button hover effects and transitions

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Getting Started Locally

1. Clone or download the files
2. Open `index.html` in your web browser
3. Enjoy!

No build process, no dependencies, no server needed!

## 📊 Game Statistics

| Metric | Value |
|--------|-------|
| Grid Size | 20x20 tiles |
| Game Speed | 100ms per move |
| Points per Food | 10 |
| Starting Snake Length | 1 |
| Initial Direction | Right |

## 🎓 Learn From This Project

This project is great for learning:
- HTML5 Canvas API
- JavaScript game loop concepts
- Event handling and keyboard input
- LocalStorage API
- CSS3 Flexbox and gradients
- Game state management

## 📝 License

Free to use and modify!

## 🤝 Have Fun!

Enjoy the game and try to beat your high score! 🐍

---

Built with ❤️ using vanilla web technologies
