import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  User,
  Token,
  SignupUserDto,
  LoginUserDto,
  Page,
  RenamePageDto,
  UpdatePageStatusDto,
  AddBlockDto,
  DeleteBlockDto,
  UpdateBlockDto,
  ID,
} from "../types";

interface SignupUserResponse {
  user: User;
}

interface LoginUserResponse {
  token: Token;
  user: User;
}

interface RefreshUserResponse {
  user: User;
}

export const notionApi = createApi({
  reducerPath: "notionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://notion-api-4k8q.onrender.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Page"],
  endpoints: (builder) => ({
    signup: builder.mutation<SignupUserResponse, SignupUserDto>({
      query: (credentials) => ({
        url: "/users/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation<LoginUserResponse, LoginUserDto>({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    refresh: builder.query<RefreshUserResponse, void>({
      query: () => ({
        url: "/users/current",
        method: "GET",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),
    getPages: builder.query<Page[], void>({
      query: () => ({
        url: "/pages",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Page" as const, id: _id })),
              { type: "Page", id: "LIST" },
            ]
          : [{ type: "Page", id: "LIST" }],
    }),
    getPage: builder.query<Page, ID>({
      query: (id) => ({
        url: `/pages/${id}`,
        method: "GET",
      }),
      providesTags: (_, __, id) => [{ type: "Page", id }],
    }),
    addPage: builder.mutation<Page, unknown>({
      query: () => ({
        url: "/pages",
        method: "POST",
      }),
      invalidatesTags: [{ type: "Page", id: "LIST" }],
    }),
    deletePage: builder.mutation<Page, ID>({
      query: (id) => ({
        url: `/pages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Page", id: "LIST" }],
    }),
    renamePage: builder.mutation<Page, RenamePageDto>({
      query: ({ id, title }) => ({
        url: `/pages/${id}/title`,
        method: "PATCH",
        body: { title },
      }),
      invalidatesTags: (_, __, arg) => [{ type: "Page", id: arg.id }],
    }),
    updatePageStatus: builder.mutation<Page, UpdatePageStatusDto>({
      query: ({ id, favorite }) => ({
        url: `/pages/${id}/favorite`,
        method: "PATCH",
        body: { favorite },
      }),
      invalidatesTags: (_, __, arg) => [{ type: "Page", id: arg.id }],
    }),
    addBlock: builder.mutation<Page, AddBlockDto>({
      query: ({ id, type }) => ({
        url: `/pages/${id}/blocks`,
        method: "POST",
        body: { type },
      }),
      invalidatesTags: (_, __, arg) => [{ type: "Page", id: arg.id }],
    }),
    deleteBlock: builder.mutation<Page, DeleteBlockDto>({
      query: ({ pageId, blockId }) => ({
        url: `/pages/${pageId}/blocks/${blockId}`,
        method: "DELETE",
      }),
      invalidatesTags: (_, __, arg) => [{ type: "Page", id: arg.pageId }],
    }),
    updateBlock: builder.mutation<Page, UpdateBlockDto>({
      query: ({ pageId, blockId, type, payload }) => ({
        url: `/pages/${pageId}/blocks/${blockId}/${type}`,
        method: "PATCH",
        body: { payload },
      }),
      invalidatesTags: (_, __, arg) => [{ type: "Page", id: arg.pageId }],
    }),
  }),
});

export const {
  useGetPagesQuery,
  useAddPageMutation,
  useUpdatePageStatusMutation,
} = notionApi;
