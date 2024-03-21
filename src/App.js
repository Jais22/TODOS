
import './App.css';
import TodoList from './components/TodoList';
import { TodoProvider } from './todoContext/todoContexts';

function App() {
  return (
    <div >
    <TodoProvider>
    <TodoList/>
    </TodoProvider>
     
      
         </div>
  );
}

export default App;
