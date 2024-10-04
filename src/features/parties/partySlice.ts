import api from "../../store/api";

const partyApi = api.injectEndpoints({
    endpoints: (build) => ({
        getParties: build.query({
            query: () => "events",
            transformResponse: (response) => response.data,
            transformErrorResponse: (response) => response.data.error,
            providesTags: ["Party"],
        }),
        getParty: build.query({
            query: (id) => "events/" + id,
            transformResponse: (response) => response.data,
            transformErrorResponse: (response) => response.data.error,
            providesTags: ["Party"],
        }),
        deleteParty: build.mutation({
            query: (id) => ({
                url: "events/" + id,
                method: "DELETE",
            }),
            invalidatesTags: ["Party"],
            transformErrorResponse: (response) => response.data.error,
        }),
        addParty: build.mutation({
            query: (party) => ({
                url: "events", 
                method: "POST",
                body: party,
            }),
            invalidatesTags: ["Party"],
        }),
    }),
});

export const { 
    useGetPartiesQuery,
    useGetPartyQuery,
    useDeletePartyMutation,
    useAddPartyMutation,
} = partyApi;