export const state = () => ({
  list: [
    {
      id: 1,
      name: 'a',
    },
    {
      id: 2,
      name: 'b',
    },
    {
      id: 3,
      name: 'c',
    },
  ],
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false },
  ],
})

export const getters = {
  getListData(state) {
    return state.list
  },
  doneTodos(state) {
    return state.todos.filter((todo) => todo.done)
  },
}

export const mutations = {}

export const actions = {}
