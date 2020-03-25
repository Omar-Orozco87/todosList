export const todosAPI = () => {
  let todos = [
    {
      id: 1,
      name: "Complete open market challenge",
      description: " description one",
      subtodos: [
        {
          id: 11,
          name: "Simulate the API",
          description: " Simulate the API"
        },
        {
          id: 12,
          name: "Create the todosLister",
          description: " Create the todosLister"
        },
        {
          id: 13,
          name: "Create the todoViewer",
          description: " Create the todoViewer"
        }
      ]
    },
    {
      id: 2,
      name: "Upload code to github",
      description: "Upload code to github",
      subtodos: []
    },
    {
      id: 3,
      name: "Send email to recruter",
      description: "Send email to recruter",
      subtodos: []
    }
  ];

  const getAll = () => {
    return {
      ...todos
    };
  };

  return {
    getAll: getAll
  };
};
