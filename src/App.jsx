// File: App.jsx located in src folder
import Header from "./component/Header";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Register from "./component/Register";
import Login from "./component/Login";
import Diary from "./component/Diary";
import Footer from "./component/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "5px" }}>
      <h1>This is main componenet (App.jsx)</h1>
      {/* container 1: header */}
      <Header />
      {/* container 2: Navbar */}
      <Navbar />
      {/* container 3: Home Page */}
      <Home />
      {/* container 4: Registration */}
      <Register />
      {/* container 5: Login */}
      <Login />
      {/* container 6: Diary */}
      <Diary />
      {/* container 7: Footer */}
      <Footer />
    </div>
  );
}
export default App;
