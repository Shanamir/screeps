module.exports = function (creep) 
{
	if(creep.energy < creep.energyCapacity)
	{
		var sources = creep.room.find(FIND_SOURCES);
		creep.moveTo(sources[0]);
		creep.harvest(sources[0]);
		//Memory.roads.push(creep.pos);
	}
	else 
	{
		creep.moveTo(Game.spawns.Spawn1);
		creep.transferEnergy(Game.spawns.Spawn1)
	}
}