import * as types from '../constants/ActionTypes'
import PropTypes from 'prop-types'
import createAction from 'react-safe-actions'

export const addTodo = createAction(types.ADD_TODO, {
  text: PropTypes.string.isRequired
})

export const deleteTodo = createAction(types.DELETE_TODO, {
  id: PropTypes.number.isRequired
})

export const editTodo = createAction(types.EDIT_TODO, {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
})

export const completeTodo = createAction(types.COMPLETE_TODO, {
  id: PropTypes.number.isRequired
})

export const completeAll = createAction(types.COMPLETE_ALL)

export const clearCompleted = createAction(types.CLEAR_COMPLETED)
