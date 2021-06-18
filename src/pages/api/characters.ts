import nc from 'next-connect';
import { useCors } from '@/server/middleware/cors';

export const charactersHandler = nc().use(useCors);
