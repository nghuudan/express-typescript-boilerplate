import { Todo } from '../database';
import { TodoInstance, TodoAttributes } from '../interfaces/todo.interfaces';

export const getAllTodos = () => Todo.findAll();

export const getTodoById = (id: number) => Todo.findOne({
  where: { id },
});

export const createTodo = (dto: TodoAttributes) => Todo.create({
  title: dto.title,
  description: dto.description,
  completed: Boolean(dto.completed),
}).then((todo: TodoInstance) => todo.get());

export const deleteTodo = (id: number) => Todo.findOne({
  where: { id },
}).then((todo: TodoInstance|null): any => {
  return todo ? todo.destroy().then(() => todo) : null;
});

export const updateTodo = (id: number, dto: TodoAttributes) => {
  const defaults = {
    title: dto.title,
    description: dto.description,
    completed: Boolean(dto.completed),
  };
  return Todo.findOrCreate({
    defaults,
    where: { id },
  }).spread((todo: TodoInstance|boolean): any => {
    if (todo === true || todo === false) {
      return todo;
    }
    return todo.update(defaults).then(() => todo);
  });
};
