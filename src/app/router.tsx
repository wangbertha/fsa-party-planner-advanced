import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import PartyList from "../features/parties/PartyList";
import PartyForm from "../features/parties/PartyForm";
import PartyDetails from "../features/parties/PartyDetails";

const router = createBrowserRouter([
  // Landing Page -> List of all Parties
  {
    path: "/",
    element: <Layout />,
    // Form Page -> Submit new party
    children: [
      {
        path: "/",
        element: <PartyList />,
      },
      {
        path: "/parties",
        element: <PartyList />,
      },
      {
        path: "/form",
        element: <PartyForm />,
      },
      // Specific Page -> Specified Party
      {
        path: "/parties/:id",
        element: <PartyDetails />,
      },
    ],
  },
]);

// "localhost:4000/" --> Layout and PartyList Component
// "localhost:4000/parties" --> Layout and PartyList Component
// "localhost:4000/form" --> Layout and PartyForm Component
// "localhost:4000/parties/${partyid}" --> Layout and PartyDetails components

export default router;
