import './style.module.scss'
import Item from './Item'
import { ITarefa } from '../../@types/tarefa'

const List = ({ tarefas }: { tarefas: ITarefa[] }) => {
  return <aside className="listaTarefas">
    <h2>
      Estudos do dia
    </h2>
    <ul>
      {tarefas.map((item, index) => (
        <Item
          key={index}
          {...item}
        />
      ))}
    </ul>
  </aside>
}

export default List