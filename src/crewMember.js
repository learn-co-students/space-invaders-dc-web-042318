class CrewMember {
	constructor(position, currentShip = 'Looking for a Rig') {
		this.position = position
		this.currentShip = currentShip
	}

	chargePhasers() {
		if (this.position === 'Gunner' && this.currentShip !== 'Looking for a Rig') {
			this.currentShip.phasersCharge = 'charged'
		} else {
			return 'had no effect'
		}
	}

	engageWarpDrive() {
		if (this.position === 'Pilot' && this.currentShip !== 'Looking for a Rig') {
			this.currentShip.warpDrive = 'engaged'
		} else {
			return 'had no effect'
		}
	}

	setsInvisibility() {
		if (this.position === 'Defender' && this.currentShip !== 'Looking for a Rig') {
			this.currentShip.cloaked = true
		} else {
			return 'had no effect'
		}
	}

}
