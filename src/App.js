// import logo from './logo.svg';
import './App.css';
import Step from './components/Step';
import StepOne from './components/StepOne';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <img
        className="App-logo"
        src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/logo.png?v=1660814008502"
      />
      <h1>Welcome to Dark Pita :)</h1>
      <Step
        title="Step 0 Prerequisites"
        image="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_side_blkpreview.gif?v=1660685057356"
        content=""
      ></Step>
      <ul style={listStlying}>
        <li>
          Downlaod the{' '}
          <span className="Highlight">
            <a target="_blank" href="https://www.google.com/chrome/downloads/">
              Chrome
            </a>
          </span>{' '}
          browser.
        </li>
        <li>
          Login your google account and turn on the
          <span className="Highlight">Sync</span>.
        </li>
      </ul>
      <img
        className="Demo"
        src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/login.gif?v=1660817500622"
      ></img>
      <Step
        title="Step 1 Installation"
        image="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/ytb_side_blkpreview.gif?v=1660685057356"
        content=""
      ></Step>
      <ul style={listStlying}>
        <li>
          Go to{' '}
          <span className="Highlight">
            <a target="_blank" href="chrome://extensions/">
              chrome://extensions/
            </a>
          </span>{' '}
          page.
        </li>
        <li>
          Toggle <span className="Highlight">Developer mode</span> ON.
        </li>
        <img className='Demo' src='https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/devmode.gif?v=1660887198489'></img>
        <li>
          Select <span className="Highlight">Load Unpacked</span>.
        </li>
        <li>
          Select the unpacked <span className="Highlight">/dist</span>{' '}
          directory.
        </li>
        <img className='Demo' src='https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/unpack.gif?v=1660886552680'></img>
        <li>
          Click the{' '}
          <span className="Highlight">
            <svg
              t="1660817091111"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2445"
              width="16"
              height="16"
            >
              <path
                d="M452.266667 0a131.982222 131.982222 0 0 1 124.302222 175.900444h183.296a87.836444 87.836444 0 0 1 87.836444 87.836445v183.352889a131.982222 131.982222 0 1 1 0 248.604444v183.352889A87.836444 87.836444 0 0 1 759.864889 967.111111H576.853333a131.982222 131.982222 0 1 0-248.775111 0H144.725333A87.836444 87.836444 0 0 1 56.888889 879.047111v-182.499555a131.697778 131.697778 0 1 0 0-248.604445V264.590222a87.836444 87.836444 0 0 1 87.836444-87.836444h183.296A131.811556 131.811556 0 0 1 452.494222 1.080889L452.323556 0z"
                p-id="2446"
                fill="#33333"
              ></path>
            </svg>
          </span>{' '}
          icon next to the address bar
        </li>
        <li>Pin the Dark Pita</li>
        <img className='Demo' src='https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/pin-2.gif?v=1660887010807'></img>

      </ul>

      {/* <img
        className="Demo"
        src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/install.gif?v=1660818932065"
      ></img> */}
      <Step
        title="Step 2 Usage"
        image="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/pitaface.png?v=1660746606545"
        content=""
      ></Step>
      <ul style={listStlying}>
        <li>Encounter dark patterns when browsing a site.</li>
        <li>
          Click <span className="Highlight">Show</span> to highlight dark
          patterns.
        </li>
        <li>Click one dark pattern to see its potential impact.</li>
        <li>
          Move your cursor to the <span className="Highlight">Attribute</span>{' '}
          tags to see explainations.
        </li>
        <li>
          Click <span className="Highlight">Take Action</span> to toggle{' '}
          <span className="Highlight">Action</span> panel.
        </li>
        <li>
          Choose one <span className="Highlight">Action</span> from the dropdown
          menu.
        </li>
        <li>Read the description and see the demonstration below</li>
        <li>
          Click <span className="Highlight">Save Changes</span> to save your
          choice.
        </li>
        <li>
          You can click <span className="Highlight">Reset</span> to reset all
          your changes on this site.
        </li>
      </ul>
      <p>
        ❗Note: If you do not <span className="Highlight">Save Changes</span>,
        your selected action will not work when you re-enter this site.
      </p>
      <img
        className="Demo"
        src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/usage.gif?v=1660825494004"
      ></img>
      <Step
        title="Step 3 Diary Notes"
        image="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/pitaface.png?v=1660746606545"
        content=""
      ></Step>
      <ul style={listStlying}>
        <li>
          Click the Dark Pita icon{' '}
          <span className="Highlight">
            <img
              className="Icon"
              src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/pita.png?v=1660736175003"
            ></img>
          </span>
          .
        </li>
        <li>
          Write your thoughts according to our{' '}
          <a href="#diaryGuideline">guidelines</a>.
        </li>
        <li>Take a screenshot of the current site or your findings.</li>
        <li>
          Upload your screenshot by clicking{' '}
          <span className="Highlight">Choose file</span>.
        </li>
        <li>
          Click <span className="Highlight">Send Insights</span>.
        </li>
      </ul>
      <img
        className="Demo"
        src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/diary.gif?v=1660825125934"
      ></img>
      {/* <StepOne></StepOne> */}
      <Contact></Contact>
      <h3>What platforms does Dark Pita work on?</h3>
      Dark Pita works on five sites across three types of platforms (i.e.,
      online shopping platforms, video streaming platforms, and social meidas
      platforms) to help you understand and counteract dark pattern interfaces
      in your daily online experience. It provides over 30 interventions
      strategies to help you change undesirable dark patterns based on your
      needs.
      <ul style={listStlying}>
        <li>Amazon</li>
        <li>Youtube</li>
        <li>Netflix</li>
        <li>Facebook</li>
        <li>Twitter</li>
      </ul>
      <h3>Why and how should I take Diary Notes?</h3>
      <ul style={listStlying}>
        <li>
          You can think of the console as the "customer service portal" of Dark Pita. It's an important way for you as users to communicate with us.
        </li>{' '}
        <li>We value your feedback and it is crucial to our study and future development.</li>{' '}
        <li>You are encouraged to write to most of the questions. You can also send multiple messages/screenshots if  needed. </li>{' '}
        <li>To send the diary, please refer to the instructions above.</li>
      </ul>
      <h3>When should I send diary notes?</h3>
      <ul style={listStlying}>
        <li>
          When a intervention helps you resist the manipulation from a
          specific dark pattern.
        </li>{' '}
        <li>When you come up with new intervention ideas.</li>
        <li>
          When you feel something interesting or annoying when interacting with
          our extension.
        </li>{' '}
        <li>
          When you encounter things related to dark patterns that you find
          meaningful or interesting, not limited to our targeted dark patterns
          and interventions.
        </li>
      </ul>
      <h3 id="diaryGuideline">
        What are the guideline questions for writing diary notes?
      </h3>
      <ol style={listStlying}>
        <li>
          What is the dark pattern you want to talk about?
          <ul>
            <li>How does the dark pattern affect your browsing experience?</li>
            <li>
              Do you think our provided interventions help improve your
              experience?{' '}
            </li>
            <li>Is there a better intervention you can think of?</li>
          </ul>
        </li>{' '}
        <li>
          For the Dark Pita extension, anything interesting or any issue you
          found when using it?
        </li>
        <li>
          Did you encounter things related to dark patterns that you found
          meaningful or interesting, not limited to our targeted dark patterns
          and interventions?
        </li>
      </ol>
      <h3>How can I take screenshots?</h3>
      For Mac OS users:
      <ul style={listStlying}>
        <li>
          Press the <span className="Highlight">Command</span>,{' '}
          <span className="Highlight">Shift</span> and{' '}
          <span className="Highlight">3</span> keys together to take a
          screenshot of the entire screen.
        </li>
        <li>
          Press the <span className="Highlight">Command</span>,{' '}
          <span className="Highlight">Shift</span> and{' '}
          <span className="Highlight">4</span> keys together to take a
          screenshot of a selected area.
        </li>
      </ul>
      For Windows users:
      <ul style={listStlying}>
        <li>
          Hit the <span className="Highlight">PrtScn</span> button or{' '}
          <span className="Highlight">Print Scrn</span> button, to take a
          screenshot of the entire screen.
        </li>
      </ul>
      Click{' '}
      <a target="_blank" href="https://www.webwise.ie/parents/take-screenshot/">
        here
      </a>{' '}
      to see more information about how to take a screenshot.
      <h3>If I close the banner, how do I reopen it?</h3>
      Two ways:
      <ol style={orderListStlying}>
        <li>Refresh the whole page.</li>
        <li>
          {' '}
          Click the Dark Pita icon{' '}
          <span className="Highlight">
            <img
              className="Icon"
              src="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/pita.png?v=1660736175003"
            ></img>
          </span>
          and click the <span className="Highlight">Open Banner</span> button.
        </li>
      </ol>
      <h3>If I have other questions, who do I go to for help?</h3>
      <p>
        Feel free to send your questions and thoughts about Dark Pita and dark
        patterns to us.
      </p>
      <p>Our emails:</p>
      <ul style={listStlying}>
        <li>ylu23@nd.edu.com</li>
        <li>zhangchaodesign@zju.edu.com</li>
      </ul>
      <Step
        title="Exmaple URLs"
        image="https://cdn.glitch.global/437de514-4247-434b-b3ad-750c6fc27691/pitaface.png?v=1660746606545"
        content=""
      ></Step>
      <ul style={listStlying}>
        <li>
          <a target="_blank" href="https://www.amazon.com/">
            Amazon Homepage
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.amazon.com/s?k=tennis+ball&ref=nb_sb_ss_recent_2_0_recent"
          >
            Amazon Search Result Page
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.amazon.com/Keepsmile-Bluetooth-Changing-Bedroom-Festival/dp/B0B2D52FLK/?_encoding=UTF8&pd_rd_w=5rJOm&content-id=amzn1.sym.8cf3b8ef-6a74-45dc-9f0d-6409eb523603&pf_rd_p=8cf3b8ef-6a74-45dc-9f0d-6409eb523603&pf_rd_r=05A7TWVZEC4NP3Z9D2RW&pd_rd_wg=EwjK3&pd_rd_r=439c3022-6698-4167-92d6-81c9d96126d5&ref_=pd_gw_ci_mcx_mi"
          >
            Amazon Item Information Page
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/">
            Youtube Homepage
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/watch?v=lJUW0iZzAaQ">
            Youtube Video Page
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.netflix.com/watch/80198062?trackId=14277281&tctx=-97%2C-97%2C%2C%2C%2C%2C%2C%2C"
          >
            Netflix Watch
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.netflix.com/browse">
            Netflix Homepage
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/">
            Facebook Homepage
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/home">
            Twitter Homepage
          </a>
        </li>
      </ul>
    </div>
  );
}

const listStlying = {
  listStyleType: 'disc',
  lineHeight: '1.9'
};

const orderListStlying = {
  listStyleType: 'decimal',
  lineHeight: '1.9'
};

export default App;
