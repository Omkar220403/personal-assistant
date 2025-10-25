import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'
import ThemeToggle from '../components/ThemeToggle'

const Dashboard = () => {
  return (
    <div className="flex h-screen w-full bg-coffee-light dark:bg-coffee-deep text-coffee-dark dark:text-coffee-light transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col relative">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <ChatWindow />
      </div>
    </div>
  )
}

export default Dashboard
