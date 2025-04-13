import {atom , selector} from "recoil"

// atom for network
export const networkAtom = atom({
    key: "networkAtom",
    default: 102

})

// atom for Job
export const jobAtom = atom({
    key: "jobAtom",
    default: 0
})

// atom for notificationAtom
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
})

// atom for messaging 
export const  messagingAtom = atom({
    key: "messagingAtom",
    default:0 
})

// create selector
export const totalNotificationSelector = selector({
key: "totalNotificationSelector" ,
get:  ({get}) => {
    const networkAtomCount = get(networkAtom)
    const jobAtomCount = get(jobAtom)
    const notificationAtomCount= get(notificationAtom)
    const messagingAtomCount = get(messagingAtom)
    return networkAtomCount + jobAtomCount + messagingAtomCount + notificationAtomCount
}
})
