import './Tile.css';

// states, effects, hooks

const Tile = ({ todo }) => {
  return (
    <div className="todo-tile">
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </div>
  );
};

export default Tile;
