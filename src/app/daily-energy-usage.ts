export class DailyEnergyUsage {
  constructor(public daily_energy_usage: EnergyUsage[]) { }
}
export class EnergyUsage {
  constructor(public date: string, public usage: number) { }
}