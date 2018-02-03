import store from '../../config/store'

export function startFight() {
  store.dispatch({ type: "SHOW_MODAL" })
}