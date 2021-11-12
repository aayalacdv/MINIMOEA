import logger from "../logging/logger";
import { Persona, PersonaModel } from "../models/persona.model";

//get all the persons
export async function getPersonas() {
  return PersonaModel.find().catch((error: any) => {
    logger.error("Error finding all persons", error);
  });
}

//get a specific person
export async function getPersonsabyId(id: string) {
  return PersonaModel.findById(id)
    .populate("seguimientos")
    .catch((error: any) => {
      logger.error("Error finding person with id:" + id, error);
    });
}

//modify a person
export async function modifyPersonbyId(id: string, persona: Persona) {
  return PersonaModel.findByIdAndUpdate(id, persona, { new: true }).catch(
    (error: any) => {
      logger.error("Error updating person with id " + id, error);
    }
  );
}
