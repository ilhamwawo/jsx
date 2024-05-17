import React from 'react'

const YellowBorder = (props) => {
  return (
    <div className={'HeaderBorder HeaderBorder-' + props.color}>
        {props.children}
    </div>
  )
}

export default YellowBorder