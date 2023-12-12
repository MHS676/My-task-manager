// store/reducers.js
const initialState = {
  tasks: [],
  filteredTasks: [],
  activeCategory: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // ... (existing cases)
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        filteredTasks: state.activeCategory
          ? state.activeCategory === action.payload.category
            ? [...state.filteredTasks, action.payload]
            : state.filteredTasks
          : state.filteredTasks,
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId ? action.payload.editedTask : task
        ),
        filteredTasks: state.activeCategory
          ? state.activeCategory === action.payload.editedTask.category
            ? state.filteredTasks.map((task) =>
                task.id === action.payload.taskId ? action.payload.editedTask : task
              )
            : state.filteredTasks
          : state.filteredTasks,
      };
      
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        filteredTasks: state.activeCategory
          ? state.filteredTasks.filter((task) => task.id !== action.payload)
          : state.filteredTasks,
      };
    case 'FILTER_TASKS_BY_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload,
        filteredTasks: action.payload
          ? state.tasks.filter((task) => task.category === action.payload)
          : state.tasks,
      };
    default:
      return state;
  }
};

export default reducer;




