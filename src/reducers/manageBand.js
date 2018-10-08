export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      console.log("manageBand", action.payload);
      const band = {
        id: Math.random() * 10,
        name: action.name
      };

      return { ...state, bands: [...state.bands, band] };

    case "DELETE_BAND":
      console.log("manageBand>state.bands", state.bands);
      return { bands: state.bands.filter(band => band.id !== action.id) };

    default:
      return state;
  }
}
