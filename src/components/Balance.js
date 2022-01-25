import React, { useEffect, useState } from 'react';
import getAccountNumber from '../utils/getAccountNumber';
import axios from 'axios'

function Balance({signingKey}) {

    const accountNumber = getAccountNumber(signingKey)
    const [balance, setBalance] = useState(0);

    useEffect(() => {

        const fetchBalance = async() => {
            const response = await axios.get(`http://52.52.160.149/accounts/${accountNumber}/balance`)
            setBalance(response.data.balance)
        }

        fetchBalance()
    })

    return (
        <div>
            <p><strong>Balance: </strong>{balance} TNBC</p>
        </div>
    );
}

export default Balance;
