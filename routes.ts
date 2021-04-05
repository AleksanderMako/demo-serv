import { Router } from 'express';
import Demo from './src/controllers/demo';
import Odds from './src/controllers/odds';

export default class ApiRouter {
     private demo: Demo;

     private oddsController:Odds;

    // private FlightController: FlightController;
    // private ReservationController: ReservationController;
    private router: Router;

    constructor(demo:Demo, oddsController:Odds) {
      if (!demo) {
        throw new Error('Api controller not specified');
      }

      if (!oddsController) {
        throw new Error('Odds controller not specified');
      }

      this.demo = demo;
      this.oddsController = oddsController;
      this.router = Router();
      this.initApiRoutes();
      console.log('INFO:Router class inited');
    }

    public getApiRouter() {
      return this.router;
    }

    private initApiRoutes() {
      this.router.use('/demo', this.demo.getRouter());
      this.router.use('/odds', this.oddsController.getRouter());
    }
}
