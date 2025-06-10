import Room from './room.js';

export default class Apartment
{
    constructor ()
    {
        let room = new Room();
        
        this.rooms = [];
        this.rooms.push(room);

        this.rooms.push(new Room(4, 3, 1.5, 0.5)); 
    }

    addRoom(room)
    {
        this.rooms.push(room);
    }

    clearRooms()
    {
        this.rooms.clear();
    }

}