import { Provider } from "react-redux";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import store from "./store/store";
import router from "./app/router";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
