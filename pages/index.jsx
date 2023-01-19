import Head from 'next/head'

import Title from '../src/components/title/title'
import SubTitle from '../src/components/SubTitle/SubTitle'

function HomePage(){
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
      <p>Hello world, NextJs + ReactJs 2</p>
    </div>
    </>
  )
}

export default HomePage


