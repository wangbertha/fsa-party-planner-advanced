import { useGetPartiesQuery } from "./partySlice";

export default function PartyList() {
  const { data: parties = [], isLoading, error } = useGetPartiesQuery();

  if (isLoading) {
    return <p>Loading parties...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!parties.length) {
    return <p>There are no parties :(</p>;
  }

  return (
    <ul>
      {parties.map((party) => (
        <li key={party.id}>{party.name}</li>
      ))}
    </ul>
  );
}
