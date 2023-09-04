import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);



  // using our custom hook
  const { isLoading, error, sendRequest: getTasks } = useHttp()

  useEffect(() => {
    // we dont need useCallback here because the func is not a external dependency
    // to useEffect anymore, hence it will not cause an inf loop 
    const prepareData = (data) => {
      console.log('App.js-prepareData running')
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks)
    }


    getTasks({
      url: 'https://react-http-testing-2f51c-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
    },
      prepareData
    );
  }, [getTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task)
    );
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={getTasks}
      />
    </React.Fragment>
  );
}

export default App;
