import { useState } from "react";
import "./App.css";
import AboutComponent from "./Pages/about/About.jsx";
import EventComponent from "./Pages/events/events";
import Faqnews from "./Pages/Faqnews/page";
import Hero from "./Pages/hero/page";
import Loader from "./Pages/loader/page";
import NavComponent from "./Pages/navbar/navbar";
import Practice from "./Pages/Practice/Practice";
import Teams from "./Pages/Teams/teams.jsx";

function App() {
  const [load, setLoad] = useState(true);
  return (
    <>
      {load && <Loader />}
      <NavComponent />
      <Hero loading={() => setLoad(false)} />
      <AboutComponent />
      <EventComponent />
      <Practice />
      <Teams></Teams>
      <Faqnews />
    </>
  );
}

export default App;
