import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const basename = "/Library-Project";

createRoot(document.getElementById("root")).render(
  <BrowserRouter
    basename={basename}
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <App />
  </BrowserRouter>
);
