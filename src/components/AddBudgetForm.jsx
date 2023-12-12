// library imports
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'

// react-router-dom imports
import { Form } from 'react-router-dom'

function AddBudgetForm() {
  return (
    <div className='form-wrapper'>
        <h2>Create budget</h2>
        <Form
            method="post"
            className='myForm'
        >
            <div className='inner-myForm'>
                <label htmlFor='newBudget'>Budget Name</label>
                <input
                    type='text'
                    name='newBudget'
                    id='newBudget'
                    placeholder='Eg. Food, Rent, etc.'
                    required
                />
            </div>
            <div className='inner-myForm'>
                <label htmlFor='newBudgetAmount'>Amount</label>
                <input
                    type='number'
                    step='0.01'
                    name='newBudgetAmount'
                    id='newBudgetAmount'
                    placeholder='Eg. Rs. 10000'
                    inputMode='decimal'
                    required
                />
            </div>
            {/* <div className='inner-myForm'>
                <label htmlFor='newBudgetDate'>Date</label>
                <input
                    type='date'
                    name='newBudgetDate'
                    id='newBudgetDate'
                    required
                />
            </div> */}
            <input type='hidden' name='_action' value='createBudget' />
            <button type='submit' className='btn' style={{width: "140px"}}>
                <span>Create</span>
                <CurrencyDollarIcon width={20} />
            </button>
        </Form>
    </div>
  )
}

export default AddBudgetForm