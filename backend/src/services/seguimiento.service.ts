import logger from "../logging/logger";
import { SeguimientoModel, Seguimiento } from "../models/seguimiento.model";

export async function getSeguimiento(id: string) {
  return SeguimientoModel.findById(id).catch((error: any) => {
    logger.error("Error finding seguimiento with id: " + id);
  });
}

export async function createSeguimiento(seguimiento: Seguimiento) {
  return SeguimientoModel.create(seguimiento).catch((error: any) => {
    logger.error("Error creating seguimiento", error);
  });
}

export async function getSeguimientos() {
    return SeguimientoModel.find().catch((error: any) => {
        logger.error("Error finding seguimientos"); 
    })
    
}