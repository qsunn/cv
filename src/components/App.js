import { LeftPart } from "./LeftPart";
import { RightPart } from "./RightPart";
import { About } from "./About";
import { Photo } from "./Photo";
import { Info } from "./lists/Info";
import { TechSkills } from "./lists/TechSkills";
import { SoftSkills } from "./lists/SoftSkills";
import { Languages } from "./lists/Languages";
import { Courses } from "./lists/Courses";
import { Projects } from "./lists/Projects";
import { WorkExperience } from "./lists/WorkExperience";
import { Education } from "./lists/Education";
import { GraphicEditors } from "./lists/GraphicEditors";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white container grid grid-cols-[320px_1fr]">
      <LeftPart>
        <Photo />
        <Info />
        <TechSkills />
        <SoftSkills />
        <Languages />
      </LeftPart>
      <RightPart>
        <About />
        <Projects />
        <WorkExperience />
        <Courses />
        <Education />
        <GraphicEditors />
      </RightPart>
    </div>
  );
}

export default App;
