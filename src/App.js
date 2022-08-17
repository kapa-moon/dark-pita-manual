// import logo from './logo.svg';
import './App.css';
import Step from './components/Step';
import StepOne from './components/StepOne';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">

      <img className="PitaAvatar" src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/pita_face.png?v=1660745374412" />
      <h1>Welcome to Dark Pita :)</h1>
      <Step title="Step 0 Installation" image="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_side_blkpreview.gif?v=1660685057356" content=""></Step>
      <Step title="Step 1" image="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/pitaface.png?v=1660746606545" content=""></Step>
      {/* <StepOne></StepOne> */}
      <Contact></Contact>


    </div >


  );
}

export default App;
