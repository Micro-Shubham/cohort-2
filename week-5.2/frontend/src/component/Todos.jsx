// creating this componenet to render all the todos
// todos = [
//  {
// title: "go to gym ",
//  description: " you need to go gym "
// }
// ]
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
            <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ?"completed":" mark as complete"}</button>
          </div>
        );
      })}
    </div>
  );
}
