// actions
const createActionName = actionName => `app/searchString/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// actions creators
export const updateSearchstring = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

const searchStringReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'UPDATE_SEARCHSTRING':
      return { ...statePart, searchString: action.payload }
    default:
      return statePart;
  }
}

export default searchStringReducer;