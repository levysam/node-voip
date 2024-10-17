import { Router } from 'express';
import { healthRouter } from './health.js';
import { callRouter } from './call.js';

export const indexRoute = Router();

indexRoute.use('/', healthRouter);

indexRoute.use('/call', callRouter);
