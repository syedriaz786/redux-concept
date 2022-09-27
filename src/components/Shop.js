import React from 'react'
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';
import { bindActionCreators } from 'redux';

import { useSelector } from 'react-redux'

function Shop() {
    const dispatch = useDispatch() //<-- dispatch use for dispatch type and payload
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)  // <-- here we are using destructuring

    const balance = useSelector(state => state.amount)
    return (
        <>
            <h2>Deposit/Withdraw Money</h2>
            {/* <button className="btn btn-primary" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            Update Money
            <button className="btn btn-primary" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button> */}

            <button className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }}>-</button>
            Update Money {balance}
            <button className="btn btn-primary mx-2" onClick={() => { depositMoney(100) }}>+</button>
        </>
    )
}

export default Shop