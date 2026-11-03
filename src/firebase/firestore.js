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

// ====================================
// RESIDENTES
// ====================================

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

// ====================================
// PAGOS
// ====================================

export const obtenerPagos = async () => {

  const querySnapshot = await getDocs(
    collection(db, "pagos")
  );

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

};

export const agregarPago = async (pago) => {

  await addDoc(
    collection(db, "pagos"),
    pago
  );

};

// ====================================
// ADEUDOS
// ====================================

export const obtenerAdeudos = async () => {

  const querySnapshot = await getDocs(
    collection(db, "adeudos")
  );

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

};

export const agregarAdeudo = async (adeudo) => {

  await addDoc(
    collection(db, "adeudos"),
    adeudo
  );

};

// ====================================
// DASHBOARD
// ====================================

export const totalResidentes = async () => {

  const querySnapshot = await getDocs(
    collection(db, "residentes")
  );

  return querySnapshot.size;

};

export const totalPagos = async () => {

  const querySnapshot = await getDocs(
    collection(db, "pagos")
  );

  return querySnapshot.size;

};

export const totalAdeudos = async () => {

  const querySnapshot = await getDocs(
    collection(db, "adeudos")
  );

  return querySnapshot.size;

};

export const montoTotalPagos = async () => {

  const querySnapshot = await getDocs(
    collection(db, "pagos")
  );

  let total = 0;

  querySnapshot.forEach((doc) => {

    total += Number(doc.data().monto) || 0;

  });

  return total;

};

export const montoTotalAdeudos = async () => {

  const querySnapshot = await getDocs(
    collection(db, "adeudos")
  );

  let total = 0;

  querySnapshot.forEach((doc) => {

    total += Number(doc.data().monto) || 0;

  });

  return total;

};

export const obtenerPagosRecientes = async () => {

  const querySnapshot = await getDocs(
    collection(db, "pagos")
  );

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

};