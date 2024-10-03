import { useParams } from "react-router-dom";
import { useGetPartyQuery } from "./partySlice";

export default function PartyDetails() {
  const { id } = useParams();
  const { data: party, isLoading, error } = useGetPartyQuery(id);

  if (isLoading) {
    return <p>Loading party...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <article>
      {party ? (
        <>
          <h1>{party.name}</h1>
          <p>{party.id}</p>
          <p>{party.date}</p>
          <p>{party.location}</p>
          <p>{party.description}</p>
        </>
      ) : (
        <p>There is no selected party</p>
      )}
    </article>
  );
}
