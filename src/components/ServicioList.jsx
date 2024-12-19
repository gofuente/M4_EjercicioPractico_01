import PropTypes from 'prop-types';
import ServicioCard from "./ServicioCard";

function ServicioList({ servicios }) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 my-2">
            {servicios.map((servicio) => (
                <ServicioCard
                    key={servicio.id}
                    nombre={servicio.nombre}
                    descripcion={servicio.descripcion}
                />
            ))}
        </div>
    );
}

ServicioList.propTypes = {
    servicios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            descripcion: PropTypes.string.isRequired,
            })
        ).isRequired,
    };

export default ServicioList;