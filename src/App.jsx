import { useState } from "react"
import './App.css'; // Importa los estilos CSS
function App() {
  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setresultado] = useState(0);

  const handelChangeUno = (event) => {
    setNumeroUno(event.target.value);
  }

  const handelChangeDos = (e) => {
    setNumeroDos(e.target.value);
  }

  const handleSumar = (event) => {
    setresultado(parseFloat(numeroUno) + parseFloat(numeroDos));
  }

  const handleRestar = (event) => {
    setresultado(parseFloat(numeroUno) - parseFloat(numeroDos));
  }

  const handleMultiplicar = (event) => {
    setresultado(parseFloat(numeroUno) * parseFloat(numeroDos));
  }

  const handleDividir = (event) => {
    setresultado(parseFloat(numeroUno) / parseFloat(numeroDos));
  }
  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" placeholder="Numero 1" value={numeroUno} onChange={handelChangeUno}/>
      <input type="text" placeholder="Numero 2" value={numeroDos} onChange={handelChangeDos}/>
      <hr/> 
      <button onClick={handleSumar}>+</button>
      <button onClick={handleRestar}>-</button>
      <button onClick={handleMultiplicar}>*</button>
      <button onClick={handleDividir}>/</button>
      <hr/> 
      <p>Resultado: {resultado}</p>
    </>
  )
}
export default App
