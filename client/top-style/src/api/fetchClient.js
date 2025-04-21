const BASE_URL = 'http://localhost:5050/api';

const fetchClient = async (url, options = {}, retry = true) => {
  const config = {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  };

  try {
    const res = await fetch(BASE_URL + url, config);
    
    if (res.ok || !retry) {
      return res;
    }
    
    if (res.status === 401) {
      const refreshRes = await fetch(BASE_URL + '/auth/refresh', {
        method: 'POST',
        credentials: 'include',
      });
      
      if (refreshRes.ok) {
        return fetchClient(url, options, false);
      } else {
        throw new Error('Authentication failed');
      }
    }
    
    return res;
  } catch (error) {
    console.error('fetchClient error:', error);
    throw error;
  }
};

export default fetchClient;