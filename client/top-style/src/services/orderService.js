import fetchClient from '../api/fetchClient';

export const getOrder = async () => {
    const res = await fetchClient(`/orders/mine`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
}