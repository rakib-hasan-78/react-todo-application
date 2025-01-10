
import './App.css'
import Todo from './components/layouts/Todo';
import Modal from './components/layouts/Modal';

function App() {

  return (
    <>
      <Todo />
      <Modal title ={`are you sure to edit ?`} className=''/>
    </>
  )
}

export default App
