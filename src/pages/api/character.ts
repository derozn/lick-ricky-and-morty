import nc from 'next-connect';
import { useCors } from '@/server/middleware/cors';
import { characterController } from '@/server/controllers/character';

const charactersHandler = nc().use(useCors).get(characterController);

export default charactersHandler;
