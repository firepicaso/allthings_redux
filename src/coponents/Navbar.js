import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart)
  return (
    <nav className='nav-center'>
        <h3>Redux toolkit</h3>
        <div>
            <p className="tota-amount">{amount}</p>
        </div>
    </nav>
  )
}

export default Navbar
