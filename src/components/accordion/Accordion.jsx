import { useState } from "react"
import "./styles.css"
import arc from "../../assets/arc.png"

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
    },
    {
        question: 'ARC 003',
        dataPrevista: "10/03/22",
        manutencao: "corretiva",
        answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasorci purus, aliguam in pposuere nec, rutrum at tortor."
    },
    {
        question: 'ARC 004',
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
            <div className="wrapper2">
                <div className="accordion2">
                    {data.map((item, i) => (
                        <div className="item2">
                            <div className="title2" onClick={() => toggle(i)}>
                                <div className="boxTitle2">
                                    <div className="boxCorrect2">
                                        <h4>{item.manutencao}</h4>
                                        <span>motivo</span>
                                    </div>
                                    <div className="boximg2">
                                        <img src={arc} alt="arcondicionado" />
                                        <p className="codigoArc">{item.question}</p>
                                    </div>
                                    <div className="boximg2">
                                        <img src={arc} alt="arcondicionado" />
                                        <p className="codigoArc">{item.question}</p>
                                    </div>
                                    <div className="boximg2">
                                        <img src={arc} alt="arcondicionado" />
                                        <p className="codigoArc">{item.question}</p>
                                    </div>
                                </div>
                                <span>{`Data prevista: ${item.dataPrevista}`}</span>
                                <button className="btn btn-primary">Iniciar</button>
                                <button className="btn btn-success">Concluída</button>
                                <button className="btn btn-danger">Finalizar</button>
                                <button className="btn btn-warning">Interromper</button>
                                <span>{selected === i ? "-" : "+"}</span>

                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
