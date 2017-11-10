import { Summary } from './summary';
import { DailyEnergyUsage } from './daily-energy-usage';

export class Homescore {
  summary: Summary;
  dailyEnergyUsage: DailyEnergyUsage;
  
  constructor(summary: Summary, dailyEnergyUsage: DailyEnergyUsage){
    this.summary = summary;
    this.dailyEnergyUsage = dailyEnergyUsage;
  }
}