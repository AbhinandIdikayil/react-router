import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Sports() {
  const {sports} = useOutletContext();
    console.log(sports)
  return (
    <>
    <div>{sports.highjump}</div>
    <span>{sports.longjump}</span>
    </>
  )
}

export default Sports 