class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.docked = this.dockCheck();
    this.phasersCharge = "uncharged";
    this.updateCrew();
  }

  updateCrew() {
    if (this.crew.length != 0) {
      this.crew.forEach(member => (member.currentShip = this));
    }
  }

  dockCheck() {
    if (this.crew.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
