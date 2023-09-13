import './index.css'
import { contacts, styles } from './settings'
import { ReactComponent as Github } from './assets/github.svg'
import ContactCard from './ContactCard'

function App() {
  return (
    <div className="App" style={{ "background": styles.background, "font-family": styles.font }}>
      <h1 className='Header'>{styles.header}</h1>
      <div className='Main'>
        <div className='Back'>
          {
            contacts.map((item, index) => <ContactCard
                key={index}
                Icon={item.icon}
                name={item.name}
                link={item.link}
              />
            )
          }
        </div>
      </div>
      <div className='Footer'>
        <small>by mi6e4ka</small>
        <small>
          <a
            href="https://github.com/mi6e4ka/mi6e4ka.dev"
            className='Source-Link'
          >
            <Github className='Link-Icon'/>
          </a>
        </small>
        <small>
          <a
            href="https://github.com/mi6e4ka/mi6e4ka.dev"
            className='Source-Link'
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>source</span>
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
