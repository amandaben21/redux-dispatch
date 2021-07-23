let state= {count: 0};

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
      default:
        return state;
      }
    }
    
    function dispatch(action){
      state = changeState(state, action)
      render()
    }

    function render(){
      document.body.textContent= state.count
    }
    render()
    
    dispatch({type: 'INCREASE_COUNT'})
    dispatch({type: 'INCREASE_COUNT'})
    dispatch({type: 'INCREASE_COUNT'})
    dispatch({type: 'INCREASE_COUNT'})
    
    
    
    
    
    
    //let state = {count: 0}
    //let action = {type: 'INCREASE_COUNT'}
    
    //changeState(state, action)
    
    //console.log(changeState(state, {type: 'INCREASE_COUNT'}))
    //console.log(changeState(state, {type: 'INCREASE_COUNT'})) --> It starts off as  zero, but when return it doesn't go beyond 1
    
    //console.log(state= changeState(state, {type: 'INCREASE_COUNT'}))
    //console.log(state= changeState(state, {type: 'INCREASE_COUNT'})) -->ressigning state to the return value of reducer. The second time called on changeState it will update state in its arguement
    
    //console.log(dispatch({type: 'INCREASE_COUNT'}))
    //console.log(dispatch({type: 'INCREASE_COUNT'}))