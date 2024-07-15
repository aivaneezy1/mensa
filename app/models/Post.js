import mongoose from "mongoose";

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
  test: {type: String}
});

const CompAndLangSchema = new mongoose.Schema({
  competenza: { type: String },
  livello: { type: String },
  lingua: { type: String },
  range: { type: String },
});

const ProfileSchema = new mongoose.Schema({
  data: { type: String },
});

const BgProfessionalSchema = new mongoose.Schema({
  /*istruzione */
  istruzione: { type: String },
  istituto: { type: String },
  cityIstruzione: { type: String },
  dataInizioIstruzione: { type: String },
  dataInizioAnnoIstruzione: { type: String },
  datFineIstruzione: { type: String },
  dataFineAnnoIstruzione: { type: String },
  descrizioneIstruzione: { type: String },

  /*Esperienze */
  posizione: { type: String },
  azienda: { type: String },
  cityEspr: { type: String },
  dataInizioEspr: { type: String },
  dataInizioAnnoEspr: { type: String },
  datFineEspr: { type: String },
  dataFineAnnoEspr: { type: String },
  descrizioneEspr: { type: String },
});

const PostOwnerSchema = new mongoose.Schema({
  userId: {type:String}
})

const CurriculumSchema = new mongoose.Schema(
  {
    postOwner: {type:PostOwnerSchema},
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
