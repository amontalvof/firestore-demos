export const updateDoc = (collection: any, id: string, obj: object) => {
    collection.doc(id).update(obj);
};

// the set removes the content of the doc and replaces it with the new one
export const setDoc = (collection: any, id: string, obj: object) => {
    collection.doc(id).set(obj);
};
