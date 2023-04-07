import React from 'react'
import styled from 'styled-components'

function SectionTitle({title}) {

    const StyledHeader = styled.header`
        display:flex;
        justify-content:flex-start;
        background: #1f3b68;
        color: #c1c2c3;
        font-weight:bold;
        padding:0.4ch;
        width:100%;
    `

  return (
    <StyledHeader>{title}</StyledHeader>
  )
}

export default SectionTitle