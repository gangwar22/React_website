import '../App.css';
import {HashLink} from "react-router-hash-link"
function Navbar() {
  return (
    <nav>
      <h1 className='h1'>TechStar</h1>
      <main className='main'>
        <HashLink className='a' to="/#home">Home</HashLink>
        <HashLink className='a' to="/#about">About</HashLink>
        <HashLink className='a' to="/#contact">Contact</HashLink>
       
      </main>
    </nav>
  );
}

export default Navbar;
