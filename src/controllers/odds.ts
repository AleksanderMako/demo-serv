import {
  // eslint-disable-next-line no-unused-vars
  Request, Response, NextFunction, Router, response,
} from 'express';
import { EntityManager } from 'typeorm';
import MatchOdds from '../entities/odds/odds';

export default class Odds {
    private router: Router;

    private manager:EntityManager;

    /**
     *
     */
    constructor(manager:EntityManager) {
      this.router = Router();
      this.manager = manager;
      this.initRoutes();
    }

    public initRoutes() {
      // eslint-disable-next-line no-unused-vars
      this.router.get('/', async (req: Request, res: Response, next: any) => {
        res.status(200).send(await this.manager.findOne(MatchOdds, {
          matchId: `${req.query.match_id}`,
        }));
      });

      this.router.get('/matches', async (req: Request, res: Response) => {
        res.status(200).send(await this.manager.query('SELECT * FROM fixture'));
      });
    }

    public getRouter() {
      return this.router;
    }
}
