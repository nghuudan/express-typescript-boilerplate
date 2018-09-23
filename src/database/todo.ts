import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => sequelize.define('todo', {
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
