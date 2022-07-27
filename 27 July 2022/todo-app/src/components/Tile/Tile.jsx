import './Tile.css';

// states, effects, hooks

const Tile = ({ todo }) => {
  return (
    <>
      <div
        className="my-2 border border-fuchsia-900 rounded-lg bg-fuchsia-200 w-max mx-auto px-32 py-4 hover:cursor-pointer hover:border-fuchsia-200 hover:bg-fuchsia-900 hover:text-white"
        onClick={() => {
          console.log(todo.id);
        }}
      >
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
    </>
  );
};

export default Tile;
