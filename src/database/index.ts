import Sequelize from 'sequelize';
import { TodoAttributes, TodoInstance } from '../interfaces/todo.interfaces';

const sequelize = new Sequelize('test', 'root', 'test', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export const Todo = sequelize.import<TodoInstance, TodoAttributes>('./todo.model');

export default sequelize;
