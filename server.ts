import * as dotenv from 'dotenv';
import { Application } from 'express';
import Routes from './routes';
import App from './app';
// eslint-disable-next-line import/extensions
import Demo from './src/controllers/demo';

dotenv.config({ path: '.env' });

export default class Server {
    private application: Application;

    private demo:Demo;

    constructor() {
      this.demo = new Demo();
      // this.FlightController = new FlightController();
      // this.ReservationController = new ReservationController();
      const apiRoutes = new Routes(this.demo);
      this.application = new App(apiRoutes).getApp();
      this.application.set('port', 5000);
      console.log('INFO:Init method completed');

      console.log(`INFO:API PORT :${4000}`);
    }

    public startListening() {
      this.application.listen(5000);
      console.log('app started listening ');
    }

    public getApplication() {
      return this.application;
    }
}
