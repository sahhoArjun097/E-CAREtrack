import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";


export const Context = createContext({
  isAuthenticated: false,
  isUser: {},
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUser, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isUser,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

// dfjro4r fewjf4 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
