import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSetQueryAction } from '../redux/actions';

const SearchTask = () => {

  const queryState = useSelector((state) => state.queryReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(getSetQueryAction(e.target.value));
  }

  return (
    <>
      <input type="text" name="text" id='search-box' placeholder="Search task..." onChange={handleChange} />
    </>
  )
}

export default SearchTask