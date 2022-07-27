import Tile from './components/Tile/Tile';

import './App.css';

const todos = [
  {
    id: 1,
    title: 'title1',
    description: 'description1',
  },
  {
    id: 2,
    title: 'a very long title',
    description: 'description2',
  },
  {
    id: 3,
    title: '1',
    description: '1',
  },
  {
    id: 4,
    title: 'title4',
    description: 'description4',
  },
];

const App = () => {
  return (
    <div className="w-full mx-auto text-center">
      <h1 className="text-4xl">Todos</h1>
      {todos.map(todo => {
        return <Tile key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default App;
