import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Jobs from "./pages/Jobs";
import AddJob from "./pages/AddJob";
import Chats from "./pages/Chats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
