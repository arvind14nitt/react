import logo from './logo.svg';
import './App.css';
import ExpenseItem from './ExpenseItem';
function App() {
  return (
     <div className="App"> 
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
     </div>
  );
}

export default App;
