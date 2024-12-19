import { useState } from "react";
import PropTypes from 'prop-types';

function AppointmentForm(doctores) {
    const [formData, setFormData] = useState({
                doctor: "",
                paciente: "",
                email: "",
                fecha: "",
                hora: "18:00",
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
};

return (
    <div>
        
        <h2 className="text-left">Cita Medica</h2>        
    <div className="card mt-5">
        <div className="card-body">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                <p> Doctor</p>
                <select name="doctor" size="1"  value={formData.doctor}  onChange={handleChange}>
                    <option>Luis Perez</option>

                    <option>Carolina Jara</option>

                    <option>Felipe Muñoz</option>
                </select>
      
             

                </div>

                <div className="mb-3">
                    <input
                    type="text"
                    name="paciente"
                    className="form-control"
                    placeholder="Nombre Paciente"
                    value={formData.paciente}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Correo electronico Paciente"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <p> Fecha Cita </p>
                <div className="mb-3">
                    <input
                    type="date"
                    name="fecha"
                    className="form-control"
                    placeholder="Fecha Cita : dd/mm/aaaa"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                    />
                </div>
                <p> Hora Cita </p>
                <select name="hora" size="1"  value={formData.hora}  onChange={handleChange}>
                    <option>18:00</option>

                    <option>19:00</option>

                    <option>20:00</option>
                </select>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn
                    btn-primary">Enviar</button>
                </div>
            </form>
        </div>  
    </div>
    </div>    
    );
}

AppointmentForm.propTypes = {
    doctores: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        especialidad: PropTypes.string.isRequired,
        experiencia: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default AppointmentForm;
