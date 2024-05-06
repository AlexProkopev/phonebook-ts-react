import { ChangeEvent } from "react";

type Props = {
    value: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
}

const FilterInput = ({value,onChange}: Props) => {

  return (
    <input type="text" onChange={onChange} value={value} placeholder="enter the text"/>
  )
}

export default FilterInput