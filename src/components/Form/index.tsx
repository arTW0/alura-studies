import React, { useState } from 'react'
import { ITarefa } from '../../@types/tarefa'
import Button from '../Button'
import './style.scss'
import { v4 as uuidv4 } from 'uuid'

const Form = ({
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}) => {

  const [origin, setOrigin] = useState({
    tarefa: '',
    tempo: '00:00'
  })

  const adicionarTarefa = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTarefas((state) =>
      [...state,
      {
        origin,
        id: uuidv4(),
        selecionado: false,
        completado: false
      }
      ]
    )
    setOrigin(origin)
    console.log(origin)
  }

  return <form
    className="novaTarefa"
    onSubmit={adicionarTarefa}
  >
    <div className="inputContainer">
      <label htmlFor="tarefa">
        Adicione um novo estudo
      </label>
      <input
        type="text"
        id="tarefa"
        name="tarefa"
        value={origin.tarefa}
        onChange={e => setOrigin({ ...origin, tarefa: e.target.value })}
        placeholder="O que você quer estudar?"
        required
      />
    </div>

    <div className="inputContainer">
      <label htmlFor="tempo">
        Tempo
      </label>
      <input
        type="time"
        id="tempo"
        name="tempo"
        step="1"
        value={origin.tempo}
        onChange={e => setOrigin({ ...origin, tempo: e.target.value })}
        min="00:00:00"
        max="01:30:00"
        required
      />
    </div>

    <Button
      type="submit"
      texto="Adicionar"
    />
  </form>
}

export default Form