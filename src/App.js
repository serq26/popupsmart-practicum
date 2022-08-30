import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import Login from "./components/Login";

function App() {
  const user = useSelector((state) => state.auth.user);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <main className={theme}>
      <Header />
      {user ? (
        <div className="content">
          <AddTodo />
          <TodoList />
        </div>
      ) : (
        <Login />
      )}
    </main>
  );
}

export default App;
