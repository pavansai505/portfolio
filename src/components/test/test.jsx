import React from 'react'
import './test.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Typography } from '@mui/material';

export default function Test() {
  window.addEventListener("scroll",()=>{
    const val=document.getElementById("vals")
    const ok=window.scrollY
    
    val.style.top=`-${ok/10}rem`
  })
  return (
    <div style={{overflowX:'hidden'}}>
      <div className='projectV3Div'>
      
      <Typography align='center' variant='h1' id="vals">ok</Typography>
    </div>
    <div className='projectV3Div'>
      <Button>ok</Button>
    </div>
    </div>
  )
}
