import { addDoc } from "firebase/firestore";

import {
  getFirestore,
  collection,
  getDocs
} from "firebase/firestore";

import app from "./config";

export const db = getFirestore(app);

export const obtenerResidentes = async () => {

  const querySnapshot = await getDocs(
    collection(db, "residentes")
  );

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

};

export const agregarResidente = async (residente) => {

  await addDoc(
    collection(db, "residentes"),
    residente
  );

};