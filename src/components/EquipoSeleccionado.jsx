import { connect } from "react-redux";
import Titulares from "./Titulares";
import Suplentes from "./Suplentes";


function EquipoSeleccionado() {
  return (
    <section>
      <Titulares/>
      <Suplentes/>
    </section>
  );
}

const mapStateToProps = (state) => ({
  jugadores: state.jugadores,
});


export default connect(mapStateToProps, {})(EquipoSeleccionado);
