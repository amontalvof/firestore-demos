export const deleteDoc = (collection: any, id: string) => {
    collection
        .doc(id)
        .delete()
        .then(() => {
            console.log('Deleted');
        })
        .catch((err: any) => {
            console.error('error', err);
        });
};
