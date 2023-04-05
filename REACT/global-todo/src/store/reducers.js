export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };
    case "CREATE_NEW_TASK":
      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };

    case "SHOW_MODAL":
      return {
        ...state,
        isModalVisibile: !state.isModalVisibile,
      };
    case "SET_ID":
      return {
        ...state,
        newTodoObj: {
          ...state.newTodoObj,
          id: action.payload.id,
        },
      };
    case "SET_USERNAME":
      return {
        ...state,
        newTodoObj: {
          ...state.newTodoObj,
          username: action.payload,
        },
      };
    case "SET_IMAGE":
      return {
        ...state,
        newTodoObj: {
          ...state.newTodoObj,
          image: action.payload,
        },
      };
    case "SET_TODO":
      return {
        ...state,
        newTodoObj: {
          ...state.newTodoObj,
          todo: action.payload,
        },
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasksListData: state.tasksListData.filter(
          (task) => task.id !== action.payload
        ),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasksListData: state.tasksListData.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                completed: !task.completed,
              }
            : task
        ),
      };
  }
};
