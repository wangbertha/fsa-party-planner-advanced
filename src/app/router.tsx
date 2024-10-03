import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import PartyList from "../features/parties/PartyList";
import PartyForm from "../features/parties/PartyForm";

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
    ],
  },
]);

export default router;
