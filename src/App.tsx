import background from "./assets/background.jpg"
// import MultiStepsForm from "./Blocks/MultiStepsForm";
import FrammerMotion from "./FrammerMotion/FrammerMotion";
const App = () => {
  return (
    <div className=" border-white min-h-screen min-w-full" style={{ background: `url(${background})` }}>
      {/* <MultiStepsForm/> */}
      <FrammerMotion />
    </div>
  );
};

export default App;