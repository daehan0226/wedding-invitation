import { db } from './firebaseApi';
import { setDoc, updateDoc, addDoc, doc, getDocs, collection } from 'firebase/firestore';

const collectionName = 'rsvp';

async function updateRsvp({ id_, newDoc }) {
    await setDoc(doc(db, collectionName, id_), newDoc);
}

async function createRsvp({ newDoc }) {
    await addDoc(collection(db, collectionName), { ...newDoc, hasDeleted: false });
}

async function getRsvp() {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map(doc => { return { id: doc.id, ...doc.data()}});
}


async function deleteRsvp(id_) {
    await updateDoc(doc(db, collectionName, id_), { hasDeleted: true, updatedDate: new Date() });
}


export { updateRsvp, createRsvp, deleteRsvp, getRsvp };
