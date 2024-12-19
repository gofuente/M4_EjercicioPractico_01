import { useState, useEffect } from "react";
import DoctorList from "./components/DoctorList";
import ServicioList from "./components/ServicioList";
import AppointmentForm from "./components/AppointmentForm";
function App() {
  const [doctores, setDoctores] = useState([]);
  const [servicios, setServicios] = useState([]);
  useEffect(() => {
  // Simular una API
  setDoctores([
  { id: 1, nombre: "Luis Perez", especialidad: "Medico General", experiencia: 10 },
  { id: 2, nombre: "Carolina Jara", especialidad: "Oftalmologo", experiencia: 15 },
  { id: 3,  nombre: "Felipe Muñoz", especialidad: "Psicologo", experiencia: 5 },
  ]);
  }, []);

  useEffect(() => {
    // Simular una API
    setServicios([
    { id: 1, nombre: "Psicologia", descripcion: "Profesionales con amplia trayectoria en el campo clinico"},
    { id: 2, nombre: "OFtalmologia", descripcion: "Disponemos de la última tecnologia para tu salud ocular"},
    { id: 3,  nombre: "Medicina General", descripcion: "Profesionales con amplia trayectoria en el campo clinico"},
    ]);
    }, []);



  return (
    <div className="container my-5">
      <h1 className="text-center">Hospital Clinico</h1>
      <h2 className="text-center">Listado de Medicos</h2>
        <div className="row">
          <div className="col">
            <DoctorList doctores={doctores} />
          </div>
        </div>
        <h2 className="text-center">Listado de Servicios</h2>
        <div className="row">
          <div className="col">
            <ServicioList servicios={servicios} />
            <AppointmentForm doctores={doctores}  />
          </div>
        </div>

    </div>
    );
  }
  export default App;
