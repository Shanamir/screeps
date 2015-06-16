module.exports = function (creep) 
{
	if(creep.energy < creep.energyCapacity)
	{
		var source = creep.pos.findClosest(FIND_SOURCES);
		creep.moveTo(source);
		creep.harvest(source);
	}
	else 
	{
		var spawn = creep.pos.findClosest(FIND_MY_SPAWNS);
		creep.moveTo(spawn);
		creep.transferEnergy(spawn);
	}
}
