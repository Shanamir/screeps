module.exports = function (creep) 
{
	if(creep.energy < creep.energyCapacity)
	{
		var source = creep.pos.findClosest(FIND_SOURCES);
		if (!creep.pos.isNearTo(source))
			creep.moveTo(source);
		creep.harvest(source);
	}
	else 
	{
		var spawn = creep.pos.findClosest(FIND_MY_SPAWNS, 
		{ 
		    filter: function(object)
		    {
		        return object.energy < object.energyCapacity
		    }
		});
		if (!creep.pos.isNearTo(spawn))
			creep.moveTo(spawn);
		creep.transferEnergy(spawn);
	}
}
