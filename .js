import React, { useContext } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { UserProvider, UserContext } from "./context/UserContext";

function AppContent() {
  const { isLoggedIn } = useContext(UserContext);

  // ✅ Conditional rendering example
  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Home />}
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}
