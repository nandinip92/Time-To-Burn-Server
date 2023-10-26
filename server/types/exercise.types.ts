type CaloriesByWeight = {
  "130lb": number;
  "150lb": number;
  "180lb": number;
  "205lb": number;
};
type Cycling = {
  "Cycling, mountain bike, bmx": CaloriesByWeight;
  "Cycling, <10 mph, leisure bicycling": CaloriesByWeight;
  "Cycling, >20 mph, racing": CaloriesByWeight;
  "Cycling, 10-11.9 mph, light": CaloriesByWeight;
  "Cycling, 12-13.9 mph, moderate": CaloriesByWeight;
  "Cycling, 14-15.9 mph, vigorous": CaloriesByWeight;
  "Cycling, 16-19 mph, very fast, racing": CaloriesByWeight;
  Unicycling: CaloriesByWeight;
  "Stationary cycling, very light": CaloriesByWeight;
  "Stationary cycling, light": CaloriesByWeight;
  "Stationary cycling, moderate": CaloriesByWeight;
  "Stationary cycling, vigorous": CaloriesByWeight;
  "Stationary cycling, very vigorous": CaloriesByWeight;
};

type Running = {
  "Running, 5 mph (12 minute mile)": CaloriesByWeight;
  "Running, 5.2 mph (11.5 minute mile)": CaloriesByWeight;
  "Running, 6 mph (10 min mile)": CaloriesByWeight;
  "Running, 6.7 mph (9 min mile)": CaloriesByWeight;
  "Running, 7 mph (8.5 min mile)": CaloriesByWeight;
  "Running, 7.5mph (8 min mile)": CaloriesByWeight;
  "Running, 8 mph (7.5 min mile)": CaloriesByWeight;
  "Running, 8.6 mph (7 min mile)": CaloriesByWeight;
  "Running, 9 mph (6.5 min mile)": CaloriesByWeight;
  "Running, 10 mph (6 min mile)": CaloriesByWeight;
  "Running, 10.9 mph (5.5 min mile)": CaloriesByWeight;
  "Running, cross country": CaloriesByWeight;
  "Running, general": CaloriesByWeight;
  "Running, on a track, team practice": CaloriesByWeight;
  "Running, stairs, up": CaloriesByWeight;
  "Track and field (shot, discus)": CaloriesByWeight;
  "Track and field (high jump, pole vault)": CaloriesByWeight;
  "Track and field (hurdles)": CaloriesByWeight;
};
type Walking = {
  "Walking, under 2.0 mph, very slow": CaloriesByWeight;
  "Walking 2.0 mph, slow": CaloriesByWeight;
  "Walking 2.5 mph": CaloriesByWeight;
  "Walking 3.0 mph, moderate": CaloriesByWeight;
  "Walking 3.5 mph, brisk pace": CaloriesByWeight;
  "Walking 4.0 mph, very brisk": CaloriesByWeight;
  "Walking 4.5 mph": CaloriesByWeight;
  "Walking 5.0 mph": CaloriesByWeight;
};
type Swimming = {
  "Swimming laps, freestyle, fast": CaloriesByWeight;
  "Swimming laps, freestyle, slow": CaloriesByWeight;
  "Swimming backstroke": CaloriesByWeight;
  "Swimming breaststroke": CaloriesByWeight;
  "Swimming butterfly": CaloriesByWeight;
  "Swimming leisurely, not laps": CaloriesByWeight;
  "Swimming sidestroke": CaloriesByWeight;
  "Swimming synchronized": CaloriesByWeight;
  "Swimming, treading water, fast, vigorous": CaloriesByWeight;
  "Swimming, treading water, moderate": CaloriesByWeight;
  "Water aerobics, water calisthenics": CaloriesByWeight;
  "Water polo": CaloriesByWeight;
  "Water volleyball": CaloriesByWeight;
  "Water jogging": CaloriesByWeight;
  "Diving, springboard or platform": CaloriesByWeight;
};
type AerobicsDancing = {
  "Aerobics, low impact": CaloriesByWeight;
  "Aerobics, high impact": CaloriesByWeight;
  "Aerobics, step aerobics": CaloriesByWeight;
  "Aerobics, general": CaloriesByWeight;
  Jazzercise: CaloriesByWeight;
  "Stretching, hatha yoga": CaloriesByWeight;
  "Mild stretching": CaloriesByWeight;
  "Instructing aerobic class": CaloriesByWeight;
  "Water aerobics": CaloriesByWeight;
  "Ballet, twist, jazz, tap": CaloriesByWeight;
  "Ballroom dancing, slow": CaloriesByWeight;
  "Ballroom dancing, fast": CaloriesByWeight;
  "Teach aerobic classes (& participate)": CaloriesByWeight;
};
export type ExercisesType = {
  Cycling: Cycling;
  Running: Running;
  Walking: Walking;
  Swimming: Swimming;
  AerobicsAndDancing: AerobicsDancing;
};

export type ACTIVITIES =
  | "Cycling"
  | "Running"
  | "Walking"
  | "Swimming"
  | "AerobicsAndDancing";

export type ACTIVITY = Cycling | Running | Walking | Swimming | AerobicsDancing;
