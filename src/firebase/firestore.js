import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

import app from "./config";

export const db = getFirestore(app);

// Obtener residentes
export const obtenerResidentes = async () => {

  const querySnapshot = await getDocs(
    collection(db, "residentes")
  );

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

};

// Agregar residente
export const agregarResidente = async (residente) => {

  await addDoc(
    collection(db, "residentes"),
    residente
  );

};

// Eliminar residente
export const eliminarResidente = async (id) => {

  await deleteDoc(
    doc(db, "residentes", id)
  );

};