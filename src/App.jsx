import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import AddJob from "./pages/AddJob";
import Chats from "./pages/Chats";
import EditeProfile from "./pages/EditeProfile";
import Posts from "./components/Posts";
import NoMatch from "./pages/NoMatch";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="edite-profile" element={<EditeProfile />} />
          <Route
            index
            path="Posts"
            element={<Posts url="/api/Post/get-user-posts" />}
          />
          <Route index element={<Posts url="/api/Post/get-user-posts" />} />
          <Route path="skills" element={<Skills />} />
        </Route>
        <Route path="/notification" element={<Notifications />} />

        <Route path="/add-job" element={<AddJob />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
