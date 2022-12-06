import { CSSProperties, FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const style: CSSProperties = {
    height: '100vh',
  }

  return (
    <>
      <main>
        <section style={style}>{children}</section>
      </main>
    </>
  )
}
