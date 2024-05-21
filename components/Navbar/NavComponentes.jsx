import "../../style/NavComponente.css"
const NavComponentes = ({ icon, nombre }) => {
    return (
        <div>
            <span className="links">
                {icon} {nombre}
            </span>
        </div>
    );
};

export default NavComponentes;

