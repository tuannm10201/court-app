import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_URL,
  prepareHeaders: (headers, { getState }) => {
    // const { token } = getState().other;
    const accessToken = 'BOSJ9ADT53II8SBQJHLARDD7IUQIYI';

    // if (token) headers.set('Authorization', token);
    headers.set('Access_token', accessToken);
    return headers;
  },
});

export default createApi({
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return result;
  },
  endpoints: () => ({}),
});
