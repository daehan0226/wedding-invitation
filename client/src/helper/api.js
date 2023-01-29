import { db } from './firebaseApi';
import { setDoc, updateDoc, addDoc, doc, getDocs, collection, getDoc, query, where } from 'firebase/firestore';

const rsvpCollectionName = 'rsvp';
const userCollectionName = 'user';

async function updateRsvp({ id_, newDoc }) {
    await setDoc(doc(db, rsvpCollectionName, id_), newDoc);
}

async function createRsvp({ newDoc }) {
    try {
        await addDoc(collection(db, rsvpCollectionName), { ...newDoc, hasDeleted: false });
        return true
    } catch {
        return false
    }
}


async function createUser(userId) {
    try {
        await addDoc(collection(db, userCollectionName), { userId, isAdmin: false });
        return true
    } catch {
        return false
    }
}



async function upsertUser(userId) {
    try {
        let q = query(collection(db, userCollectionName), where("userId", "==", userId));
        const snapshot = await getDocs(q);
        if (snapshot.empty) {
            await createUser(userId)
        }
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}


async function getRsvp() {
  const snapshot = await getDocs(collection(db, rsvpCollectionName));
  return snapshot.docs.map(doc => { return { id: doc.id, ...doc.data()}});
}


async function deleteRsvp(id_) {
    await updateDoc(doc(db, rsvpCollectionName, id_), { hasDeleted: true, updatedDate: new Date() });
}


export { updateRsvp, createRsvp, deleteRsvp, getRsvp, upsertUser };
