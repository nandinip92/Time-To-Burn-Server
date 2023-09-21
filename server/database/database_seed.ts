import { Exercise } from "../models/exercise";

export const populateDummyData = async () => {
  // Populate environment with some dummy data in dev
  console.log("🍼 Populating database with dummy data");
  await Exercise.sync({ force: true });
  await Exercise.create({
    name: "Running",
    calsPerHour: 1074,
  });
  await Exercise.create({
    name: "Jump Rope",
    calsPerHour: 1070,
  });
  await Exercise.create({
    name: "Taekwondo",
    calsPerHour: 937,
  });
  await Exercise.create({
    name: "Swimming",
    calsPerHour: 892,
  });
  await Exercise.create({
    name: "Running up Stairs",
    calsPerHour: 819,
  });
  const exerciseCount = (await Exercise.findAll()).length;
  console.log(
    `${exerciseCount} exercise${exerciseCount !== 1 ? "s" : ""} added to table`
  );
};
