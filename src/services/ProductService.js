import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

export const productAPI = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://fakestoreapi.com`
    }),
    tagTypes: ['Product'],
    endpoints: (build) => ({
        getAllProducts: build.query ({
            query: (arg) => {
                const {limit, category, sortBy} = arg;
                return{
                    url: `/products/${category}/`,
                params: {
                    limit,
                    sort: sortBy,
                },
                }
                
            },
            // refetchOnFocus: true,
            // providesTags: result => ['Product']
        }),
        getAllCategories: build.query ({
            query: () => ({
                url: `/products/categories`,
            }),
            // providesTags: result => ['Product']
        }),
        getSingleProduct: build.query ({
            query: (id) => ({
                url: `/products/${id}`,
            }),
            // providesTags: result => ['Product']
        }),
    })  
})

export const {useGetAllCategoriesQuery, useGetAllProductsQuery, useGetSingleProductQuery} = productAPI