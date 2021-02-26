# Firestore helpers for SQL developers

This is a firestore practice project.
Remember to rebuild the Node modules.

```
npm install
```

## How to use it

```ts
import db from './firebase/config';
import { insertDoc } from './helpers/insert';
import { updateDoc, setDoc } from './helpers/update';
import { deleteDoc } from './helpers/delete';
import { selectAll } from './helpers/select';

const usersRef = db.collection('users');
```

### Insert data

```ts
const user = {
    name: 'Susana',
    active: false,
    birthDate: 0,
    salary: 1950,
};

insertDoc(usersRef, user);
```

### Update data

The setDoc removes the content of the doc and replaces it with the new one.

```ts
updateDoc(usersRef, 'kXR4FPQaltbp120GpQaw', { active: false });

setDoc(usersRef, 'kXR4FPQaltbp120GpQaw', { active: false, edad: 44 });
```

### Delete data

```ts
deleteDoc(usersRef, 'kXR4FPQaltbp120GpQaw');
```

### Select data

“onSnapshot” do the same that “get”, but it is pending of any changes in the database through sockets.

```ts
usersRef.onSnapshot(selectAll);
```

> select \* from users

```ts
usersRef.get().then(selectAll);
```

-   #### Where clause

> select \* from users where salary <= 1800

```ts
usersRef.where('salary', '<=', 1800).get().then(selectAll);
```

> select \* from users where salary >= 1800 and salary <= 2300

```ts
usersRef
    .where('salary', '>=', 1800)
    .where('salary', '<=', 2300)
    .get()
    .then(selectAll);
```

> select \* from users where salary >= 1800 and active == true

For this combined query I need to create an index in Firestore, I do it by clicking on the link that appears in the console error or you can create it directly in Firestore.

```ts
usersRef
    .where('salary', '>=', 1800)
    .where('active', '==', true)
    .get()
    .then(selectAll);
```

-   #### OrderBy clause

> select \* from users orderBy name desc, salary asc

The orderBy clause if the field where you are ordering does not exist in a doc, excludes it from the data. If we have multiple orderBy we have to create an index.

```ts
usersRef.orderBy('name', 'desc').orderBy('salary').get().then(selectAll);
```

-   #### Pagination

The index.ts have an example of pagination.
