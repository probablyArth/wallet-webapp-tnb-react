import React from 'react';

function SetSigningKey({setSigningKey, handleSubmission}) {
  return (
    <div className='flex flex-col shadow-lg rounded-xl w-3/5 px-12 py-12 items-center'>
        <label className='px-4'>Enter your signing key here</label>
        <input className='outline-none mt-4 py-5 px-4' placeholder='your signing key here' onChange={(e) => setSigningKey(e.target.value)}/>
        <button className='bg-red-500 text-white w-1/5 py-2 rounded-xl mt-6' onClick={() => handleSubmission()}>Set</button>
    </div>
  );
}

export default SetSigningKey;
