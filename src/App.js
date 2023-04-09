
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <div className="todo-app">
      <TodoList/>
    </div>
          <div className="footer-info">
          Developed by {" "}
          <a target="_blank" href="https://www.linkedin.com/in/aayush-sawant-920b8a176/">
            {" "} Aayush Sawant
          </a>
        </div>
        </>
  );
}

export default App;
