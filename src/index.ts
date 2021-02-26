import db from './firebase/config';
// import { insertDoc } from './helpers/insert';
// import { updateDoc, setDoc } from './helpers/update';
// import { deleteDoc } from './helpers/delete';
import { selectAll } from './helpers/select';

const user = {
    name: 'Susana',
    active: false,
    birthDate: 0,
    salary: 1950,
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
! for this compound query I need to create an index in Firestore, I do it by clicking on the link that appears in the console error or you can create it directly in Firestore
*/
// usersRef
//     .where('salary', '>=', 1800)
//     .where('active', '==', true)
//     .get()
//     .then(selectAll);

/*
? select * from users orderBy name desc, salary asc
! the orderBy clause if the field where you are ordering does not exist in a doc, excludes it from the data. If we have multiple orderBy we have to create an index
*/
// usersRef.orderBy('name', 'desc').orderBy('salary').get().then(selectAll);
