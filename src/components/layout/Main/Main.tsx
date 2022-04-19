import React, { FC } from 'react'

interface Props {
  children: JSX.Element[] | JSX.Element
}

const Main: FC<Props> = ({ children }) => {
  return <main>{children}</main>
}

export default Main
