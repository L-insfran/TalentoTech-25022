
import Navbar from '../components/Navbar';
import ProductManager from '../components/ProductManager';
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold">Dashboard</h1> 
      <ProductManager />
    </div>
  )
}

export default Dashboard
