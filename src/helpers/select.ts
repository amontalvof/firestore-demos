export const selectAll = (snapshot: any) => {
    const docs: any[] = [];
    snapshot.forEach((item: any) => {
        docs.push({
            id: item.id,
            ...item.data(),
        });
    });
    console.log(docs);
    return docs;
};
