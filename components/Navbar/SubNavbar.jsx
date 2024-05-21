import { Link } from 'react-router-dom';
import '../../style/SubNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop,faHeadphones,faMicrochip} from '@fortawesome/free-solid-svg-icons';
import NavComponentes from "../Navbar/NavComponentes";
export default function SubNavbar (){
return (
    <>
            <nav>
                <div className="sub-navigation">
                    <NavComponentes 
                    icon={<FontAwesomeIcon icon={faLaptop} />} 
                        nombre={
                            <Link to={'/Notebooks'}>
                                Notebooks
                            </Link>
                        } 
                    />
                    <NavComponentes 
                        icon={<FontAwesomeIcon icon={faHeadphones} />} 
                        nombre={
                            <Link to={'/Auriculares'}>
                                Auriculares
                            </Link>
                        } 
                    />
                    <NavComponentes 
                        icon={<FontAwesomeIcon icon={faMicrochip} />} 
                        nombre={
                            <Link to={'/Procesadores'}>
                                Procesadores
                            </Link>
                        } 
                    />
                </div>
            </nav>
    </>
)
}


