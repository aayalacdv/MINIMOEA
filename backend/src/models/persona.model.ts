import { SchemaTypes } from 'mongoose';
import { Schema, model, Document} from 'mongoose';
import { Seguimiento } from './seguimiento.model';

export interface Persona extends Document{
    nombre : string; 
    dni : string; 
    telefono: string;  
    seguimientos : string[]; 

}

const personaSchema = new Schema<Persona>(
    {
        nombre : { type: String, required : true}, 
        dni: {type : String, unique: true, required: true}, 
        telefono: { type: String, unique: true, requiered: true}, 
        seguimientos: [ {type : SchemaTypes.ObjectId, ref: 'Seguimiento'}]
    }
)


export const PersonaModel = model('Persona', personaSchema); 


