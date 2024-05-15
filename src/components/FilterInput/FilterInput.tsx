import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contacts/contactsSlice";
import { selectFilter } from "../../redux/contacts/contacts.selectors";


const FilterInput = () => {
  const dispatch = useDispatch()
  const valueFilter = useSelector(selectFilter)
 
   const onFilter = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input type="text" onChange={onFilter} value={valueFilter} placeholder="enter the text"/>
  )
}

export default FilterInput