import { useEffect, useState } from "react"

export function Search({ setProducts, setSearchValues }) {
  const [value, setValue] = useState('')

  const onChangeHandler = e => {
    setValue(e.target.value)
    setSearchValues(e.target.value)
  }

  return (
    <>
      <input type="search" value={value} onChange={onChangeHandler} />
    </>
  )
}
