import React from 'react'

function Button({children, version,type, isdisabled}) {
  return (
    <button type={type} disabled={isdisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}


Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isdisabled: false
}

export default Button




