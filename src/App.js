// import logo from './logo.svg';
import './App.css';
import Step from './components/Step';
import StepOne from './components/StepOne';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">

      <img className="PitaAvatar" src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/DALL%C2%B7E%202022-08-04%2012.53.10%20-%20pita%20bread%20in%20cartoon%20style%203D%20rendered.png?v=1660717926745" />
      <h1>Welcome to Dark Pita :)</h1>
      <Step title="Step 1 Installation" image="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_side_blkpreview.gif?v=1660685057356" content=""></Step>
      <StepOne></StepOne>
      <Contact></Contact>


    </div >


  );
}

export default App;
