class Spaceship {
	constructor(name, crew, phasers, shields) {
		this.name = name
		this.crew = crew
		this.phasers = phasers
		this.shields = shields
		this.cloaked = false
		this.warpDrive = 'disengaged'
		if (this.crew.length === 0) {
			this.docked = true
		} else {
			this.docked = false
		}
		this.phasersCharge = 'uncharged'
		this.assignShip(this.crew)
	}

	assignShip(members) {
		members.forEach(member=>member.currentShip = this)
		
	}
	

}
