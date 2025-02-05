const initialState = {
    value: 0,
    color: 'black'
}

function deepCopy (x) {
    return JSON.parse(JSON.stringify(x))
}

const reducer = (currentState, action) => {

    console.log('Here is the action:', action)
    console.log('==================')

    // first run: there is no state
    if (!currentState) {
        return deepCopy(initialState)
    }

    let nextState = deepCopy(currentState)
    const { type } = action;
    if (type === "INCREMENT") {
        nextState.value = nextState.value + 1
    } 

    else if (type === "DECREMENT") {
        nextState.value = nextState.value -1
    }

    else if (type === "INCREMENTFIVE") {
        nextState.value = nextState.value + 5
    }

    else if (type === "DECREMENTFIVE") {
        nextState.value = nextState.value - 5
    }

    else if (type === "COLORCHANGE") {
        nextState.color = pickColor.value
    }

    else if (type === "NEWVALUE") {
        nextState.value = parseInt(newValue.value)
    }

    else if (type === "RESET") {
        nextState.value = 0
    }

    else if (type === "ADDCOUNTER") {
        //add another counter
    }

    else if (type === "REMOVECOUNTER") {
        //remove the last counter
    }

    return nextState
}
