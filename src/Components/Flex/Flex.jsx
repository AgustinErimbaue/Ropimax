import React from 'react'

const Flex = () => {
    const flexStyle = {
        display: `flex`,
        justifyContent: `space-around`,
        flexWrap: `wrap`,
    }
  return (
    <div style={flexStyle}></div>
  )
}

export default Flex