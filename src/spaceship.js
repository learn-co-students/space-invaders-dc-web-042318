class Spaceship {
  constructor(
    name,
    crew,
    phasers,
    shields,
    cloaked = false,
    warpDrive = 'disengaged',
    phasersCharge = 'uncharged',
  ) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.phasersCharge = phasersCharge;
    this.docked = crew.length === 0;
    this.setCrew(crew);
  }

  setCrew(members) {
    members.forEach((member) => {
      member.currentShip = this;
    });
  }
}
