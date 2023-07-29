import './index.css'
import { ReactComponent as Github } from './assets/github.svg'
import { 
  ReactComponent as Telegram 
} from './assets/telegram.svg'
import { ReactComponent as Mail } from './assets/mail.svg'
import ContactCard from './ContactCard'

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <span>mi6e4ka.dev</span>
      </div>
      <div className='Main'>
        <div className='Back'>
          <ContactCard Icon={Github} name={"/mi6e4ka"} />
          <ContactCard Icon={Telegram} name={"@mi6e4ka"} />
          <ContactCard Icon={Mail} name={"me@mi6e4ka.dev"} />
        </div>
      </div>
    </div>
  );
}

export default App;
