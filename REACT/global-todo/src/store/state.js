export const initialState = {
  tasksListData: [
    {
      id: 1,
      todo: "Do something nice for someone I care about",
      completed: true,
      username: "Ironman",
      image: "https://robohash.org/ironman.png ",
    },
    {
      id: 2,
      todo: "Memorize the fifty states and their capitals",
      completed: false,
      username: "Doctor Strange",
      image: "https://robohash.org/doctorstrange.png ",
    },
  ],
  isModalVisibile: false,
  newTodoObj: {
    id: null,
    username: "",
    todo: "",
    completed: false,
    image: "",
  },
};
