import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*w index.css ostylować root żeby odepchnąć komponenty od siebie hover skalowanie 0,8-1 */
