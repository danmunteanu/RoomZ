## What is this?
This is a very basic Laravel and three.js setup. 
It creates a three.js scene and starts rotating a cube.
It's helpful when having to set up three.js over and over again.

[Three.js](https://threejs.org/) is a 3D rendering library in Javascript.

## Setup
After cloning, run this:
* **composer update**
* **npm install**

Make sure to copy the .env file and set it up to use sqlite.
* run the migrations with *php artisan migrate*
* generate an application key with *php artisan key:generate*
The DB is not used for now.

