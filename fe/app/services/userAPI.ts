import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IHeader {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
}
const Header: IHeader = {
    "X-RapidAPI-Key": "6b365afe7cmsh5548dfde4720349p10e88bjsn3c9175ff3429",
    "X-RapidAPI-Host": "car-data.p.rapidapi.com",
};


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8080`,

        // prepareHeaders: (headers) => {
        //     headers.set("X-RapidAPI-Key", Header["X-RapidAPI-Key"]);
        //     headers.set("X-RapidAPI-Host", Header["X-RapidAPI-Host"]);

        //     return headers;
        // },
    }),



    endpoints: (builder) => ({
        getUserById: builder.mutation({
            query: (id) => `users/${id}`,
        }),

        register: builder.mutation({
            query(body) {

                return {
                    url: `users`,
                    method: 'POST',
                    body,
                }
            },
        }),

        authByGoogleOAuth: builder.mutation({
            query(body) {
                console.log('body', body)
                return {
                    url: `auth/google`,
                    method: 'POST',
                    body,
                }
            },
        }),
    }),
})

export const { useGetUserByIdMutation, useRegisterMutation, useAuthByGoogleOAuthMutation } = userApi