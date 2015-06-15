module.exports = function (creep) 
{
	var road = creep.room.find(FIND_CONSTRUCTION_SITES, {filter: {structureType : STRUCTURE_ROAD, my : true, pos : creep.pos}});
	if (road)
	{
		if (creep.pos in Memory.roads)
			Memory.roads[creep.pos] = Memory.roads[creep.pos] + 1;
		else
			Memory.roads[creep.pos] = 1;
	}
	// test
	//if (creep.name == "Jasmine")
	//    console.log(Memory.roads[creep.pos]);
}