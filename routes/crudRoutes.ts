import { Router } from 'express';
import { createItem, getItem, updateItem, deleteItem } from '../controllers/itemController';

const router = Router();

// Create
router.post('/items', createItem);

// Read
router.get('/items/:id', getItem);

// Update
router.put('/items/:id', updateItem);

// Delete
router.delete('/items/:id', deleteItem);

export default router;
