// is.num value is a number
is.num = (arg) => typeof(arg)==="number" ? true:false//operateur ternaire
// is.nan value is NaN
is.nan = (arg) => Number.isNaN(arg) ? true:false
// is.str value is a string
is.str = (arg) => typeof(arg)==="string" ? true:false
// is.bool value is a boolean
is.bool = (arg) => typeof(arg)==="boolean" ? true:false
// is.undef value is undefined
is.undef = (arg) => typeof(arg)==="undefined" ? true:false
// is.def value is defined
is.def = (arg) => typeof(arg)!="undefined" ? true:false
// is.arr value is an array
is.arr = (arg) => Array.isArray(arg) ? true:false
// is.obj value is a simple object or null objects
is.obj = (arg) => typeof(arg)==="object" ? true:false
// is.fun value is a function
is.obj = (arg) => typeof(arg)==="function" ? true:false
// is.truthy value is truthy
is.truthy = (arg) => arg ? true:false
// is.falsy value is falsy
is.falsy = (arg) => !(arg) ? true:false
