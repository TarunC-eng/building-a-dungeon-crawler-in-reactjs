const initialState = {
  visible: false,
}

const modalReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        visible: true,
      }

    case 'HIDE_MODAL':
      return {
        ...state,
        visible: false,
      }

    default:
      return state
  }
}

export default modalReducer
