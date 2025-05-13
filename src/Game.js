import { Weather } from './effects/Weather.js';
import { RandomEncounters } from './entities/RandomEncounters.js';
import { Mountains } from './entities/Mountains.js';
import * as THREE from 'three';

export class Game {
    constructor() {
        console.log('Game constructor started');
        
        // Initialize scene and other properties
        this.scene = new THREE.Scene();
        this.trackRadius = 62.5;
        
        // Setup lighting with more intensity
        this.setupLighting();
        
        // Initialize game state as a class property
        this.isGameStarted = false;
        this.isGameOver = false;
        this.score = 0;
        
        // Setup UI
        this.setupWeatherControls();
        
        console.log('Game initialization complete');
    }

    startGame() {
        console.log('Starting game...');
        this.isGameStarted = true;
        this.isGameOver = false;
        this.score = 0;
        
        // Initialize game systems
        this.initializeGameSystems();
        
        console.log('Game started successfully');
    }

    initializeGameSystems() {
        console.log('Initializing game systems...');
        
        // Initialize weather system
        console.log('Initializing weather system...');
        this.weather = new Weather(this.scene);
        
        // Initialize random encounters
        console.log('Initializing random encounters...');
        this.randomEncounters = new RandomEncounters(this.scene, this.trackRadius);
        
        // Initialize mountains
        console.log('Initializing mountains...');
        this.mountains = new Mountains(this.scene, this.trackRadius);
        
        // Verify scene contents
        console.log('Scene children count:', this.scene.children.length);
        this.scene.children.forEach((child, index) => {
            console.log(`Scene child ${index}:`, child.type, child.name);
        });
    }

    setupLighting() {
        console.log('Setting up lighting...');
        
        // Ambient light with increased intensity
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
        this.scene.add(ambientLight);
        console.log('Ambient light added');

        // Directional light (sun) with increased intensity
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(100, 100, 50);
        directionalLight.castShadow = true;
        
        // Configure shadow properties
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 500;
        directionalLight.shadow.camera.left = -100;
        directionalLight.shadow.camera.right = 100;
        directionalLight.shadow.camera.top = 100;
        directionalLight.shadow.camera.bottom = -100;
        
        this.scene.add(directionalLight);
        console.log('Directional light added');
    }

    setupWeatherControls() {
        // Add weather control buttons to the UI
        const weatherControls = document.createElement('div');
        weatherControls.style.position = 'absolute';
        weatherControls.style.top = '10px';
        weatherControls.style.right = '10px';
        weatherControls.style.display = 'flex';
        weatherControls.style.gap = '10px';

        const weatherTypes = ['clear', 'rain', 'snow'];
        weatherTypes.forEach(type => {
            const button = document.createElement('button');
            button.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            button.style.padding = '8px 16px';
            button.style.borderRadius = '4px';
            button.style.border = 'none';
            button.style.backgroundColor = '#4CAF50';
            button.style.color = 'white';
            button.style.cursor = 'pointer';
            button.style.transition = 'background-color 0.3s';

            button.onmouseover = () => button.style.backgroundColor = '#45a049';
            button.onmouseout = () => button.style.backgroundColor = '#4CAF50';
            button.onclick = () => this.weather.setWeather(type);

            weatherControls.appendChild(button);
        });

        document.body.appendChild(weatherControls);
    }

    update(deltaTime) {
        if (!this.isGameStarted) return;
        
        // Make sure deltaTime is a reasonable value
        if (deltaTime > 0.1) deltaTime = 0.1;
        
        // Update weather
        if (this.weather) {
            this.weather.update(deltaTime);
        }
        
        // Update random encounters with debug logging
        if (this.randomEncounters) {
            this.randomEncounters.update(deltaTime);
            // Debug log every 5 seconds
            if (Math.floor(this.randomEncounters.spawnTimer) % 5 === 0) {
                console.log('Active animals:', this.randomEncounters.animals.length);
            }
        } else {
            console.error('RandomEncounters not initialized!');
        }

        // Update mountains
        if (this.mountains) {
            this.mountains.update(deltaTime);
        } else {
            console.error('Mountains not initialized!');
        }
        
        // Check for collisions with animals
        if (this.car && this.randomEncounters) {
            if (this.randomEncounters.checkCollision(this.car.carGroup.position, this.car.collisionRadius)) {
                this.handleAnimalCollision();
            }
        }
    }

    handleAnimalCollision() {
        if (!this.car) return;
        
        // Reduce car speed
        this.car.speed *= 0.5;
        
        // Add some random rotation to the car
        this.car.carGroup.rotation.y += (Math.random() - 0.5) * Math.PI / 4;
        
        // Play collision sound if available
        if (this.soundManager) {
            this.soundManager.playSound('collision');
        }
    }
} 