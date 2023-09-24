import './navbar.css'
import logo from './logo.png'
export default function Navbar(){
    return(
        <div className='navbar'>
            <ul>
                <li className='logo'>
                    <img src={logo}/>
                    <h3>MASTERMIND</h3>
                </li>
                <li>Home</li>
                <li><a href='#programs'>Programs</a></li>
                <li><a href='#advantages'>Advantages</a></li>
                <li><a href='#registration'>Registration</a></li>
            </ul>
        </div>
    )
}