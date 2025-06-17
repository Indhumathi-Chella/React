// const sayHello = (times) => new Array(times).fill(1).map((a, i) => `Hello:${i}`);
// const sum = (a, b) => a + b;


// const element = document.createElement("h2")
// element.innerHTML = `${sayHello(5).join('<br>')} <br> sum : ${sum(5,8)}`;

// document.body.append(element);

import {createRoot} from 'react-dom/client';
// import Welcome from './components/Welcome';
import App from './components/App'

const root = document.getElementById('root');
createRoot(root).render(< App />);
