import cors from 'cors';

export const useCors = cors({
  methods: ['GET', 'HEAD'],
});
