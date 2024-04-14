import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Marks() {
  const { marks } = useOutletContext()
  return (
    <>
      <div>{marks.Maths}</div>
      <span>
        {marks.chemistry}
      </span>
      <span>
        {marks.physics}
      </span>
    </>
  )
}

export default Marks