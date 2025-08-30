import './App.css'

function App() {
  const colors = ['green', 'yellow', 'red']

  const handleClick = event => {
    console.log(event)
    const classes = event.target.classList

    if (event.target.id === 'red') {
      if (classes.contains('active')) {
        if (classes.contains('purple')) {
          classes.remove('active', 'purple')
          return
        }
        classes.add('purple')
        return
      }
      event.target.parentNode.querySelector('.active')?.classList.remove('active')
      classes.add('active')
      return
    }

    if (classes.contains('active')) {
      classes.remove('active')
      return
    }
    event.target.parentNode.querySelector('.active')?.classList.remove('active', 'purple')
    classes.add('active')
  }

  return (
    <div id='traffic-light'>
      {colors.map((e, i) => {
        return <div key={i} id={e} className='light' onClick={handleClick}>
        </div>
      })}
      {colors.map((e, i) => {
        return <div key={i} className={`container ${e}`}>
        </div>
      })}
    </div>
  )
}

export default App
