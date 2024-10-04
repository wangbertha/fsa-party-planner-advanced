import { useNavigate, useParams } from "react-router-dom";
import { useDeletePartyMutation, useGetPartyQuery } from "./partySlice";

export default function PartyDetails() {
  const { id } = useParams();
  const { data: party, isLoading, error } = useGetPartyQuery(id);

  const [deleteParty] = useDeletePartyMutation();

  const navigate = useNavigate();

  function removeParty(id) {
    deleteParty(id);
    navigate("/");
  }

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
          <button onClick={() => removeParty(party.id)}>Delete Party</button>
        </>
      ) : (
        <p>There is no selected party</p>
      )}
    </article>
  );
}
