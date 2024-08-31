import Card from "./Components/Card";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Button from "./Components/Button";
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
        <Card/>
        <Button text="Clique aqui" onClickProp={handleClick}/>
        <Banner>
          <h1>Bem-Vindo ao meu site</h1>
          <p>Aqui você encontra as melhores ofertas!</p>
        </Banner>
        <Button text="Clique aqui" onClickProp={ConsoleClick}/>
      </div>
    </>
  )
}

export default App
