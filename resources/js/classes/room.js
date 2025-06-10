export default class Room {

    #gridX;
    #gridY;

    #width;
    #length;
    #height;
    #wallThickness;

    constructor(width, length, height, wallThickness = 0.1) {
        this._width = width;
        this._length = length;
        this._height = height;
        this._wallThickness = wallThickness;
    }

    get width() {
        return this._width;
    }

    get length() {
        return this._length;
    }

    get height() {
        return this._height;
    }

    get wallThickness() {
        return this._wallThickness;
    }

    // Setters with validation
    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.error("Width must be a positive number");
        }
    }

    set length(value) {
        if (value > 0) {
            this._length = value;
        } else {
            console.error("Length must be a positive number");
        }
    }

    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.error("Height must be a positive number");
        }
    }

    set wallThickness(value) {
        if (value > 0) {
            this._wallThickness = value;
        } else {
            console.error("Wall thickness cannot be negative or zero");
        }
    }
}