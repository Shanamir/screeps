Creep.prototype.findConstructionSite = function()
{
	var target = this.pos.findClosest(FIND_CONSTRUCTION_SITES);
	this.memory.target = target.id;
}

var totalHarvesters = 0;
var totalBuilders = 0;
var servants = 0;
var neededBuilers = 1;

var harvester = require('harvester');
var builder = require('builder');
var setRoadPoint = require('SetRoadPoint');
var controllerServant = require('controllerServant');

for (var i in Game.creeps)
{
    if (Game.creeps[i].spawning)
        continue;
    if (Game.creeps[i].memory.role == 'harvester')
    {
        totalHarvesters++;
		harvester(Game.creeps[i]);
		if (Game.creeps[i].room.controller.my && Game.creeps[i].room.controller.level >=3)
			setRoadPoint(Game.creeps[i]);
    }
    
	if (Game.creeps[i].memory.role == 'builder') 
	{
	    totalBuilders++;
		builder(Game.creeps[i]);
	}
	
	if (Game.creeps[i].memory.role == 'controllerServant') 
	{
		servants++;
		controllerServant(Game.creeps[i]);
	}
}

for (var i in Memory.roads)
{
    if (Memory.roads[i] > 3)
    {
		Game.rooms[Memory.roadsid[i].roomName].createConstructionSite(Memory.roadsid[i].x, Memory.roadsid[i].y, STRUCTURE_ROAD);
        delete Memory.roads[i];
    }
}

var construction = Game.spawns.Spawn1.room.find(FIND_CONSTRUCTION_SITES, {filter: {my : true}});

for (var i in Game.spawns)    
{
    if (Game.spawns[i].canCreateCreep([WORK, CARRY, MOVE]) == OK)
    {
		if (totalHarvesters < 4)
			Game.spawns[i].createCreep([WORK, CARRY, MOVE], '' , { role: 'harvester'});
		else if (!Game.spawns.Spawn1.room.controller.my && servants == 0)
			Game.spawns[i].createCreep([WORK, CARRY, MOVE], '', { role: 'controllerServant'});
		else if (totalBuilders < neededBuilers && construction.length > 0 && Game.spawns[i].canCreateCreep([WORK, WORK, CARRY, MOVE]) == OK)
			Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], '', { role: 'builder'});
    }
}
