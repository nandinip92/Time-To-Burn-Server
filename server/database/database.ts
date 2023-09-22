import { Dialect, Sequelize } from "sequelize";
// TODO: This should be external config

export let sequelize = new Sequelize("sqlite::memory:");
