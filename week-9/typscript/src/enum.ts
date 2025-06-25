
// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings
//Example 1 - Game 
// Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.

// one way to tell that it should string but only run when 
// keypressed is up , down , right, left
// type keyinput = "up" | "down" | "right" | "left"
// lets solve this issue using enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed:Direction) {
    // do something
    if(keyPressed == Direction.Up) {
        // do something
    }
}

doSomething(Direction.Up)
doSomething(Direction.Right)
// if i try to key any random string ts will throw error 
// doSomething("sdfjasdj")
// ..
console.log(Direction.Down)
console.log(Direction.Left)