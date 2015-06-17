module.exports = function (creep) 
{
    if (!creep.room.controller.my || creep.room.controller.level < 3)
        return;
    if (!Memory.roads)
	{
        Memory.roads = new Object();
		Memory.roadsid = new Object();
	}
	var road = creep.room.find(FIND_CONSTRUCTION_SITES, {filter: {structureType : STRUCTURE_ROAD, my : true, pos : creep.pos}});
	if (road.length == 0)
	{
		//y * sizeX + x - unique identifier point in room, X = 50, Y = 50, so 19,21 = 1069
		var id = (creep.pos.y * 50 + creep.pos.x);
		if (id in Memory.roads)
		{
			Memory.roads[id] = Memory.roads[id] + 1;
		}
		else
		{
			Memory.roadsid[id] = creep.pos;
			Memory.roads[id] = 1;
		}
	}
}
