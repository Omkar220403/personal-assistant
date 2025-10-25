import React from 'react';

const Sidebar = () => {
  return (
    <div className='w-64 bg-coffee-medium dark:bg-coffee-dark text-white flex flex-col p-4'>
        <button className='bg-coffee-dark dark:bg-coffee-deep rounded-xl p-2 mb-4'>
            + New Chat
        </button>
    </div>
  );
};
export default Sidebar;