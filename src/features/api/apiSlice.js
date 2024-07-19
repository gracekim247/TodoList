import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
  
export const apiSlice = createApi({
   reducerPath: 'api', //default
   //jsonplaceholder url doesn't have POST request
   baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
   tagTypes: ['FlashCards'],
   endpoints: (builder) => ({
      getFlashCards: builder.query({
         query: () => '/posts',  //url=jsonplaceholder.typicode.com/posts
         providesTags: ['FlashCards'],
      })

      //EXAMPLE//___.mutation --> actually changing data
      // addFlashCards: builder.mutation({
      //    query: (flashcard) => ({
      //       url: '/posts',
      //       method: 'POST', //POST is used when updating the whole record
      //       body: flashcard
      //    }),
      //    invalidatesTags: ['FlashCards']
      // })
   })
})

export const{
   useGetFlashCardsQuery, //use_____Query format
} = apiSlice