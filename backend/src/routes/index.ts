import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
const routes = Router();

appointmentsRouter.use(ensureAuthenticated);

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;