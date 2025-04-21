import fetchClient from '../api/fetchClient';

export const checkLogin = async () => {
    const res = await fetchClient('/auth/me', {
        method: 'GET',
    });

    if (!res.ok) throw new Error('Not authenticated');

    return await res.json();
};

export const loginUser = async (username, password) => {
    const res = await fetchClient('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};

export const logoutUser = async () => {
    const res = await fetchClient('/auth/logout', {
        method: 'POST'
    });
};

export const registerUser = async (username, password) => {
    const res = await fetchClient(`/auth/register`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};