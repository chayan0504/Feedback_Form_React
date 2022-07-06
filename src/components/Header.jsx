import React from 'react'

function Header({text, bgColor, textColor}) {

  const headerstyles = {
    backgroundColor: bgColor,
    color: textColor,
    textAlign: 'center'
  }

  return (
    <header style={headerstyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',

}

export default Header



