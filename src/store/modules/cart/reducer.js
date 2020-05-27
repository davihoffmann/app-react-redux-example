export default function cart(state = [], action) {
  // 2 - A ACTION AVISA O REDUCER E O REDUCER FAZ AS ALTERAÇÕES NECESSÁRIAS
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ];
    default:
      return state;
  }
}
