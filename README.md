# CubeGo Racing

A 3D racing game built with Three.js featuring customizable vehicles, dynamic environments, and realistic physics.

## 🎮 Features

### Vehicle Customization
- **Multiple Vehicle Types**
  - Sports Car: High speed, moderate handling
  - SUV: Balanced performance, good handling
  - Motorcycle: Excellent handling, lower top speed
- **Color Customization**
  - 6 different color options
  - Real-time preview of color changes
  - Customizable body parts with different materials
- **Performance Stats**
  - Speed
  - Acceleration
  - Handling
  - Boost capabilities

### Environment
- **Dynamic Map Themes**
  - Day Zone: Bright, clear visibility
  - Night Zone: Atmospheric lighting with fog
  - Winter Fell: Snow-like environment with cool lighting
- **Track Features**
  - Circular racing track with proper boundaries
  - Road markings and textures
  - Environmental props (trees, etc.)
  - Collision detection with environment

### Gameplay Mechanics
- **Vehicle Physics**
  - Realistic acceleration and deceleration
  - Speed-dependent steering
  - Collision response system
  - Boundary checking
- **Boost System**
  - Temporary speed boost
  - Visual flame effects
  - Cooldown mechanism
- **Camera System**
  - Third-person follow camera
  - Smooth camera transitions
  - Dynamic positioning based on vehicle movement

### User Interface
- **Main Menu**
  - Start Game
  - Customize
  - Exit options
- **Customization Menu**
  - Side-by-side vehicle and map preview
  - Real-time 3D previews
  - Interactive color selection
  - Vehicle stats visualization
- **In-Game UI**
  - Speed indicator
  - Boost status
  - Collision feedback

## 🛠️ Technical Implementation

### Core Systems
1. **Vehicle System**
   ```javascript
   class Car {
     // Physics properties
     speed, acceleration, handling
     // Visual components
     body, wheels, lights
     // Game mechanics
     boost, collision, boundaries
   }
   ```

2. **Environment System**
   ```javascript
   class Game {
     // Scene management
     scene, camera, renderer
     // Environment setup
     track, props, lighting
     // Game state
     gameState, collisionObjects
   }
   ```

3. **Input System**
   ```javascript
   class InputHandler {
     // Keyboard controls
     forward, backward, left, right
     // Special actions
     boost, brake
   }
   ```

### Physics Implementation
- **Movement**
  - Speed-based acceleration
  - Directional movement using vectors
  - Rotation based on steering input
- **Collision**
  - Radius-based collision detection
  - Response calculation
  - Speed reduction on impact
- **Boundaries**
  - Distance-based boundary checking
  - Position correction
  - Speed reduction on boundary hit

### Visual Effects
1. **Vehicle Effects**
   - Dynamic wheel rotation
   - Boost flame particles
   - Headlight and taillight illumination
2. **Environment Effects**
   - Dynamic lighting per theme
   - Fog effects
   - Shadow casting and receiving

## 🚀 Tech Stack

### Core Technologies
- **Three.js**: 3D rendering and scene management
- **JavaScript**: Core game logic and mechanics
- **HTML5/CSS3**: UI implementation

### Libraries and Tools
- **Three.js Modules**
  - `THREE.Scene`: Scene management
  - `THREE.WebGLRenderer`: Rendering
  - `THREE.PerspectiveCamera`: Camera system
  - `THREE.MeshStandardMaterial`: PBR materials
  - `THREE.Group`: Object hierarchy

### Development Tools
- Modern JavaScript (ES6+)
- Module bundling
- Asset management

## 🎯 Future Enhancements
1. **Gameplay**
   - Multiplayer support
   - Time trials
   - Power-ups
2. **Visual**
   - More vehicle models
   - Additional map themes
   - Weather effects
3. **Features**
   - Leaderboards
   - Achievement system
   - Custom track editor

## 🏃‍♂️ Getting Started

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser

## 🎮 Controls

- **W/Up Arrow**: Accelerate
- **S/Down Arrow**: Brake/Reverse
- **A/Left Arrow**: Steer Left
- **D/Right Arrow**: Steer Right
- **Shift**: Boost
- **Space**: Handbrake

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 