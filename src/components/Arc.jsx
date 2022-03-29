import { useState } from "react"
import "../styles/Arc.css"
import arc from "../assets/arc.png"

const data = [
  {
    question: 'ARC 001',
    manutencao: "corretiva",
    dataPrevista: "10/03/22",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasorci purus, aliguam in pposuere nec, rutrum at tortor."
  },
  {
    question: 'ARC 002',
    dataPrevista: "10/03/22",
    manutencao: "preventiva",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasorci purus, aliguam in pposuere nec, rutrum at tortor."
  }
]

export default function Accordion() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }


  return (
    <>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <div className="boxTitle">

                  <div className="boxCorrect">
                    <h4>{item.question}</h4>
                    <img className="img" src={arc} alt="arcondicionado" />
                  </div>

                  <div className="boxing">
                    <h2>Informações do Equipamento</h2>
                    <table class="table mx-auto">

                      <tbody>
                        <tr>
                          <td><strong>Modelo:</strong></td>
                          <td>Otto</td>

                          <td><strong>Modelo:</strong></td>
                          <td>Otto</td>
                          
                          <td><strong>Modelo:</strong></td>
                          <td>Otto</td>
                        </tr>

                        <tr>
                          <td><strong>Modelo:</strong></td>
                          <td>Thornton</td>

                          <td><strong>Modelo:</strong></td>
                          <td>Thornton</td>
                          <td><strong>Modelo:</strong></td>
                          <td>Thornton</td>
                        </tr>

                        <tr>
                          <td><strong>Modelo:</strong></td>
                          <td>Thornton</td>    

                          <td><strong>Modelo:</strong></td>
                          <td>Thornton</td>  
                          
                          <td><strong>Modelo:</strong></td>
                          <td>Otto</td>                 
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="boxTable">
                <h2>Histórico de Manutenção</h2>
                <table class="table table-responsive table-light table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Data</th>
                      <th scope="col">Informação</th>
                      <th scope="col">Status</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                      <td>03/05/2022</td>
                      <td>Limpeza de sensor de bicho</td>
                      <td><div className="iconImage"></div></td>
                    </tr>
                    <tr>

                      <td>03/05/2022</td>
                      <td>Limpeza de sensor de bicho</td>
                      <td><div className="iconImage"></div></td>
                    </tr>
                    
                  </tbody>
                </table>
                </div>
                <span>{selected === i ? "-" : "+"}</span>

              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                <div className="ocultBar">
                  <h2>Documentos</h2>
                  
                </div>
                {item.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
