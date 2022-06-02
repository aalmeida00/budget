import React from 'react'
import IncomeItem from '../IncomeItem/IncomeItem'

const IncomeList = ({ income, setIncome }) => {

  const removeIncome = i => {
    let filteredIncome = income.filter((income, idx) => idx !== i)
    setIncome(filteredIncome)
  }

  const sortByDate = (a, b) => {
    return a.date - b.date
  }
  return (
    <div className='income-list'>
      {
        income.sort(sortByDate).map((value, idx) => (
          <IncomeItem key={idx} index={idx} income={value} removeIncome={removeIncome} />
        ))
      }
    </div>
  )
}

export default IncomeList