import React from 'react'

const IncomeItem = ({ income, idx, removeIncome }) => {
  let date = new Date(income.date)
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  const removeHandle = i => removeIncome(i)


  return (
    <div className='income-item'>
      <button className="remove-item" onClick={() => removeHandle(idx)}>x</button>
      <div className="desc">{income.description}</div>
      <div className="price">R${income.price}</div>
      <div className="date">{`${day}/${month}/${year}`}</div>
    </div>
  )
}

export default IncomeItem