import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppContextProvider } from "./contexts/AppContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
