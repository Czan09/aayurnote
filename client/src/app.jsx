import Role from "./private/role";

import Navbar from "./components/navbar";
import Navbar1 from "./components/navbar-login";
import Navbar2 from "./components/navbar-admin";

import Public from "./private/Public";
import Admin from "./private/admin";
import User from "./private/user";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  const CurrentUser = "Public";
  return CurrentUser === Role.Public ? (
    <>
      <Navbar />
      <Public />
    </>
  ) : CurrentUser === Role.User ? (
    <>
      <Navbar1 />
      <User />
    </>
  ) : CurrentUser === Role.Admin ? (
    <>
      <Navbar2 />
      <Admin />
    </>
  ) : (
    <NotFoundPage />
  );
}

export default App;
