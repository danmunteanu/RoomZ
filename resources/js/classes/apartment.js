import Room from './room.js';

export default class Apartment
{
    constructor ()
    {
        let room = new Room();
        
        this.rooms = [];
        this.rooms.push(room);
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