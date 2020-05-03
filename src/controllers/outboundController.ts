import * as mongoose from 'mongoose';
import { OutboundSchema } from '../models/outbound.model';
import { Request, Response } from 'express';

const Outbound = mongoose.model('Outbound', OutboundSchema);

export class OutboundController{

    public addNewOutbound (req: Request, res: Response) {                
        let newOutbound = new Outbound(req.body);
    
        newOutbound.save((err, outbound) => {
            if(err){
                res.send(err);
            }    
            res.json(outbound);
        });
    }

    public getOutboundComms (req: Request, res: Response) {           
        Outbound.find({}, (err, outbound) => {
            if(err){
                res.send(err);
            }
            console.log(outbound);
            res.json(outbound);
        });
    }

    public getOutboundWithID (req: Request, res: Response) {           
        Outbound.findById(req.params.outboundId, (err, outbound) => {
            if(err){
                res.send(err);
            }
            res.json(outbound);
        });
    }

    public updateOutbound (req: Request, res: Response) {           
        Outbound.findOneAndUpdate({ _id: req.params.outboundId }, req.body, { new: true }, (err, outbound) => {
            if(err){
                res.send(err);
            }
            res.json(outbound);
        });
    }

    public deleteOutbound (req: Request, res: Response) {           
        Outbound.findByIdAndDelete({ _id: req.params.outboundId }, (err, outbound) => {
            if(err){
                res.send(err);
            }
            console.log(outbound);
            res.json({ message: 'Successfully deleted Outbound!'});
        });
    }
    
}