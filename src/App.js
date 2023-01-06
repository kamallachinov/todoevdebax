
import TodoForm from './Form';
import './App.css';
import ThemeChangeProvider from './Context';
import View from './View';

function App() {
  return (
    <>
      <ThemeChangeProvider>
        <TodoForm />
        <View/>
      </ThemeChangeProvider>
    </>
  );
}

export default App;
