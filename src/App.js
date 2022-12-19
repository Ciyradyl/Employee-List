import NaviBar from "./components/NaviBar"
import UserList from "./components/UserList"
import Footer from "./components/Footer"
import Copyright from "./components/Copyright"

import {} from "react-bootstrap"

function App() {
  return (
    <div>
      <NaviBar></NaviBar>
      <UserList></UserList>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
}

export default App;
