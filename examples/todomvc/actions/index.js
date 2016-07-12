import * as types from '../constants/ActionTypes'
import rsa from 'react-safe-actions'

export const addTodo = rsa.create(types.ADD_TODO, {
  text: rsa.types.string.isRequired
})

export const deleteTodo = rsa.create(types.DELETE_TODO, {
  id: rsa.types.number.isRequired
})

export const editTodo = rsa.create(types.EDIT_TODO, {
  id: rsa.types.number.isRequired,
  text: rsa.types.string.isRequired
})

export const completeTodo = rsa.create(types.COMPLETE_TODO, {
  id: rsa.types.number.isRequired
})

export const completeAll = rsa.create(types.COMPLETE_ALL)

export const clearCompleted = rsa.create(types.CLEAR_COMPLETED)
