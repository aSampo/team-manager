import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Franco Armani",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/119634-1625760128.png?lm=1",
    },
    {
      id: 2,
      nombre: "Enrique Bologna",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/30753-1625760605.png?lm=1",
    },
		{
      id: 3,
      nombre: "Paulo Díaz",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/271478-1625770264.png?lm=1",
    },
		{
      id: 4,
      nombre: "Héctor Martínez",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/401576-1625770363.png?lm=1",
    },
		{
      id: 5,
      nombre: "Robert Rojas",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/527494-1625770531.png?lm=1",
    },
		{
      id: 6,
      nombre: "Javier Pinola",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/7358-1625770650.png?lm=1",
    },
		{
      id: 7,
      nombre: "Jonatan Maidana",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/39095-1625770735.png?lm=1",
    },
		{
      id: 8,
      nombre: "Fabrizio Angileri",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/268506-1625760521.png?lm=1",
    },
		{
      id: 9,
      nombre: "Milton Casco",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/115183-1625770873.png?lm=1",
    },
		{
      id: 10,
      nombre: "Gonzalo Montiel",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/402733-1625771017.png?lm=1",
    },
    {
      id: 11,
      nombre: "Alex Vigo",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/648520-1625771132.png?lm=1",
    },
    {
      id: 11,
      nombre: "Enzo Fernández",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/648195-1621170721.jpg?lm=1",
    },
    {
      id: 12,
      nombre: "Bruno Zuculini",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/648195-1621170721.jpg?lm=1",
    },
    {
      id: 13,
      nombre: "Enzo Pérez",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/56066-1625771376.png?lm=1",
    },
    {
      id: 14,
      nombre: "Leonardo Ponzio",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/7987-1625771532.png?lm=1",
    },
    {
      id: 15,
      nombre: "José Paradela",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/639152-1625771604.png?lm=1",
    },
    {
      id: 16,
      nombre: "Nicolás De La Cruz",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/397458-1625771741.png?lm=1",
    },
    {
      id: 17,
      nombre: "Jorge Carrascal",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/354145-1625771831.png?lm=1",
    },
    {
      id: 18,
      nombre: "Agustín Palavecino",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/610590-1625772025.png?lm=1",
    },
    {
      id: 19,
      nombre: "Julián Álvarez",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/576024-1625772294.png?lm=1",
    },
    {
      id: 20,
      nombre: "Federico Girotti",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/639149-1625772502.png?lm=1",
    },
    {
      id: 21,
      nombre: "Braian Romero",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/357937-1621169015.jpg?lm=1",
    },
    {
      id: 22,
      nombre: "Matías Suárez",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/66660-1625772580.png?lm=1",
    },
    {
      id: 23,
      nombre: "Agustín Fontana",
      foto: "https://img.a.transfermarkt.technology/portrait/medium/345229-1625772706.png?lm=1",
    },

  ],
  titulares: [],
  suplentes: [],
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "AGREGAR_TITULAR":
      return {
        ...state,
        titulares: [...state.titulares, action.jugador],
        jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
      };
    case "AGREGAR_SUPLENTE":
      return {
        ...state,
        suplentes: [...state.suplentes, action.jugador],
        jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
      };
    case "QUITAR_SUPLENTE":
      return {
        ...state,
        jugadores: [...state.jugadores, action.jugador],
        suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
      };
    case "QUITAR_TITULAR":
      return {
        ...state,
        jugadores: [...state.jugadores, action.jugador],
        titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
      };
    default:
      return state;
  }
}

export default createStore(reducer);
