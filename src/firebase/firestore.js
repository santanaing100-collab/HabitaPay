import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
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

export const actualizarResidente = async (
  id,
  datos
) => {

  await updateDoc(
    doc(db, "residentes", id),
    datos
  );

};

// Obtener pagos
export const obtenerPagos = async () => {

  const querySnapshot = await getDocs(
    collection(db, "pagos")
  );

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

};

// Agregar pago
export const agregarPago = async (pago) => {

  await addDoc(
    collection(db, "pagos"),
    pago
  );

};