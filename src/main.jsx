import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ParticlesBackground } from "./InteractiveBackground.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <App />
  <div className="relative" style={{ position: "relative", zIndex: -10 }}>
    <ParticlesBackground />
  </div>
</React.StrictMode>

);
