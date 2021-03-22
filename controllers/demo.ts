import { Request, Response, NextFunction, json } from "express";
import { Router } from "express";
// import { relative } from "path";

export class Demo{

    private router:Router;
    
    /**
     *
     */
    constructor() {
        
        this.router = Router();
        this.initRoutes()
    }

    public initRoutes(){
        this.router.get("/test",async( req: Request, res: Response, next: any)=>{
            console.log("Here")
            return res.send("Hello")
        });
    }

    public getRouter(){
        return this.router;
    }
}