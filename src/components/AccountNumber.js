import React from 'react';
import getAccountNumber from '../utils/getAccountNumber'

function AccountNumber({signingKey}) {


    const accountNumber = getAccountNumber(signingKey)

  return (
    <div className='flex'>
        <p><strong>Account Number: </strong>{accountNumber}</p>
    </div>
    );
}

export default AccountNumber;
