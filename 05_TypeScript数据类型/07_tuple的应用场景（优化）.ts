// function useState<T>(state: T) {
//   let currentState = state;
//   const changeState = (newState: T) => {
//     currentState = newState;
//   }

//   const tuple: [T, (newState: T) => void] = [currentState, changeState];
//   return tuple;
// }

function useState<T>(state: T): [T, (newState: T) => void] {
  let currentState = state;
  const changeState = (newState: T) => {
    currentState = newState;
  }

  return [currentState, changeState];
}

const [counter, setCounter] = useState(10);
setCounter(1000);

const [title, setTitle] = useState('abc');
setTitle('title');
