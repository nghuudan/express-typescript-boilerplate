import { Todo } from '../database';
import { TodoInstance, TodoAttributes } from '../interfaces/todo.interfaces';

export const getAllTodos = () => Todo.findAll();

export const getTodoById = (id: number) => Todo.findOne({
  where: { id },
});

export const createTodo = (attrs: TodoAttributes) => Todo.create({
  title: attrs.title,
  description: attrs.description,
  completed: Boolean(attrs.completed),
}).then((todo: TodoInstance) => todo.get());

export const deleteTodo = (id: number) => Todo.findOne({
  where: { id },
}).then((todo: TodoInstance|null): any => {
  return todo ? todo.destroy().then(() => todo) : null;
});

export const updateTodo = (id: number, attrs: TodoAttributes) => {
  const { title, description, completed } = attrs;

  return Todo.findOrCreate({
    defaults: { title, description, completed },
    where: { id },
  }).spread((todo: TodoInstance|boolean): any => {
    if (todo === true || todo === false) return todo;

    const merged = {
      title: title || todo.get('title'),
      description: description || todo.get('description'),
      completed: completed || todo.get('completed'),
    };

    return todo.update(merged).then(() => todo);
  });
};
