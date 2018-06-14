class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }

  shipCheck() {}

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect";
    }
  }

  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect";
    } else if (this.position === "Defender") {
      this.currentShip.cloaked = true;
    }
  }

  chargePhasers() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect";
    }
  }
}
