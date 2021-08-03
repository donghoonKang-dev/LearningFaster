import React from 'react'

export default function Hello({ color, name }) {
  return (
    <div style={{ color }}>
      <h1>안녕하세요 {name}</h1>
    </div>
  )
}

Hello.defaultProps = {
  name: '이름없음',
  color: 'pink'
} 