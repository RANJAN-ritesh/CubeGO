export class InputHandler {
    constructor() {
        this.keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            brake: false,
            shift: false,
            attack: false,
            weapon: false,
            dodge: false
        };

        this.setupEventListeners();
    }

    setupEventListeners() {
        window.addEventListener('keydown', (event) => {
            switch(event.key.toLowerCase()) {
                case 'w':
                case 'arrowup':
                    this.keys.forward = true;
                    break;
                case 's':
                case 'arrowdown':
                    this.keys.backward = true;
                    break;
                case 'a':
                case 'arrowleft':
                    this.keys.left = true;
                    break;
                case 'd':
                case 'arrowright':
                    this.keys.right = true;
                    break;
                case ' ':
                    this.keys.brake = true;
                    break;
                case 'shift':
                    this.keys.shift = true;
                    break;
                case 'f':
                    this.keys.attack = true;
                    break;
                case 'e':
                    this.keys.weapon = true;
                    break;
                case 'q':
                    this.keys.dodge = true;
                    break;
            }
        });

        window.addEventListener('keyup', (event) => {
            switch(event.key.toLowerCase()) {
                case 'w':
                case 'arrowup':
                    this.keys.forward = false;
                    break;
                case 's':
                case 'arrowdown':
                    this.keys.backward = false;
                    break;
                case 'a':
                case 'arrowleft':
                    this.keys.left = false;
                    break;
                case 'd':
                case 'arrowright':
                    this.keys.right = false;
                    break;
                case ' ':
                    this.keys.brake = false;
                    break;
                case 'shift':
                    this.keys.shift = false;
                    break;
                case 'f':
                    this.keys.attack = false;
                    break;
                case 'e':
                    this.keys.weapon = false;
                    break;
                case 'q':
                    this.keys.dodge = false;
                    break;
            }
        });
    }

    getInput() {
        return this.keys;
    }
} 