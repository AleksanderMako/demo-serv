import {
  // eslint-disable-next-line no-unused-vars
  Request, Response, NextFunction, Router,
} from 'express';

// import { relative } from "path";

export default class Demo {
    private router:Router;

    /**
     *
     */
    constructor() {
      this.router = Router();
      this.initRoutes();
    }

    public initRoutes() {
      // eslint-disable-next-line no-unused-vars
      this.router.get('/test', async (req: Request, res: Response, next: any) => res.send('Hello'));
    }

    public getRouter() {
      return this.router;
    }
}
