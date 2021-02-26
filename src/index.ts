import db from './firebase/config';
// import { insertDoc } from './helpers/insert';
// import { updateDoc, setDoc } from './helpers/update';
// import { deleteDoc } from './helpers/delete';
import { selectAll } from './helpers/select';

const usersRef = db.collection('users');

let lastDocument: any = null;
let firstDocument: any = null;

// btn Previous
const btnPrevious = document.createElement('button');
btnPrevious.innerText = 'Previous Page';
document.body.appendChild(btnPrevious);

btnPrevious.addEventListener('click', () => {
    const query = usersRef.orderBy('name').endBefore(firstDocument);
    query
        .limit(3)
        .get()
        .then((snap) => {
            firstDocument = snap.docs[0] || null;
            lastDocument = snap.docs[snap.docs.length - 1] || null;
            selectAll(snap);
        });
});

// btn Next
const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.appendChild(btnNext);

btnNext.addEventListener('click', () => {
    const query = usersRef.orderBy('name').startAfter(lastDocument);
    query
        .limit(3)
        .get()
        .then((snap) => {
            firstDocument = snap.docs[0] || null;
            lastDocument = snap.docs[snap.docs.length - 1] || null;
            selectAll(snap);
        });
});

btnNext.click();
