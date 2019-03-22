import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import { useSpring, animated as a } from 'react-spring'
import Card from '../cards/Card'

const StyledDiv = styled.div`
  flex: 1 0 250px;
  background: gray;
  margin: 1rem;
  overflow: hidden;
  border-radius: 6px;
  background-size: cover;
`

export default function RouletteCard({ title, overview, rating, src }) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <StyledDiv onClick={() => set(state => !state)}>
      <a.div
        className="c back"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${src})`,
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      />
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        <Card title={title} overview={overview} rating={rating} src={src} />
      </a.div>
      <GlobalStyle />
    </StyledDiv>
  )
}
