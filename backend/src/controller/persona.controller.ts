import { Request, Response } from "express";
import { Persona } from "../models/persona.model";
import { getPersonas, getPersonsabyId, modifyPersonbyId } from "../services/persona.service";


export async function getAllPersonasHandler( req: Request, res: Response){
    const persons = await getPersonas(); 
    res.status(200).send(persons); 
}

export async function getPersonaHandler( req: Request, res: Response){
    const { id } = req.params; 
    const persona = await getPersonsabyId(id as string); 
    if(persona) return res.status(200).send(persona); 
    res.status(404).send({message: 'Persona no encontrada'}); 

}

export async function modifyPersonaHandler( req: Request, res: Response){
    const persona = req.body as Persona; 
    const modified = await modifyPersonbyId( persona._id, persona); 
    if(modified) return res.status(201).send(modified); 
    res.status(404).send({message: 'Persona no encontrada'}); 
}