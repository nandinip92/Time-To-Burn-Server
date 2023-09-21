import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";
import { sequelize } from "../database/database";

export class Exercise extends Model<
  InferAttributes<Exercise>,
  InferCreationAttributes<Exercise>
> {
  declare name: string;
  declare calsPerHour: number;
}

Exercise.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calsPerHour: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Exercise",
    timestamps: false,
    sequelize: sequelize,
  }
);
