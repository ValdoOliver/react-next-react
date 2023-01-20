import Header from  '../src/components/header/Header.jsx'
import Title from '../src/components/title/title.jsx'
import SubTitle from '../src/components/SubTitle/SubTitle.jsx'


function OutroExemplo(){
  return(
    <>
   <Header image={'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee2.jpg'}>
   <Title>Outro Café Dev</Title>
   <SubTitle text='Segundo Melhor Cafés'/>

   </Header>
   
    </>
  )

}


export default OutroExemplo