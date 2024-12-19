import PropTypes from 'prop-types';
import DoctorCard from "./DoctorCard";

function DoctorList({ doctores }) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 my-2">
            {doctores.map((doctor) => (
                <DoctorCard
                    key={doctor.id}
                    nombre={doctor.nombre}
                    especialidad={doctor.especialidad}
                    experiencia={doctor.experiencia} 
                />
            ))}
        </div>
    );
}

DoctorList.propTypes = {
        doctores: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            especialidad: PropTypes.string.isRequired,
            experiencia: PropTypes.number.isRequired,
            })
        ).isRequired,
    };

export default DoctorList;