import { Instance } from 'sequelize';

export interface TodoAttributes {
  id?: number;
  title?: string;
  description?: string;
  completed?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface TodoInstance extends Instance<TodoAttributes> {
  dataValues: TodoAttributes;
}
