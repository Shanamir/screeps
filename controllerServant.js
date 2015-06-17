module.exports = function (creep)
{
	if (!creep.room.controller.my)
    {
        creep.moveTo(creep.room.controller);
        creep.claimController(creep.room.controller);
    }
	else
	{
		if(creep.energy == 0)
		{
			var source = creep.pos.findClosest(FIND_SOURCES);
			creep.moveTo(source);
			creep.harvest(source);
		}
		else 
		{
			if (!creep.pos.isNearTo(creep.room.controller))
			{
			    creep.moveTo(creep.room.controller);
			}
			
			else
			{
    			if (creep.energy > 0)
    			{
    			    creep.upgradeController(creep.room.controller);
    			}
			}
			
		}
	}
}