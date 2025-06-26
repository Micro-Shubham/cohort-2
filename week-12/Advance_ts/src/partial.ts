interface User2 {
    id:string,
    name:string,
    email:string,
    password:string,
    age:number
}

type UpdatePick = Pick<User2,"name"|"age" |"password">
// using partial to update following by making it optional
type UpdateOption = Partial<UpdatePick>

function updater(newupdate:UpdateOption) {
    // hit the database to update the user
}
