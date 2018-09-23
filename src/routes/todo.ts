import { Request, Response, Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from '../services';
import { logger } from '../util';

const todoRouter = Router();

todoRouter.get('/todos', (_: Request, res: Response) => {
  getAllTodos()
    .then(todos => res.json(todos))
    .catch((err: Error) => {
      logger.error('Failed to get all todos:', err);
      res.sendStatus(500);
    });
});

todoRouter.get('/todos/:id', (req: Request, res: Response) => {
  getTodoById(Number(req.params.id))
    .then(todo => res.json(todo))
    .catch((err: Error) => {
      logger.error('Failed to get todo:', err);
      res.sendStatus(500);
    });
});

todoRouter.post('/todos', (req: Request, res: Response) => {
  createTodo({ ...req.body })
    .then(todo => res.json(todo))
    .catch((err: Error) => {
      logger.error('Failed to create todo:', err);
      res.sendStatus(500);
    });
});

todoRouter.put('/todos/:id', (req: Request, res: Response) => {
  updateTodo(Number(req.params.id), req.body)
    .then(todo => res.json(todo))
    .catch((err: Error) => {
      logger.error('Failed to update todo:', err);
      res.sendStatus(500);
    });
});

todoRouter.delete('/todos/:id', (req: Request, res: Response) => {
  deleteTodo(Number(req.params.id))
    .then(todo => res.json(todo))
    .catch((err: Error) => {
      logger.error('Failed to delete todo:', err);
      res.sendStatus(500);
    });
});

export default todoRouter;
