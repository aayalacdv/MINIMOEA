import { Request, Response } from "express";
import { Seguimiento } from "../models/seguimiento.model";
import { getSeguimiento, createSeguimiento, getSeguimientos } from "../services/seguimiento.service";

export async function getSeguimientoHandler( req: Request, res: Response){
    const { id } = req.params; 
    const seguimiento = await getSeguimiento( id as string); 
    if(seguimiento) return res.status(200).send(seguimiento); 
    res.status(404).send({message: 'Seguimiento no encontrado'});  
}

export async function createSeguimientoHandler( req: Request, res: Response){
    const created = await createSeguimiento(req.body as Seguimiento); 
    if(created) return res.status(201).send(created); 

}

export async function getSeguimientosHandler( req: Request, res: Response){
    const seguimientos = await getSeguimientos(); 
    res.send(seguimientos).status(200); 
}

