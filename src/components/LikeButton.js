import React from 'react'
import styled from 'styled-components'
import thumb from '../assets/thumb.png'

// eslint-disable-next-line react/prop-types
export const LikeButton = ({ id }) => {
  const handleClick = () => {
    fetch(`http://localhost:8080/messages/${id}/like`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      }
    )
  }

  return (
    <div>
      <LikeThumb type="image" src={thumb} onClick={handleClick}/>
    </div>

  )
}

const LikeThumb = styled.input`
  height: 80px;
  transition: 0.5s;
  :hover {
    height: 90px;
  }
  :active {
    height: 120px;
    transition: 0.1s;
  }
  :focus {
    outline: none;
  }
`
