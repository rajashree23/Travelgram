import { Routes, Route } from "react-router-dom";

import Mockman from "mockman-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RequiresAuth } from "./component/RequiresAuth/RequiresAuth";
import { Auth } from "./pages/Auth/Auth";
import { HomeFeed } from "./pages/HomeFeed/HomeFeed";

function App() {
  return (
    <>
      <ToastContainer
        theme="light"
        position="top-right"
        autoClose="1000"
        limit="1"
        style={{ top: "5.5rem", right: "0.5rem" }}
      />
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route
          path="/"
          element={
            <RequiresAuth>
              <HomeFeed />
            </RequiresAuth>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
