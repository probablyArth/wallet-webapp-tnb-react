import React from 'react';
import AccountNumber from './AccountNumber';
import Balance from './Balance';

function Dashboard({signingKey}) {
  return (
    <div className='flex flex-col shadow-lg rounded-xl w-3/5 px-12 py-12 items-center'>
        <AccountNumber signingKey={signingKey} />
        <Balance signingKey={signingKey} />
    </div>
  );
}

export default Dashboard;
