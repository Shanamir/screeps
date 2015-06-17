module.exports = function (creep)
{
	if (!creep.room.controller.my)
    {
        creep.moveTo(creep.room.controller);
        creep.claimController(creep.room.controller);
    }
	else
	{
	    var source = creep.pos.findClosest(FIND_SOURCES);
	    // 1. Если энергии 0, то идём собирать энергию
	    // 2. Если энергия не полная, но мы рядом с контроллером - отдаём ему
	    // 3. Если энергия не полная, и рядом нет контроллера - собираем энергию до полной загрузки
	    if (creep.energy == 0)
	    {
            creep.moveTo(source);
            creep.harvest(source);
	    }
	    else if (creep.energy < creep.energyCapacity && creep.pos.isNearTo(creep.room.controller))
	    {
	        creep.upgradeController(creep.room.controller);
	    }
	    else if (creep.energy < creep.energyCapacity)
	    {
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