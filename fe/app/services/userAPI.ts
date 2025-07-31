import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NODE_ENV ? 'http://localhost:8080' : 'http://localhost:8080' }),


    endpoints: (builder) => ({
        getUserById: builder.mutation({
            query: (id) => `users/${id}`,
        }),

        register: builder.mutation({
            query(body) {
                console.log('data', body)
                return {
                    url: `users`,
                    method: 'POST',
                    body,
                }
            },
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserByIdMutation, useRegisterMutation } = userApi