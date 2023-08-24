const ContactCard = ({Icon, name, link}) => {
    let bigText = name.length <= 8 ? true : false;
    let fSize = bigText ? 24 : 11.5
    /*
    old algo
    let fSize = 192 / name.length * 1.43 - (14 - name.length/2);
    if (width < 410) {
        fSize *= (width / 410)
    }*/

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className='Card-Link'>
          <div className='Card'>
              <div className='Icon-Box'>
                <Icon width={60} height={60} className={"Icon"} />
              </div>
              <span className={'Text'} style={
                  { fontSize: fSize }
              }>{name}</span>
          </div>
        </a>
    )
}

export default ContactCard;