import Card from "./Components/Card";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import ImgCard from "./Components/ImgCard";
import Count from "./Components/Count";
import "./app.css";


function App() {

  const handleClick = () =>{
    alert('Botão clicado');
  }

  const ConsoleClick = () =>{
    console.log('Botão clicado');
  }


  return (
    <>
      <div className="container">
        <Header title="Meu site" subtitulo = "New Title"/>
        <Card />
        <ImgCard caption="Uma imagem interessante"/>
        <ImgCard />
        <Button text="Clique aqui" onClickProp={handleClick}/>
        <Banner>
          <h1>Bem-Vindo ao meu site</h1>
          <p>Aqui você encontra as melhores ofertas!</p>
        </Banner>
        <Button text="Clique aqui" onClickProp={ConsoleClick}/>
        <Count />
        <Footer title="Todos os direitos reservados - 2024 &copy;"/>
      </div>
    </>
  )
}

export default App
