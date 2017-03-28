import * as types from './mutation_types'

export function changeTitle (commit, title) {
  commit(
    {
      type: types.CHANGE_TITLE,
      title
    }
  )
}
