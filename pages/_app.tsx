import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import type { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import { TinySlackStoreContext, useTinySlackStore } from '../lib/stores/tinySlack.store'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const tinySlackStore = useTinySlackStore()

  return (
    <SessionProvider session={session} refetchInterval={5 * 60} refetchOnWindowFocus={true}>
      <TinySlackStoreContext.Provider value={tinySlackStore}>
        <Component {...pageProps} />
      </TinySlackStoreContext.Provider>
    </SessionProvider>
  )
}
