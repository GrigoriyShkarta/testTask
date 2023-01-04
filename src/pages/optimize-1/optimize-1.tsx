import { memo, useCallback, useState } from 'react';
import { CenteredLayout } from '~/components';
import { useRenderHighlight } from '~/utils';
import css from './optimize-1.module.scss';

interface ToDoItem {
  id: number;
  text: string;
  done: boolean;
}

const todosData: ToDoItem[] = [
  { id: 1, text: 'run a marathon', done: false },
  { id: 2, text: 'ride an elephant', done: false },
  { id: 3, text: 'swim with a fish', done: false },
];

// TODO Fix all list re-rendering when only one component is changed :(

interface TodoProps {
  id: number;
  text: string;
  done: boolean;
  onClick: any;
}

const Todo = memo(({id, text, done, onClick }: TodoProps) => {
  const ref = useRenderHighlight(css.render);
  return (
    <li ref={ref} id={`${id}`} onClick={onClick} className={css.listItem}>
      {done ? '[x]' : '[ ]'} {text}
    </li>
  );
});

export const Optimize1 = () => {
  const [todos, setTodos] = useState(todosData);

  const handleTodoClick = useCallback((event: MouseEvent & {target: HTMLElement}) => {
    setTodos(prevTodos => prevTodos.map((todo) => {
      return todo.id === +event.target.id ? { ...todo, done: !todo.done } : todo
    }))
    }, [],
  );

  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">It re-renders all items! =\</div>
      <div>We need to fix that</div>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            text={item.text}
            done={item.done}
            id={item.id}
            onClick={handleTodoClick}
          />
        ))}
      </ul>
    </CenteredLayout>
  );
};
