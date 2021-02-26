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
 ! onSnapshot is pending any change in the database through sockets
 */
// usersRef.onSnapshot(selectAll);

/*
? select * from users
*/
// usersRef.get().then(selectAll);

/*
? select * from users where salary <= 1800
*/
// usersRef.where('salary', '<=', 1800).get().then(selectAll);

/*
? select * from users where salary >= 1800 and salary <= 2300
! for this compound query I need to create an index in Firestore, I do it by clicking on the link that appears in the console error
*/
// usersRef
//     .where('salary', '>=', 1800)
//     .where('active', '==', true)
//     .get()
//     .then(selectAll);
