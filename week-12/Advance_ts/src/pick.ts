// # 1] Pick

// The `Pick` utility type in TypeScript is a powerful feature that allows you to construct new types by selecting a subset of properties from an existing type. This can be particularly useful when you need to work with only certain fields of a complex type, enhancing type safety and code readability without redundancy.

// ### Understanding `Pick`

// The `Pick` utility type is part of TypeScript's mapped types, which enable you to create new types based on the keys of an existing type. The syntax for `Pick` is as follows:

// ```tsx
// Pick<Type, Keys>

// ```

// - `Type`: The original type you want to pick properties from.
// - `Keys`: The keys (property names) you want to pick from the `Type`, separated by `|` (the union operator).
interface Users {
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}

// pick 
type UpdateProps = Pick<Users,'name'|"age"|"password">
function updateUser(updateProps:UpdateProps) {
    // hit the database to update the user
}