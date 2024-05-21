import SubNavbar from "../Navbar/SubNavbar";
import Nav from "../Navbar/nav";
import '../../style/contact.css'
import React from 'react';


export default function ContactForm() {
  return (
<>
      <Nav /> 
      <SubNavbar /> 
      <div>
        <div className="container">
          <form action="">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Nombre</label>
              <input placeholder="Ingrese tu nombre" className="form-control" name="name" type="text" id="name" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="lastname">Apellido</label>
              <input placeholder="Ingrese tu apellido" className="form-control" name="lastname" type="text" id="lastname" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="phone">Teléfono</label>
              <input placeholder="Ingrese tu teléfono" className="form-control" name="phone" type="text" id="phone" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Correo electrónico</label>
              <input placeholder="Ingrese su correo electrónico" className="form-control" name="email" type="email" id="email" />
            </div>
            
            <div className="mb-3">
              <label className="form-label" htmlFor="description">Descripción</label>
              <textarea placeholder="Ingrese una breve descripción" className="form-control" name="description" id="description" cols="20" rows="10"></textarea>
            </div>
            <div className="submit">
              <button type="submit" className="btn-contact">Enviar</button>
            </div>
            <div className="privacidad">
              <p>
                * Datos requeridos, todos tus datos son manejados de forma confidencial, conoce nuestras políticas de privacidad
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


// export default function Formulario() {
  //   return (
    //     <>
    //             <Nav/>
    //             <SubNavbar />
    //     <div>
    //       <form>
    //         <div>
//           <label name="nombre">Nombre:</label>
//           <input type="text" id="nombre" name="nombre" />
//         </div>
//         <div>
//           <label email="email">Email:</label>
//           <input type="email" id="email" name="email" />
//         </div>
//         <div>
//           <label description="mensaje">Mensaje:</label>
//           <textarea id="mensaje" name="mensaje"></textarea>
//         </div>
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//     </>
//   );
// }


