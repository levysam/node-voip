import {
  fields,
  order
} from '#src/domains/call/parameters/CallListParameter.js';
import { filter } from '#src/domains/call/filters/CallFilter.js';
import FilterMiddleware from '#src/middlewares/FilterMiddleware.js';
import RequestParamsMiddleware from '#src/middlewares/RequestParamsMiddleware.js';
import JwtMiddleware from '#src/middlewares/JwtMiddleware.js';
import { Router } from 'express';
import {
  CallDetailController,
} from '#src/domains/call/controllers/index.js';

const callRouter = Router();

callRouter.use(new RequestParamsMiddleware().process(fields, order));
callRouter.use(new FilterMiddleware().process(filter));

callRouter.get(
  '/:number',
  (req, res) => new CallDetailController().process(req, res)
);
export { callRouter };
