import './index.css'
import { ReactComponent as Github } from './assets/github.svg'
import { 
  ReactComponent as Telegram 
} from './assets/telegram.svg'
import { ReactComponent as Mail } from './assets/mail.svg'

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <span>mi6e4ka.dev</span>
      </div>
      <div className='Main'>
        <div className='Back'>
          <div className='Card'>
            <div className='Icon-Box'>
              <Github/>
            </div>
            <span className='Text'>/mi6e4ka</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
