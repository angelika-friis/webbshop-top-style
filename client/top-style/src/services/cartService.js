import fetchClient from '../api/fetchClient';

export const getCart = async () => {
    const res = await fetchClient(`/cart`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
}

export const addToCart = async (id, size) => {
    const res = await fetchClient(`/cart`, {
        method: 'POST',
        body: JSON.stringify({ productId: id, size })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
}

export const removeFromCart = async (id) => {
    const res = await fetchClient(`/cart/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
}

export const makeOrder = async () => {
    const res = await fetchClient(`/orders`, {
        method: 'POST'
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
}