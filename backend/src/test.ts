import { Document, Schema, model, SchemaTypes } from "mongoose";
import { connect } from "./connection/connect";

interface Foto extends Document {
  fotografo: string;
}

interface Fotografo extends Document {
  name: string;
  fotos: string[];
}

const fotoSchema = new Schema({
  fotografo: { type: SchemaTypes.ObjectId, unique: false, ref: "Fotografo" },
});
const fotografoSchema = new Schema({
  name: { type: String, unique: false },
  fotos: [{ type: SchemaTypes.ObjectId, unique: true, ref: "Foto" }],
});

const FotoModel = model("Foto", fotoSchema);
const FotografoModel = model("Fotografo", fotografoSchema);

async function main() {
  await connect();
  // const fotografo1  = {
  //     name: 'Marlon'
  // };

  // const fotografo2 = {
  //     name: 'Pepe'
  // }

  // const f = await FotografoModel.create(fotografo1).catch( (error : any) => {
  //     console.log('Error :(');
  // });

  // const foto = {
  //     fotografo : f._id
  // }

  // const f1 = await FotoModel.create(foto).catch((error : any) => {
  //     console.log("Error :(");
  // })

  console.log("FOTOGRAFOS");
  console.log(await FotografoModel.find());
  console.log("FOTOS");
  console.log(await FotoModel.find());

  const foto = await FotoModel.findById("618a9b115ac80c1df6970b62")
    .populate("fotografo")
    .catch((error: any) => {
      console.log("Error");
    });

  const fotografo = await FotografoModel.findByIdAndUpdate(
     "618a9b115ac80c1df6970b60",
    { fotos: ["618a9b115ac80c1df6970b62"] }
  ).catch( (error : any) => {
      console.log("Error"); 
  });

  console.log(fotografo); 

  console.log(foto);
}

main();
