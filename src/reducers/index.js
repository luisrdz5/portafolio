const reducer = (state, action) => {
  let darkStatus;
  switch (action.type) {
    case 'TOGGLE_CHANGE':
      document.getElementById('toggle').checked = false;
      return {
        ...state,
        isChecked: false,
      };
      case 'TOGGLE_THEME':
        if(state.darkMode === 'light'){
          darkStatus = 'dark'
        }else{
          darkStatus = 'light'
        }
        return {
          ...state,
          darkMode: darkStatus,
        };
    default:
      return state;
  }
}

export default reducer;