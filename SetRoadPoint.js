module.exports = function (creep) 
{
    if (!Memory.roads)
	{
        Memory.roads = new Object();
		Memory.roadsid = new Object();
	}
	var road = creep.room.find(FIND_CONSTRUCTION_SITES, {filter: {structureType : STRUCTURE_ROAD, my : true, pos : creep.pos}});
	if (road)
	{
		//x * X + y - уникальный идентификатор €чейки в комнате, X =48, Y = 48, т.е. 19,21 = 933
		var id = (creep.pos.x * 48 + creep.pos.y);
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
	
	// test
	//if (creep.name == "Jasmine")
	//    console.log(Memory.roads[creep.pos]);
}