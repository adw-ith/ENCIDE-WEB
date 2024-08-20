import "./about.css";
import grpic from "./d1.jpg";
import eye from "./Eye.png";
import rocket from "./Rocket.png";

function AboutComponent() {
  return (
    <section id="about" className="Abt_Us flex-col-reverse sm:flex-row">
      <div className="abt_us_1">
        <div className="abt_us_cont pb-8">
          <h1>ABOUT US</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-8 justify-between w-full">
          <div className="mission aspect-square box sm:rounded-full flex flex-col items-center justify-center text-center">
            <div className="rkt_icon text-gray-700 icon font-thin"></div>
            <h2 className="text-2xl font-bold">OUR MISSION</h2>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </div>
          <div className="vision aspect-square box sm:rounded-full flex flex-col items-center justify-center text-center">
            <div className="eye_icon text-gray-700 icon font-thin"></div>
            <h2 className="text-2xl font-bold">OUR VISION</h2>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </div>
        </div>
      </div>
      <div className="abt_us_2 pb-12 flex items-start justify-center">
        <img className="grpic" src={grpic} alt="grpic"></img>
      </div>
    </section>
  );
}

export default AboutComponent;
