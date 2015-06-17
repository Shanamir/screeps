module.exports = function (creep) 
{
    if(creep.energy === 0) 
	{
		creep.moveTo(Game.spawns.Spawn1);
		Game.spawns.Spawn1.transferEnergy(creep);
	}
	else 
	{
		var target = undefined;
		//creep.say(creep.memory.target);
		if (creep.memory.target === undefined)
			creep.findConstructionSite();
		else
		{
			var targets  = creep.room.find(FIND_CONSTRUCTION_SITES, {filter: {id:creep.memory.target}});
			if (targets.length > 0)
				target = targets[0];
			else
				creep.findConstructionSite();
		}
	
		if(target) 
		{
			if (!creep.pos.isNearTo(target))
				creep.moveTo(target);
			creep.build(target);
		}	
	}
  }
