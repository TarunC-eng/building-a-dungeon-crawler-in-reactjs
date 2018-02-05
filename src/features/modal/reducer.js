const initialState = {
  visible: false,
}

const modalReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SHOW_MODAL':
      return {
        visible: true,
        ...action.payload,
      }
    case 'HIDE_MODAL':
      return {
        visible: false,

      }
    default:
      return state
  }
}

export default modalReducer
