const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    destructivelyAppendCat = cats.push("Ralph")
}

function destructivelyPrependCat() {
    destructivelyPrependCat = cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    destructivelyRemoveLastCat = cats.pop()
}

function destructivelyRemoveFirstCat() {
    destructivelyRemoveFirstCat = cats.shift()
}

function appendCat() {
    appendCat = [...cats, "Broom"]
    return appendCat
}

function prependCat() {
    prependCat = ["Arnold", ...cats]
    return prependCat
}

function removeLastCat() {
    removeLastCat = (cats.slice(0, 2))
    return removeLastCat
}

function removeFirstCat() {
    removeFirstCat = (cats.slice(1, 3))
    return removeFirstCat
}