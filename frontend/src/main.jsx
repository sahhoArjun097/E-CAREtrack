import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Create context with initial default values
export const Context = createContext({
  isAuthenticated: false,
  isUser: {},
});

// Wrapper component for Context Provider
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

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
