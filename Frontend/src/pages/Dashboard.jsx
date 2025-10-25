import Sidebar from '../components/Sidebar'
// import ChatWindow from '../components/ChatWindow'

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-coffee-light dark:bg-coffee-deep transition-colors duration-300">
      <Sidebar />
      {/* <ChatWindow /> */}
    </div>
  )
}

export default Dashboard
