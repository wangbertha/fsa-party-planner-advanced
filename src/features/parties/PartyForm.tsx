import { useState } from "react";
import { useAddPartyMutation } from "./partySlice";

export default function PartyForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  const [addParty, { isLoading }] = useAddPartyMutation();

  function submitForm(e) {
    e.preventDefault();
    addParty({
      date: new Date(date).toISOString(),
      description,
      location,
      name,
    });
    setDate("");
    setDescription("");
    setLocation("");
    setName("");
  }

  return (
    <form onSubmit={submitForm}>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button>Submit</button>
      {isLoading && <p>Sending party to API...</p>}
    </form>
  );
}
