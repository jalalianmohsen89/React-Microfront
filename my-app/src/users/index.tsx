import React from "react";
import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { save } from '../store/reducer'

const Users = (): JSX.Element => {
  const textField = useSelector((state: RootState) => state.text.textField)
  const dispatch = useDispatch()
  return (
      <div onClick={() =>dispatch(save('users page'))}>{textField}</div>
  )
}

export default Users