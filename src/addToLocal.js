import tasks from './tasks.js';

const addtoLocal = () => localStorage.setItem('tasks', JSON.stringify(tasks));


export default addtoLocal;
