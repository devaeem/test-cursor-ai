import { Request, Response } from 'express';

export const createItem = (req: Request, res: Response) => {
  // Logic to create an item
  res.send('Item created');
};

export const getItem = (req: Request, res: Response) => {
  // Logic to get an item by id
  res.send(`Item with id ${req.params.id}`);
};

export const updateItem = (req: Request, res: Response) => {
  // Logic to update an item by id
  res.send(`Item with id ${req.params.id} updated`);
};

export const deleteItem = (req: Request, res: Response) => {
  // Logic to delete an item by id
  res.send(`Item with id ${req.params.id} deleted`);
};
