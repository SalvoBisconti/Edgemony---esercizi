const { MongoClient } = require("mongodb");
const url = "mongodb+srv://Salvo:ciao123@cluster0.xtllcsv.mongodb.net/";
const client = new MongoClient(url);

const studentsObj = [
  {
    nome: "Harry",
    cognome: "Potter",
    matricola: "0001",
    corsi: ["Uso della magia", "Abilità magiche"],
    esami_da_sostenere: ["Emozioni", "Rettilofonia"],
  },
  {
    nome: "Hermione",
    cognome: "Granger",
    matricola: "0002",
    corsi: ["Effetti magici", "Abilità magiche"],
    esami_da_sostenere: ["Prior incanto", "Metamorfomagus"],
  },
  {
    nome: "Draco",
    cognome: "Malfoy",
    matricola: "0003",
    corsi: ["Arti oscure", "Pozioni"],
    esami_da_sostenere: ["Marchio nero", "Veritaserum"],
  },
  {
    nome: "Ron",
    cognome: "Weasley",
    matricola: "0004",
    corsi: ["Abilità magiche", "Pozioni"],
    esami_da_sostenere: ["Chiaroveggenza", "Pozioni d'amore"],
  },
  {
    nome: "Neville",
    cognome: "Paciock",
    matricola: "0005",
    corsi: ["Uso della magia", "Effetti magici"],
    esami_da_sostenere: ["Limiti", "Voto infrangibile"],
  },
  {
    nome: "Da eliminare",
    cognome: "Da eliminare",
    matricola: "0006",
    corsi: "",
    esami_da_sostenere: "",
  },
];

const coursesObj = [
  {
    nome: "Abilità magiche",
    materie: ["Rettilofonia", "Chiaroveggenza", "Animagus", "Metamorfomagus"],
    docente: "Remus Lupin",
  },
  {
    nome: "Arti oscure",
    materie: ["Marchio nero", "Inferius"],
    docente: "Severus Piton",
  },
  {
    nome: "Uso della magia",
    materie: ["Limiti", "Emozioni"],
    docente: "Minerva McGranitt",
  },
  {
    nome: "Pozioni",
    materie: [
      "Felix Felicis",
      "Pozioni d'amore",
      "Pozione polisucco",
      "Veritaserum",
    ],
    docente: "Alastor Moody",
  },
  {
    nome: "Effetti magici",
    materie: ["Volo infrangibile", "Prior Incantatio"],
    docente: "Sibilla Cooman",
  },
];

async function create() {
  try {
    const database = client.db("school");
    const students = database.collection("students");
    const courses = database.collection("courses");

    //INSERIMENTO DATI IN COLLECTION
    const student = await students.insertMany(studentsObj);
    const course = await courses.insertMany(coursesObj);
    console.log(student + course);

    //MOSTRARE UN RECORD CHE RISPETTA UNA CONDIZIONE
    const filteredStudent = await students
      .find({ matricola: "0001" })
      .toArray();
    console.log("Studente ricercato =>", filteredStudent);

    //     //AGGIORNARE RECORD
    //     const update = await students.updateOne(
    //       { matricola: "0004" },
    //       { $set: { esami_da_sostenere: ["Animagus", "Pozioni d'amore"] } }
    //     );
    //     console.log("Aggiornamento =>", update);

    //     //ELIMINARE RECORD
    //     const deleteResult = await students.deleteOne({ matricola: "0006" });
    //     console.log("Studente eliminato =>", deleteResult);
  } finally {
    await client.close();
  }
}
create().catch(console.dir);
