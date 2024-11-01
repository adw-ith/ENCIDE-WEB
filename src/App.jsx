import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutComponent from "./Pages/about/About.jsx";
import EventComponent from "./Pages/events/events";
import Faqnews from "./Pages/Faqnews/page";
import Hero from "./Pages/hero/page";
import Loader from "./Pages/loader/page";
import NavComponent from "./Pages/navbar/navbar";
import Practice from "./Pages/Practice/Practice";
import Teams from "./Pages/Teams/teams.jsx";
import RegistrationForm from "./Pages/Execom/execom.jsx";

function App() {
  const [load, setLoad] = useState(true);

  return (
    <Router>
      {load && <Loader />}
      <NavComponent />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero loading={() => setLoad(false)} />
              <AboutComponent />
              <EventComponent />
              <Practice />
              <Teams />
              <Faqnews />
            </>
          }
        />
        <Route
          path="/registration"
          element={<RegistrationForm onLoad={() => setLoad(false)} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
