const initialState = {
  total: 0,
  totalPrice: 0,
  items: {
    Tamales: {
      num: 0,
      img: "http://www.cubaenmiami.com/wp-content/uploads/2018/10/tamales-cubanos.jpg",
      title: "Tamales",
      price: "2.95",
      description: "",
      meal: "appetizer",
    },
    "Fritas de platano": {
      num: 0,
      img: "https://previews.123rf.com/images/rgbspace/rgbspace0810/rgbspace081000326/3757725-plato-t%C3%ADpico-cubano-rebanadas-de-pl%C3%A1tano-frito.jpg",
      title: "Fritas de platano",
      price: "4.95",
      description: "",
      meal: "appetizer",
    },
    Fries: {
      num: 0,
      img: "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/C/Como-hacer-papas-fritas-crujientes-000.jpg",
      title: "Fries",
      price: "4.75",
      description: "",
      meal: "appetizer",
    },
    "Cheese and jam": {
      num: 0,
      img: "https://www.callmepmc.com/wp-content/uploads/2015/05/Cuban-Sandwich-on-a-Stick-Appetizer-1w.jpg",
      title: "Cheese and jam",
      price: "3.95",
      description: "",
      meal: "appetizer",
    },
    "Cuban sandwich square": {
      num: 0,
      img: "https://assets.myfoodandfamily.com/adaptivemedia/rendition/CubanSandwichAppSquares_01.jpg?id=9f39b9bb8ddc8011b9238ca119021808ff80f75f&ht=650&wd=1004",
      title: "Cuban sandwich square",
      price: "6.50",
      description: "",
      meal: "appetizer",
    },
    "Papas Rellenas": {
      num: 0,
      img: "https://www.pointsandtravel.com/wp-content/uploads/2020/06/Papas-Rellenas.jpg",
      title: "Papas Rellenas",
      price: "8.95",
      description: "",
      meal: "appetizer",
    },
    "Ropa Vieja": {
      num: 0,
      img: "https://media.bandbcuba.com/media/uploads/typical_cuban_dishes_you_must_try_while_in_the_island.jpg",
      title: "Ropa Vieja",
      price: "7.95",
      description: "",
      meal: "main",
    },
    "Arroz Imperial": {
      num: 0,
      img: "https://s3.amazonaws.com/secretsaucefiles/photos/images/000/177/546/large/FullSizeRender_4.jpg?1504667199",
      title: "Arroz Imperial",
      price: "8.50",
      description: "",
      meal: "main",
    },
    "Yellow rice and chicken": {
      num: 0,

      img: "https://www.foodtourshavana.com/wp-content/uploads/2017/08/arroz-con-pollo-chicken-rice-750x422.jpg",
      title: "Yellow rice and chicken",
      price: "8.95",
      description: "",
      meal: "main",
    },
    "Rice and beans": {
      num: 0,
      img: "https://images.squarespace-cdn.com/content/v1/57558c333c44d8fceeb7802f/1514776948521-7WH2JKW5TSBQSX0TEECZ/cubaveg",
      title: "Rice and beans",
      price: "7.95",
      description: "",
      meal: "main",
    },
    Picadillo: {
      num: 0,
      img: "https://www.gannett-cdn.com/-mm-/9442ebff27aa307914bc3eee8e6714ec80d9b732/c=0-188-3600-2213/local/-/media/Phoenix/2015/04/07/B9316203453Z.1_20150407115927_000_GPIACS5BN.1-0.jpg",
      title: "Picadillo",
      price: "7.50",
      description: "",
      meal: "desert",
    },
    "Cuban sandwich": {
      num: 0,
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2304&h=1152&url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4470535.jpg",
      title: "Cuban sandwich",
      price: "4.95",
      description: "",
      meal: "desert",
    },
    Flan: {
      num: 0,
      img: "data:image/jpeg;base64,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",
      title: "Flan",
      price: "8.50",
      description: "",
      meal: "desert",
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        total: state.total + action.num,
        totalPrice:
          state.totalPrice + state.items[action.title].price * action.num,
        items: {
          ...state.items,
          [action.title]: {
            ...state.items[action.title],
            num: state.items[action.title].num + action.num,
          },
        },
      };
      break;
    case "SET":
      state = {
        ...state,
        total: state.total + action.num,
        totalPrice:
          state.totalPrice + state.items[action.title].price * action.num,
        items: {
          ...state.items,
          [action.title]: {
            ...state.items[action.title],
            num: action.num,
          },
        },
      };
      break;
    case "SUB":
      state = {
        ...state,
        total: state.total - action.num,
        totalPrice:
          state.totalPrice - state.items[action.title].price * action.num,
        items: {
          ...state.items,
          [action.title]: {
            ...state.items[action.title],
            num: state.items[action.title].num - action.num,
          },
        },
      };
      break;
    case "ZERO":
      state = {
        ...state,
        total: state.total - state.items[action.title].num,
        totalPrice:
          state.totalPrice -
          state.items[action.title].num * state.items[action.title].price,
        items: {
          ...state.items,
          [action.title]: {
            ...state.items[action.title],
            num: 0,
          },
        },
      };
      break;
    case "RESET":
      state = initialState;
      break;
  }

  return state;
};
