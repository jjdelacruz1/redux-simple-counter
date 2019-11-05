const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))
// dispatch({type: 'INIT'})
// setTimeout(function () {
//   dispatch({type 'COLORCHANGE', color: 'red'})
// }, 1000)

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

const increment5Button = document.getElementById('increment5');
increment5Button.addEventListener('click', e => dispatch({ type: "INCREMENTFIVE" }));

const decrement5Button = document.getElementById('decrement5');
decrement5Button.addEventListener('click', e => dispatch ({ type: "DECREMENTFIVE" }))

const pickColor = document.getElementById('colorChanger')
pickColor.addEventListener('change', e => 
  dispatch ({ type: "COLORCHANGE", color: pickColor.value})
)

const reset = document.getElementById('reset');
reset.addEventListener('click', e => dispatch ({ type: "RESET" }))

const newValue = document.getElementById('newValue')
newValue.addEventListener('keyup', function(e) {
  if (e.keyCode ===13) {
    dispatch ({ type: "NEWVALUE" })
  }
})

const addCounter = document.getElementById('addCounter');
addCounter.addEventListener('click', e => dispatch ({ type: "ADDCOUNTER" }))

const removeCounter = document.getElementById('removeCounter');
removeCounter.addEventListener('click', e => dispatch({ type: "REMOVECOUNTER" }))