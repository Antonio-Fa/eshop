import firestore from "../firestore";

export const getStock = async () => {
    const collectionRef = firestore.collection("store-items");
    const data = await collectionRef.get();
    const rawDocuments = data.docs;
    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));

    return cleanedDocuments;
};

export const getStockById = async (id) => {
    const collectionRef = firestore.collection("store-items");
    const documentRef = collectionRef.doc(id);
    const rawDoc = await documentRef.get();
    console.log(rawDoc.data());

    return { id: rawDoc.id, ...rawDoc.data() };
};

export const toggleFave = async (id, fave) => {
    const collectionRef = firestore.collection("store-items");
    const documentRef = collectionRef.doc(id);
    const rawDoc = await documentRef.get();
    const product = { ...rawDoc.data() };

    if (product.fave === true) {
        await documentRef.update({ fave: false });
    } else if (product.fave === false) {
        await documentRef.update({ fave: true });
    }
};
