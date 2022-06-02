import React, { useRef } from 'react'

function IncomeForm({ income, setIncome }) {
  const description = useRef(null)
  const price = useRef(null)
  const date = useRef(null)

  const addIncome = e => {
    e.preventDefault()
    let d = date.current.value.split("-")
    let newDate = new Date(d[0], d[1], d[2])

    setIncome([...income, {
      "description": description.current.value,
      "price": price.current.value,
      "date": newDate.getTime()
    }])

    clearInputs()
  }

  const clearInputs = () => {
    description.current.value = null
    price.current.value = null
    date.current.value = null
  }

  return (
    <form className='income-form' onSubmit={addIncome}>
      <div className="form-inner">
        <input type="text" name="desc" id="desc" placeholder='Income Description...' ref={description} />
        <input type="number" name="price" id="price" placeholder='Price...' ref={price} />
        <input type="date" name="date" id="date" placeholder='Income Date...' ref={date} />
        <input type="submit" value="Add Income" />
      </div>
    </form>
  )
}

export default IncomeForm