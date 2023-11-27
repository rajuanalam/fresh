import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from '../../assets/Logo.png'
import List from '../List';
import Button from '../Button';


const Navbar = () => {
  return (
    <nav className=" bg-bannerbgColor py-16 rounded-t-20">
        <Container>
         <Flex className="items-center">
          <div className="w-1/4">
            <Image src={Logo} alt=""/> 
          </div>
          <div className="w-2/4">
            <ul>
              <Flex className="justify-between">
                <List href="#" text="Men" />
                <List href="#" text="Woman" />
                <List href="#" text="Kids" />
                <List href="#" text="Collection" />
                <List href="#" text="Trends" />
              </Flex>
            </ul>
          </div>
          <div className="w-1/4 text-right">
            <Button text="Login" className="px-7 hover:bg-btnhover hover:border-btnhover duration-[0.5s]"/>
            
            <Button text="Sign up" className="px-3.5 ml-3  hover:bg-btnhover hover:border-btnhover duration-[0.5s]"/>
          </div>
         </Flex>
        </Container>
    </nav>
  )
}

export default Navbar