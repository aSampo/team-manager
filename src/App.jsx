import { Provider } from "react-redux";
import store from './store.js';
import Jugadores from "./components/Jugadores.jsx";
import EquipoSeleccionado from "./components/EquipoSeleccionado.jsx";
import "./styles/styles.scss"


function App() {
  return (
    <Provider store={store}>
      <main>
        <h1>Team Manager</h1>
        <Jugadores/>
        <EquipoSeleccionado/>
      </main>
    </Provider>
  );
}

export default App;
