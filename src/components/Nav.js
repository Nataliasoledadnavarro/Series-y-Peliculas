import "../styles/components/_Nav.scss"
import { BsHouseDoor as HomeIcon, BsCameraVideo as CamaraIcon, BsSearch as LupaIcon  } from "react-icons/bs";
import { FiMonitor as MonitorIcon } from "react-icons/fi";


const Nav = () => {
  return (
    <nav>
      <div className="contenedor-iconos">
        <HomeIcon/>
        <CamaraIcon/>
        <MonitorIcon/>
        <LupaIcon/>
      </div>
    </nav>
  )
};

export default Nav;
