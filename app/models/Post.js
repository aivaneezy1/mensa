import mongoose from "mongoose";

const PostOwnerSchema = new mongoose.Schema({
  userId: { type: String },
});

const ModelSelectedSchema = new mongoose.Schema({
  model: { type: String },
  color: { type: String },
});

const DatiPersonaliSchema = new mongoose.Schema({
  image: { type: String },
  nome: { type: String },
  cognome: { type: String },
  email: { type: String },  
  telefono: { type: Number },
  indirizzo: { type: String },
  codicePostale: { type: String },
  city: { type: String },
  dataNascita: { type: String },
  luogoNascita: { type: String },
  gender: { type: String },
  nationality: { type: String },
  statoCivili: { type: String },
  patente: { type: String },
  sitoWeb: { type: String },
  linkin: { type: String },
  test: { type: String },
});

const CompAndLangSchema = new mongoose.Schema({
  competenza: [{ competenza: String, livello: String }],
  lingua: [{ competenza: String, livello: String }],
});
const ProfileSchema = new mongoose.Schema({
  data: { type: String },
});

const BgProfessionalSchema = new mongoose.Schema({
  /*istruzione */
  istruzioneData: [
    {
      data: String,
      istitute: String,
      city: String,
      dataInizio: String,
      dataInizioAnno: String,
      dataFine: String,
      dataFineAnno: String,
      content: String,
    },
  ],

  /*Esperienze */
  esperienzeData: [
    {
      data: String,
      istitute: String,
      city: String,
      dataInizio: String,
      dataInizioAnno: String,
      dataFine: String,
      dataFineAnno: String,
      content: String,
    },
  ],
});

const CurriculumSchema = new mongoose.Schema(
  {
    postOwner: { type: PostOwnerSchema },
    cardModel: { type: ModelSelectedSchema },
    datiPersonali: { type: DatiPersonaliSchema },
    compAndLang: { type: CompAndLangSchema },
    profile: { type: ProfileSchema },
    bgProfessional: { type: BgProfessionalSchema },
  },
  { timestamps: true }
);

const CurriculumModel =
  mongoose.models.curriculum || mongoose.model("curriculum", CurriculumSchema);

export default CurriculumModel;
