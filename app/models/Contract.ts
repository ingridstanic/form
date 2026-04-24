export class Contract {
  hunterName: string;
  targetName: string;
  email: string;
  targetPlanet: string;
  rewardCredits: number;
  dangerLevel: string;
  deadLine: Date;
  aliveRequired: boolean;

  constructor(
    hunterName: string,
    targetName: string,
    email: string,
    targetPlanet: string,
    rewardCredits: number,
    dangerLevel: string,
    deadLine: Date,
    aliveRequired: boolean,
  ) {
    this.hunterName = hunterName;
    this.targetName = targetName;
    this.email = email;
    this.targetPlanet = targetPlanet;
    this.rewardCredits = rewardCredits;
    this.dangerLevel = dangerLevel;
    this.deadLine = deadLine;
    this.aliveRequired = aliveRequired;
  }
}
