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

export type TotalCaloriesWithNutirion = {
  items: Nutrition[];
  total_calories: number;
};

export type CaloriesPerIngredient = {
  name: string;
  calories: number;
};

export type CaloriesDataType = {
  caloriesPerIngredient: Array<CaloriesPerIngredient>;
  total_calories: number;
};
