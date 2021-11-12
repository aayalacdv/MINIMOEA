import { Router } from 'express'; 
import { getAllPersonasHandler, getPersonaHandler, modifyPersonaHandler } from '../src/controller/persona.controller';
import { createSeguimientoHandler, getSeguimientoHandler, getSeguimientosHandler } from '../src/controller/seguimiento.controller';

const router = Router(); 

// get personas 
router.get('/persona', getAllPersonasHandler); 

// get persona por id (pupulate a seguimiento)
router.get('/persona/:id', getPersonaHandler);

// put persona
router.put('/persona', modifyPersonaHandler);

//get seguimientos
router.get('/seguimiento', getSeguimientosHandler); 

// get seguimiento por id 
router.get('/seguimiento/:id', getSeguimientoHandler);

// post seguimieto 
router.post('/seguimiento', createSeguimientoHandler); 

export default router; 