import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const prepareData = useCallback((data) => {
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks)
  }, [])

  const urlToSend = useMemo(() => {
    return {
      url: 'https://react-http-testing-2f51c-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
    }
  }, [])

  // using our custom hook
  const { isLoading, error, sendRequest: getTasks } = useHttp(
    urlToSend,
    prepareData
  )

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
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
