export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      const band = {
        name: action.name,
        id: Math.random() * 100000000000000000
      };

      return {
        bands: [...state.bands, band]
      };

    case "DELETE_BAND":
      console.log(action);

      return {
        bands: state.bands.filter(b => b.id !== action.id)
      };

    default:
      return state;
  }
}
