import React from "react"
import {RecoilRoot, useRecoilValue} from "recoil"
import { jobAtom, messagingAtom, networkAtom, notificationAtom } from './atom'
function App() {

  return (
    <>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
    </>
  )
}

export default App


// componenet
function MainApp() {
  const networknotification = useRecoilValue(networkAtom) 
  const jobsAtomCount = useRecoilValue(jobAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  return (
    <>
     <button>Home</button>
     <button>My Network ({networknotification >= 100 ? "99+": networknotification})</button>
     <button>Jobs({jobsAtomCount})</button>
     <button>Messaging({messagingCount})</button>
     <button>Notification({notificationCount})</button>
     <button>Me</button>
    </>
  )
}