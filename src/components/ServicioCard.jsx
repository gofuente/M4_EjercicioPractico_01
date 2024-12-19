import PropTypes from 'prop-types';
function ServicioCard({ nombre, descripcion }) {
    return (
    <div className="col">
        <div className="card">
            <div className="card-body">
                <h5 className='card-title'>Servicio : {nombre}</h5>
                <p className='card-text'>Descripción :{descripcion}</p>
            </div>
        </div>
    </div>
    );
}

ServicioCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};
   
export default ServicioCard;