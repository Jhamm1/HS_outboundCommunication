import {Request, Response, NextFunction} from "express";
import { OutboundController } from "../controllers/outboundController";

export class Routes { 
    
    public outboundController: OutboundController = new OutboundController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // Outbound comms
        app.route('/outbound')
        .get(this.outboundController.getOutboundComms)
        // .get((req: Request, res: Response, next: NextFunction) => {
        //     // middleware
        //     console.log(`Request from: ${req.originalUrl}`);
        //     console.log(`Request type: ${req.method}`);            
        //     if(req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e'){
        //         res.status(401).send('You shall not pass!');
        //     } else {
        //         next();
        //     }                        
        // }, this.outboundController.getOutboundComms)        

        // POST endpoint
        .post(this.outboundController.addNewOutbound);

        // Outbound detail
        app.route('/outbound/:outboundId')
        // get specific outbound
        .get(this.outboundController.getOutboundWithID)
        .put(this.outboundController.updateOutbound)
        .delete(this.outboundController.deleteOutbound)

    }
}