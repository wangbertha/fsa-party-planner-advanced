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
        })
    })
});

export const { 
    useGetPartiesQuery,
    useGetPartyQuery,
} = partyApi;