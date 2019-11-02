const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    counterDOM.innerHTML = state.value;
    counterDOM.style.color = state.color;
    // document.body.style.background = state.color;
}