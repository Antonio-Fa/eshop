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

    return { id: rawDoc.id, ...rawDoc.data() };
};
