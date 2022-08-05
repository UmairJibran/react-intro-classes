import Tile from './components/Tile/Tile';
import AddButton from './components/AddButton/AddButton';

import './App.css';

const todoList = [
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
    title: 'lorem',
    description: 'ipssum dolor sit amet, consectetur adipiscing el',
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
      <h1 className="text-4xl">Todo List</h1>
      <AddButton />
      {todoList.map(todo => {
        return <Tile key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default App;
