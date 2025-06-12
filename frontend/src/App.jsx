import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="h-screen w-screen overflow-hidden bg-black geometric-bg">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "rgba(0, 0, 0, 0.9)",
            color: "#fff",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "0",
            fontFamily: "JetBrains Mono, Fira Code, Source Code Pro, monospace",
            fontSize: "14px",
            fontWeight: "600",
          },
          success: {
            iconTheme: {
              primary: "#fff",
              secondary: "#000",
            },
          },
          error: {
            iconTheme: {
              primary: "#fff",
              secondary: "#000",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
