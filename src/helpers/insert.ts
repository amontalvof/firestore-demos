export const insertDoc = (collection: any, doc: any) => {
    // Insert doc into a specific collection
    collection
        .add(doc)
        .then((docRef: any) => {
            console.log(docRef);
        })
        .catch((err: any) => {
            console.error('error', err);
        });
};
