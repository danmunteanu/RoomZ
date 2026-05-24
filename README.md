## Description
This is a very basic Laravel, Vue.js and three.js setup. 
It creates a three.js scene and starts rotating a cube.
It handles resize of the viewport.
This project's purpose is to help set up three.js fast.

## Dependencies
* Laravel (*obviously*)
* Vue.js
* tailwind
* [Three.js](https://threejs.org/) - *a 3D rendering library in Javascript.*

## Project setup
After cloning, run:
* **composer update**
* **npm install**

Make sure to copy .env.example to .env.
Set it up to use sqlite (although the db is not used yet).
Also run:
* **php artisan migrate** for the migrations
* **php artisan key:generate** to generate the application key
* **composer run dev** to start the server

If everything is fine, you should see a cube spinning.

