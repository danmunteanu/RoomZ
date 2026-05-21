## Description
This is a very basic Laravel, Vue.js and three.js setup. 
It creates a three.js scene and starts rotating a cube.
It's helpful when having to set up three.js repeatedly.

[Three.js](https://threejs.org/) is a 3D rendering library in Javascript.

## Project setup
After cloning, run:
* **composer update**
* **npm install**

Make sure to copy .env.example to .env.
Set it up to use sqlite (although the db is not used yet).
Also run:
* **php artisan migrate** for the migrations
* **php artisan key:generate** to generate the application key

If everything is fine, you should see a cube spinning.

