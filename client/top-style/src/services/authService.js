import fetchClient from '../api/fetchClient';

export const checkLogin = async () => {
    try {
        const res = await fetchClient('/auth/me', {
            method: 'GET',
        });

        if (!res.ok) {
            return { ok: false };
        }

        const data = await res.json();
        return { ok: true, user: data };
    } catch (err) {
        console.error("Auth check error:", err);
        return { ok: false };
    }
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