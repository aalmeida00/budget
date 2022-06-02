import { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import IncomeForm from './components/IncomeForm/IncomeForm';
import IncomeList from './components/IncomeList/IncomeList';

function App() {
  const [income, setIncome] = useState([])
  const [totalIncome, setTotalIncome] = useState(0)

  useEffect(() => {
    let tempIncome = 0;
    income.forEach(income => {
      tempIncome += parseInt(income.price)
    })
    setTotalIncome(tempIncome)
  }, [income])

  return (
    <div className="App">
     <Header totalIncome={totalIncome} />
     <IncomeForm income={income} setIncome={setIncome} />
     <IncomeList income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
