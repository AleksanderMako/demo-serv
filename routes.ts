import { Router } from 'express';
import { Demo } from './controllers/demo';

export default class ApiRouter {
     private demo: Demo;

    // private FlightController: FlightController;
    // private ReservationController: ReservationController;
    private router: Router;

    constructor(demo:Demo) {
      if (!demo) {
        throw new Error('Api controller not specified');
      }

      this.demo = demo;
      // this.ReservationController = injectableReservationController;
      this.router = Router();
      this.initApiRoutes();
      console.log('INFO:Router class inited');
    }

    public getApiRouter() {
      return this.router;
    }

    private initApiRoutes() {
      this.router.use('/demo', this.demo.getRouter());
      // this.router.use("/flight", this.FlightController.getFlightControllerRouterObject());
      // this.router.use("/reservation", this.ReservationController.getReservationControllerRouterObject());
    }
}
