import PropTypes from 'prop-types';
function DoctorCard({ nombre, especialidad, experiencia }) {
    return (
    <div className="col">
        <div className="card">
            <div className="card-body">
                <h5 className='card-title'>Nombre : {nombre}</h5>
                <p className='card-text'>Especialidad :{especialidad}</p>
                <p className='card-text'>Experiencia : {experiencia} años</p>
            </div>
        </div>
    </div>
    );
}

DoctorCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    especialidad: PropTypes.string.isRequired,
    experiencia: PropTypes.number.isRequired,
    };
   
export default DoctorCard;