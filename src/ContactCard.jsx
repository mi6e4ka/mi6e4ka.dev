export default ({Icon, name, link}) => {
    return (
        <div className='Card'>
            <div className='Icon-Box'>
              <Icon/>
            </div>
            <span className='Text'>{name}</span>
        </div>
    )
}