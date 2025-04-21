import fetchClient from "../api/fetchClient";

export const getProducts = async () => {
    const res = await fetchClient('/products');
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
}