health = 600;
const heal = health / 40;
const cooldown = 30;
const reWall = extendContent(Wall, "rewall", {
	update(tile) {
		if (tile.entity.health() < tile.entity.maxHealth() & tile.entity.timer.get(0, cooldown)) {
			tile.entity.health += heal
		}
	}
});

reWall.localizedName = "reWall";