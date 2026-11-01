import Double from "../comps/Double/Double";
import groupright from "../assets/right.jpg";
import groupleft from "../assets/left.jpg";

const drawings = [{ src: groupleft }, { src: groupright }];

function About() {
  return (
    <div className="gallery">
      <Double drawings={[drawings[0], drawings[1]]} />
    </div>
  );
}

export default About;
