type CaloriesByWeight = {
  "130lb": number;
  "155lb": number;
  "180lb": number;
  "205lb": number;
};
const CyclingCategories = [
  "Cycling, mountain bike, bmx",
  "Cycling, <10 mph, leisure bicycling",
  "Cycling, >20 mph, racing",
  "Cycling, 10-11.9 mph, light",
  "Cycling, 12-13.9 mph, moderate",
  "Cycling, 14-15.9 mph, vigorous",
  "Cycling, 16-19 mph, very fast, racing",
  "Unicycling",
  "Stationary cycling, very light",
  "Stationary cycling, light",
  "Stationary cycling, moderate",
  "Stationary cycling, vigorous",
  "Stationary cycling, very vigorous",
] as const;
const RunningCategories = [
  "Running, 5 mph (12 minute mile)",
  "Running, 5.2 mph (11.5 minute mile)",
  "Running, 6 mph (10 min mile)",
  "Running, 6.7 mph (9 min mile)",
  "Running, 7 mph (8.5 min mile)",
  "Running, 7.5mph (8 min mile)",
  "Running, 8 mph (7.5 min mile)",
  "Running, 8.6 mph (7 min mile)",
  "Running, 9 mph (6.5 min mile)",
  "Running, 10 mph (6 min mile)",
  "Running, 10.9 mph (5.5 min mile)",
  "Running, cross country",
  "Running, general",
  "Running, on a track, team practice",
  "Running, stairs, up",
  "Track and field (shot, discus)",
  "Track and field (high jump, pole vault)",
  "Track and field (hurdles)",
] as const;
const WalkingCategories = [
  "Walking, under 2.0 mph, very slow",
  "Walking 2.0 mph, slow",
  "Walking 2.5 mph",
  "Walking 3.0 mph, moderate",
  "Walking 3.5 mph, brisk pace",
  "Walking 4.0 mph, very brisk",
  "Walking 4.5 mph",
  "Walking 5.0 mph",
] as const;

const SwimmingCategories = [
  "Swimming laps, freestyle, fast",
  "Swimming laps, freestyle, slow",
  "Swimming backstroke",
  "Swimming breaststroke",
  "Swimming butterfly",
  "Swimming leisurely, not laps",
  "Swimming sidestroke",
  "Swimming synchronized",
  "Swimming, treading water, fast, vigorous",
  "Swimming, treading water, moderate",
  "Water aerobics, water calisthenics",
  "Water polo",
  "Water volleyball",
  "Water jogging",
  "Diving, springboard or platform",
] as const;

const AerobicsDancingCategories = [
  "Aerobics, low impact",
  "Aerobics, high impact",
  "Aerobics, step aerobics",
  "Aerobics, general",
  "Jazzercise",
  "Stretching, hatha yoga",
  "Mild stretching",
  "Instructing aerobic class",
  "Water aerobics",
  "Ballet, twist, jazz, tap",
  "Ballroom dancing, slow",
  "Ballroom dancing, fast",
  "Teach aerobic classes (& participate)",
] as const;

type CyclingCategoryType = (typeof CyclingCategories)[number];
type RunningCategoryType = (typeof RunningCategories)[number];
type WalkingCategoryType = (typeof WalkingCategories)[number];
type SwimmingCategoriyType = (typeof SwimmingCategories)[number];
type AerobicsDancingCategoryType = (typeof AerobicsDancingCategories)[number];

// type Cycling = {
//   CyclingCategoryType: CaloriesByWeight;
// };
type Cycling = Record<CyclingCategoryType, CaloriesByWeight | number>;
type Running = Record<RunningCategoryType, CaloriesByWeight | number>;
type Walking = Record<WalkingCategoryType, CaloriesByWeight | number>;
type Swimming = Record<SwimmingCategoriyType, CaloriesByWeight | number>;
type AerobicsDancing = Record<
  AerobicsDancingCategoryType,
  CaloriesByWeight | number
>;

export type ExercisesType = {
  Cycling: Cycling;
  Running: Running;
  Walking: Walking;
  Swimming: Swimming;
  AerobicsAndDancing: AerobicsDancing;
};

export type Activities =
  | "Cycling"
  | "Running"
  | "Walking"
  | "Swimming"
  | "AerobicsAndDancing";

export type ACTIVITY = Cycling | Running | Walking | Swimming | AerobicsDancing;

export type CaloriesPerWeight = {
  user_weight: string;
  calories_per_hour_for_exercise: ACTIVITY; //ACTIVITY | {};
};

export type TimeToBurn = {
  activity: keyof ACTIVITY;
  time_to_burn: {
    hours: number;
    minutes: number;
    seconds: number;
  };
};
