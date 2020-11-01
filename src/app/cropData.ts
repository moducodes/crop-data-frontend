export interface ICrop {
    name: string;
    soil_type: string;
    water_requirement:string;
    expected_income:number;
  }

export interface ICropDetails{
  name: string;
  soil_type: string;
  water_requirement:string;
  expected_income:number;
  expected_harvest:string;
  description:string;
  expected_expenditure:number;
  irrigation_type:string;
}