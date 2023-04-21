import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Iusers } from "../../types/users";

export const usersApi = createApi({
  reducerPath: "api/users",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (build) => ({
    getUsers: build.query<Iusers[], number>({
      query: (limit: 8) => `users?limit${limit}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
