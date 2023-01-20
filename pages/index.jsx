import React, { useState } from 'react';
import Head from 'next/head'

import Title from '../src/components/title/title'
import SubTitle from '../src/components/SubTitle/SubTitle'
import Button from '../src/components/button/Button.jsx'


function HomePage(){

  const [clicando,setClick] = useState(0) 
  /* setclick pode usar qualquer nome
   useTate só pode ser usado dentro de funcões
  */
   const handleClick = ()=> {
     console.log('HANDLECLICK')
     setClick(clicando + 1)
   }

  return (
<>
    <Head>
    <title>Titulo home</title>
    </Head>
    <div> 
      
      <Title> um titulo</Title>
      <SubTitle text='Um subtitulo'/>
      <p>Hello world, NextJs + ReactJs 2</p>
      <Title> um titulo</Title>
      <SubTitle text='Outro subtitulo'/>
      <Button onClick={handleClick}
     
       >
        botao teste
        </Button>

        <div>Clicks {clicando}</div>
    </div>
    </>
  )
}

export default HomePage


