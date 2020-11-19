import React, { useState } from 'react'
import styled from 'styled-components'
import thumb from '../assets/thumb.png'

// eslint-disable-next-line react/prop-types
export const LikeButton = ({ id, likes }) => {
  const [like, setLike] = useState(likes)

  const handleClick = () => {
    fetch(`http://localhost:8080/messages/${id}/like`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      }).then(res => res.json())
      .then(setLike(like + 1))
  }

  return (
    <div>
      <LikeThumb type='image' src={thumb} onClick={handleClick}/>
      <Liked>{like}</Liked>
    </div>

  )
}

const LikeThumb = styled.input`
  height: 50px;
  transition: 0.5s;
  :hover {
    height: 60px;
  }
  :active {
    height: 80px;
    transition: 0.1s;
  }
  :focus {
    outline: none;
  }
`
const Liked = styled.p`
  font-size: 12px;
  color: darkgrey;
`
