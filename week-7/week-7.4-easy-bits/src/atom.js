import {atom} from "recoil"

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


