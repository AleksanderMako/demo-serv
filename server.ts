import * as dotenv from 'dotenv';
import { Application } from 'express';
import { Connection } from 'typeorm';
import Routes from './routes';
import App from './app';
// eslint-disable-next-line import/extensions
import Demo from './src/controllers/demo';
import DataWorker from './src/workers/data_pull';
import Odds from './src/controllers/odds';

dotenv.config({ path: '.env' });

export default class Server {
    private application: Application;

    private conn:Connection;

    private demo:Demo;

    private seedService:DataWorker;

    private oddsController: Odds;

    constructor(c:Connection) {
      this.conn = c;
      this.demo = new Demo();
      this.oddsController = new Odds(this.conn.manager);
      const apiRoutes = new Routes(this.demo, this.oddsController);
      this.application = new App(apiRoutes).getApp();
      this.application.set('port', 5000);
      this.seedService = new DataWorker(this.conn);
      console.log('INFO:Init method completed');

      console.log(`INFO:API PORT :${5000}`);
    }

    public startListening() {
      this.application.listen(5000);
      console.log('app started listening ');
    }

    public getApplication() {
      return this.application;
    }

    public getSeedService() {
      return this.seedService;
    }
}
