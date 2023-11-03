type CaloriesByWeight = {
  "130lb": number;
  "155lb": number;
  "180lb": number;
  "205lb": number;
};
type Cycling = {
  "Cycling, mountain bike, bmx": CaloriesByWeight | number;
  "Cycling, <10 mph, leisure bicycling": CaloriesByWeight | number;
  "Cycling, >20 mph, racing": CaloriesByWeight | number;
  "Cycling, 10-11.9 mph, light": CaloriesByWeight | number;
  "Cycling, 12-13.9 mph, moderate": CaloriesByWeight | number;
  "Cycling, 14-15.9 mph, vigorous": CaloriesByWeight | number;
  "Cycling, 16-19 mph, very fast, racing": CaloriesByWeight | number;
  Unicycling: CaloriesByWeight | number;
  "Stationary cycling, very light": CaloriesByWeight | number;
  "Stationary cycling, light": CaloriesByWeight | number;
  "Stationary cycling, moderate": CaloriesByWeight | number;
  "Stationary cycling, vigorous": CaloriesByWeight | number;
  "Stationary cycling, very vigorous": CaloriesByWeight | number;
};

type Running = {
  "Running, 5 mph (12 minute mile)": CaloriesByWeight | number;
  "Running, 5.2 mph (11.5 minute mile)": CaloriesByWeight | number;
  "Running, 6 mph (10 min mile)": CaloriesByWeight | number;
  "Running, 6.7 mph (9 min mile)": CaloriesByWeight | number;
  "Running, 7 mph (8.5 min mile)": CaloriesByWeight | number;
  "Running, 7.5mph (8 min mile)": CaloriesByWeight | number;
  "Running, 8 mph (7.5 min mile)": CaloriesByWeight | number;
  "Running, 8.6 mph (7 min mile)": CaloriesByWeight | number;
  "Running, 9 mph (6.5 min mile)": CaloriesByWeight | number;
  "Running, 10 mph (6 min mile)": CaloriesByWeight | number;
  "Running, 10.9 mph (5.5 min mile)": CaloriesByWeight | number;
  "Running, cross country": CaloriesByWeight | number;
  "Running, general": CaloriesByWeight | number;
  "Running, on a track, team practice": CaloriesByWeight | number;
  "Running, stairs, up": CaloriesByWeight | number;
  "Track and field (shot, discus)": CaloriesByWeight | number;
  "Track and field (high jump, pole vault)": CaloriesByWeight | number;
  "Track and field (hurdles)": CaloriesByWeight | number;
};
type Walking = {
  "Walking, under 2.0 mph, very slow": CaloriesByWeight | number;
  "Walking 2.0 mph, slow": CaloriesByWeight | number;
  "Walking 2.5 mph": CaloriesByWeight | number;
  "Walking 3.0 mph, moderate": CaloriesByWeight | number;
  "Walking 3.5 mph, brisk pace": CaloriesByWeight | number;
  "Walking 4.0 mph, very brisk": CaloriesByWeight | number;
  "Walking 4.5 mph": CaloriesByWeight | number;
  "Walking 5.0 mph": CaloriesByWeight | number;
};
type Swimming = {
  "Swimming laps, freestyle, fast": CaloriesByWeight | number;
  "Swimming laps, freestyle, slow": CaloriesByWeight | number;
  "Swimming backstroke": CaloriesByWeight | number;
  "Swimming breaststroke": CaloriesByWeight | number;
  "Swimming butterfly": CaloriesByWeight | number;
  "Swimming leisurely, not laps": CaloriesByWeight | number;
  "Swimming sidestroke": CaloriesByWeight | number;
  "Swimming synchronized": CaloriesByWeight | number;
  "Swimming, treading water, fast, vigorous": CaloriesByWeight | number;
  "Swimming, treading water, moderate": CaloriesByWeight | number;
  "Water aerobics, water calisthenics": CaloriesByWeight | number;
  "Water polo": CaloriesByWeight | number;
  "Water volleyball": CaloriesByWeight | number;
  "Water jogging": CaloriesByWeight | number;
  "Diving, springboard or platform": CaloriesByWeight | number;
};
type AerobicsDancing = {
  "Aerobics, low impact": CaloriesByWeight | number;
  "Aerobics, high impact": CaloriesByWeight | number;
  "Aerobics, step aerobics": CaloriesByWeight | number;
  "Aerobics, general": CaloriesByWeight | number;
  Jazzercise: CaloriesByWeight | number;
  "Stretching, hatha yoga": CaloriesByWeight | number;
  "Mild stretching": CaloriesByWeight | number;
  "Instructing aerobic class": CaloriesByWeight | number;
  "Water aerobics": CaloriesByWeight | number;
  "Ballet, twist, jazz, tap": CaloriesByWeight | number;
  "Ballroom dancing, slow": CaloriesByWeight | number;
  "Ballroom dancing, fast": CaloriesByWeight | number;
  "Teach aerobic classes (& participate)": CaloriesByWeight | number;
};
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
  userWeight: string;
  caloriesPerHour: ACTIVITY | {};
};
