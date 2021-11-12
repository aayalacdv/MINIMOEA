import { NextFunction } from 'express';
import { SchemaTypes } from 'mongoose';
import { Document, Schema,  model, SchemaType, } from 'mongoose'
import { getPersonsabyId, modifyPersonbyId } from '../services/persona.service';
import { Persona } from './persona.model';


export interface Seguimiento extends Document{
    persona : Persona['_id']; 
    fecha : Date; 
    fiebre : boolean; 
    tosContinuada: boolean; 
    tosPersistente: boolean; 
    dificultadRespiratoria : boolean; 
    malestarGeneral: boolean; 

}


const seguimientoSchema = new Schema<Seguimiento>(
    {
        persona : { type : SchemaTypes.ObjectId, unique : false, ref: 'Persona'}, 
        fecha : { type : Date }, 
        fiebre: { type: Boolean},
        tosContinuada: { type: Boolean},
        tosPersistente: { type: Boolean},
        dificultadRespiratoria: { type: Boolean},
        malestarGeneral: { type: Boolean},
    }
)


seguimientoSchema.post('save', async function() {
    const seg = this as Seguimiento; 
    const person = await getPersonsabyId( seg.persona ); 
    if(person){
        person.seguimientos.push(seg._id); 
        await modifyPersonbyId(person._id, person); 
        return;  
    }
    
    return;  

})


export const SeguimientoModel = model('Seguimiento', seguimientoSchema); 