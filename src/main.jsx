import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/configure_store/NormalState.js";
import FirstRandering from "./components/FirstRandering.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <FirstRandering>
        <RouterProvider router={router}></RouterProvider>
      </FirstRandering>
    </Provider>
  </StrictMode>
);
