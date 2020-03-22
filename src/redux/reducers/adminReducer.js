const initialState = {
  nav: [
    {
      id: "member",
      title: "Mitglieder",
      image: false
    },
    {
      id: "category",
      title: "Kategorien",
      image: false
    },
    {
      id: "content",
      title: "Inhalte",
      image: false
    }
  ],
  fetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
