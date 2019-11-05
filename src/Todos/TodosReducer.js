// ------------------------------------
// Constants
// ------------------------------------
export const TODOS_ADD = 'TODOS_ADD'
export const TODOS_REMOVE = 'TODOS_REMOVE'
export const TODOS_UPDATE = 'TODOS_UPDATE'

// ------------------------------------
// Actions
// ------------------------------------
export function add (todo = '') {
  return {
    type: TODOS_ADD,
    payload: todo
  }
}

export function remove (todo) {
  return {
    type: TODOS_REMOVE,
    payload: todo
  }
}

export function update (todo) {
  return {
    type: TODOS_UPDATE,
    payload: todo
  }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TODOS_ADD]: (state, action) => [...state, action.payload.todo],
  [TODOS_REMOVE]: (state, action) => state.filter(t => t !== action.payload),
  [TODOS_UPDATE]: (state, action) => state.map((t, idx) => idx === action.payload.id ? action.payload.todo : t )
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = ['Buy milk', 'Do exercises', 'Cook dinner']
export default function todosReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
