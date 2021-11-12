import { SeguimientoModel } from './models/seguimiento.model';
import config from 'config'; 
import express from 'express'; 
import cors from 'cors'; 
import log from './logging/logger'; 
import { connect } from './connection/connect';
import { routes } from '../routes/routes';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { deserializeUser } from './middleware/deserializeUser';
import { Persona, PersonaModel } from './models/persona.model';
import logger from './logging/logger';

const host = config.get<string>('host');
const port = config.get<number>('port'); 


const app = express(); 

app.use(cors()); 
app.use(morgan('combined')); 
app.use(cookieParser()); 
app.use(deserializeUser); 
app.use(express.json()); 
app.use(express.urlencoded({extended: false })); 

app.listen(port, host, () => {

    connect(); 
   // initDB(); 
    routes(app);
    log.info(`Listening at http://${host}:${port}`); 

})




async function initDB(){

   const axel : any = await PersonaModel.create({
        nombre: 'Axel', 
        dni: '39557889L', 
        telefono: '+74311412', 
        seguimientos : [], 
    }).catch((error : any) => {
        logger.error("error")
    }); 

   const david : any = await PersonaModel.create({
        nombre: 'david', 
        dni: '39599989L', 
        telefono: '+79991412', 
        seguimientos : [], 
    }).catch((error : any) => {
        logger.error("error")
    }); 

    const seg1 = await SeguimientoModel.create({
        persona: axel._id, 
        fecha: new Date(), 
        fiebre: false, 
        tosContinuada: false, 
        tosPersistente: false, 
        dificultadRespiratoria: false, 
        malestarGeneral: false
    }).catch((error: any) => {
        console.log("error"); 
    })

}