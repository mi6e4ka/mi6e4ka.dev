import { useState, useEffect } from 'react'

const ContactCard = ({Icon, name, link}) => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
    let bigText = name.length <= 8 ? true : false;
    let fSize = bigText ? 24 : 11.5
    /*
    old algo
    let fSize = 192 / name.length * 1.43 - (14 - name.length/2);
    if (width < 410) {
        fSize *= (width / 410)
    }*/

    return (
        <a href={link} className='Card-Link'>
          <div className='Card'>
              <div className='Icon-Box'>
                <Icon/>
              </div>
              <span className={'Text'} style={
                  { fontSize: fSize }
              }>{name}</span>
          </div>
        </a>
    )
}

export default ContactCard;