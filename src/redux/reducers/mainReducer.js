import * as types from "../actions/types";

const initialState = {
  orgName: "Christen Nürnberg",
  nav: [
    {
      id: "gottesdienst",
      title: "Gottesdienst",
      image: "/images/Kirche.jpg",
      type: "content"
    },
    {
      id: "bibelkunde",
      title: "Bibelkunde",
      image: "/images/Bibel.jpg",
      type: "content"
    },
    {
      id: "gebet",
      title: "Gebet",
      image: "/images/Gebet.jpg",
      type: "content"
    },
    {
      id: "seelsorge",
      title: "Seelsorge",
      image: "/images/Seelsorge.jpg",
      type: "chat"
    }
    // {
    //   id: "pinnwand",
    //   title: "Pinnwand",
    //   image: "/images/x.jpg",
    //   type: "chat"
    // },
    // {
    //   id: "admin",
    //   title: "Administration",
    //   image: "/images/x.jpg",
    //   type: "admin"
    // }
  ],
  fetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case types.MAIN_FETCHING:
      return { ...state, fetching: true };
    case types.MAIN_FETCH:
      return { ...state, items: action.payload, fetching: false };
  }
}
