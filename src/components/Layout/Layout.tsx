import React, { FC } from 'react'

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
}

const Layout: FC<LayoutProps> = ({ children }) => <main>{children}</main>

export default Layout
