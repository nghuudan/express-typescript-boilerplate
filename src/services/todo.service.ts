import { Todo } from '../database';
import TodoDto from './todo.dto';

export const getAllTodos = () => Todo.findAll();

export const getTodoById = (id: number) => Todo.findOne({
  where: { id },
});

export const createTodo = (dto: TodoDto) => Todo.create({
  title: dto.title,
  description: dto.description,
  completed: Boolean(dto.completed),
}).then((todo: any) => todo.get());

export const deleteTodo = (id: number) => Todo.findOne({
  where: { id },
}).then((todo: any) => todo ? todo.destroy().then(() => todo) : null);

export const updateTodo = (id: number, dto: TodoDto) => {
  const defaults = {
    title: dto.title,
    description: dto.description,
    completed: Boolean(dto.completed),
  };
  return Todo.findOrCreate({
    defaults,
    where: { id },
  }).spread((todo: any) => todo.update(defaults).then(() => todo));
};
