import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import "react-toastify/dist/ReactToastify.css";
import { app } from "./firebase.config.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store} app={app}>
    <App />
  </Provider>
);
