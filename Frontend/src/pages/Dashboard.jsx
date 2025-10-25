import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'

const Dashboard = () => {
  return (
    <div className="flex h-screen w-full bg-coffee-light dark:bg-coffee-deep text-coffee-dark dark:text-coffee-light transition-colors duration-300">
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <ChatWindow />
      </div>
    </div>
  )
}

export default Dashboard
