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
    title: 'title2',
    description: 'description2',
  },
  {
    id: 3,
    title: 'title3',
    description: 'description3',
  },
  {
    id: 4,
    title: 'title4',
    description: 'description4',
  },
];

const App = () => {
  return (
    <div className="center">
      <h1>Todos</h1>
      {todos.map(todo => {
        return <Tile key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default App;
