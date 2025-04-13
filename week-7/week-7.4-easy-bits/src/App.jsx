import React from "react"
import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil"
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atom'
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
  // final count
  // but to optimise it you can use usememo for it 
  // but we will understand how to use Selector
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  // const totalNotificationCount = networknotification + jobsAtomCount + notificationCount + messagingCount;
  return (
    <>
     <button>Home</button>
     <button>My Network ({networknotification >= 100 ? "99+": networknotification})</button>
     <button>Jobs({jobsAtomCount})</button>
     <button>Messaging({messagingCount})</button>
     <button>Notification({notificationCount})</button>
     <button>Me ({totalNotificationCount}) </button>
    </>
  )
}