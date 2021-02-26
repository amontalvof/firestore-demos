import db from './firebase/config';
// import { insertDoc } from './helpers/insert';
// import { updateDoc, setDoc } from './helpers/update';
// import { deleteDoc } from './helpers/delete';
import { selectAll } from './helpers/select';

const user = {
    name: 'Maria',
    active: true,
    birthDate: 0,
};

const usersRef = db.collection('users');

// insertDoc(usersRef, user);

// updateDoc(usersRef, 'kXR4FPQaltbp120GpQaw', { active: false });
// setDoc(usersRef, 'kXR4FPQaltbp120GpQaw', { active: false, edad: 44 });

// deleteDoc(usersRef, 'kXR4FPQaltbp120GpQaw');

/*
 * onSnapshot is pending any change in the database through sockets
 */
// usersRef.onSnapshot(selectAll);

usersRef.get().then(selectAll);
