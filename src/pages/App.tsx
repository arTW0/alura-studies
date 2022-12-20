import { useState } from 'react'
import { ITarefa } from '../@types/tarefa'
import Cronometro from '../components/Cronometro'
import Form from '../components/Form'
import List from '../components/List'
import style from './style.module.scss'

const App = () => {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])

  return <div className={style.AppStyle}>
    <Form setTarefas={setTarefas} />
    <List tarefas={tarefas} />
    <Cronometro />
  </div>
}

export default App
