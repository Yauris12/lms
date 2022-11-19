import React from 'react'

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import styled from 'styled-components'

const Starts = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })

  return (
    <Wrapper>
      {reviews ? (
        <>
          <p>{stars}</p>
          <div className='stars'>{tempStars}</div>
          <p className='reviews'>({reviews} valoraciones)</p>
        </>
      ) : (
        <div className='stars'>{tempStars}</div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    color: #ffb900;
    font-size: 1.8rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`

export default Starts
