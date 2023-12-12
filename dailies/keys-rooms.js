/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // create set for keys call keyRing
    const keyRing = new Set();
    // initialize nextRoom to 1
    let nextRoom = 1;
    // while nextRoom is truthy
    while(rooms[nextRoom]){
        // place any keys in room[0] into keyRing
        let distinctKeys = rooms[nextRoom - 1];
        for(let i = 0; i < distinctKeys.length; i++){
            keyRing.add(distinctKeys[i]);
        }
        // check if we have the key for the next room in keyRing
        if(!keyRing.has(nextRoom)){
            return false;
        }
        // increment nextRoom
        nextRoom++
    }
    return true;
};

// i had assumed the rooms were organized as a linked list but it seems they are not
// so we could represent the rooms as a set too?
// or maybe a map...
// because we can have the number of the room as the key and the set of distinct keys in the room as a value
// but we have to do away with the nextRoom variable because you aren't necessarily visiting the rooms one after the other
// create a set of rooms with distinct keys
// i see.. we don't visit the rooms in order but the way they are locked fooled me. they are all locked except the first one AT FIRST. but then we could find the key to room 6 in the first room, and despite rooms 2-5 being locked, we could unlock room 6 and find the key to room 2-5 there
// so if we can construct a keyring that has rooms 1 - n on it
// and none of the rooms contain their own key
// we can return true
    // but if a room does contain its own key
    // and that key does not appear anywhere else (or maybe we can filter such keys out of the keyRing)
    // return false

    var canVisitAllRooms2 = function(rooms) {
        // create a map with rooms?
        const roomsMap = new Map()
        let roomNumber = 0
        for(let room in rooms){
            let keySet = new Set(rooms[room]);
            roomsMap.set(`keys in room ${roomNumber}`, keySet)
            roomNumber++
        }
        console.log(roomsMap)
        
        // construct keyRing and check for rooms with their own key
        roomsMap.forEach((value, key, map)=>{
            if (value.has(key)){
                // room has its own key and we need to account for that
            }
        })
        // otherwise if no room has its own key
        const keyRing = new Set();
        // we could use an object to keep track of rooms that are "unlocked"
        const unlocked = new Map();
        for(let i = 0; i < rooms.length; i++){
            if(i===0) {
                unlocked.set(0, true); 
            } else {
                unlocked.set(i, false);
            }
        }
        // add keys from first room to keyRing
        keyRing.add(rooms[0])
        
        // for checking that we're able to access all rooms, we need to figure out a way to get through all rooms, not necessarily sequentially
        // adding keys to keyRing as we go
        // we start at 0, and if we get any keys, we update keyRing. then we want to access all those rooms on keyRing and see if they have new rooms. 
        // if the keyRing doesn't already have the key, add it to keyRing
    };

let rooms = [[1,3],[3,0,1],[2],[0]]
canVisitAllRooms2(rooms);