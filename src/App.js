import { Routes, Route, Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import SignUp from "./routes/signup/signup.component";
import Navbar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route index={true} element={<Home />} />

        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<h1>page doesnt exist</h1>} />
    </Routes>
  );
};
export default App;
