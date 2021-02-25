import db from './firebase/config';
// import { insertDoc } from './actions/insert';
// import { updateDoc, setDoc } from './actions/update';
// import { deleteDoc } from './actions/delete';

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
