import nc from 'next-connect';
import { useCors } from '@/server/middleware/cors';
import { charactersController } from '@/server/controllers/characters';

const charactersHandler = nc().use(useCors).get(charactersController);

export default charactersHandler;
