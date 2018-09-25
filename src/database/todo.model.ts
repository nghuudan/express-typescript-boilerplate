import { Sequelize, DataTypes } from 'sequelize';
import { TodoAttributes, TodoInstance } from '../interfaces/todo.interfaces';

export default (
  sequelize: Sequelize,
  dataTypes: DataTypes,
) => sequelize.define<TodoInstance, TodoAttributes>('todo', {
  title: {
    allowNull: false,
    defaultValue: '',
    type: dataTypes.STRING,
  },
  description: {
    defaultValue: '',
    type: dataTypes.STRING,
  },
  completed: {
    defaultValue: false,
    type: dataTypes.BOOLEAN,
  },
});
