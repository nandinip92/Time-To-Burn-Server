export type Nutrition = {
  name: string;
  calories: number;
  serving_size_g: number;
  fat_total_g: number;
  fat_saturated_g: number;
  protein_g: number;
  sodium_mg: number;
  potassium_mg: number;
  cholesterol_mg: number;
  carbohydrates_total_g: number;
  fiber_g: number;
  sugar_g: number;
};

export type IngredientsNutrition = {
  items: Nutrition[];
};

export type ExerciseType = {
  name: string;
  calsPerHour: number;
};
export type CalBurnRate = {
  items: Nutrition[];
  total_calories: number;
};

export type TimeRequiresToBurn = {
  seconds: number;
  minutes: number;
  hours: number;
};
export type ExerciseTypeWithTime = {
  name: string;
  calsPerHour: number;
  time_to_burn_total_cals: TimeRequiresToBurn;
};
