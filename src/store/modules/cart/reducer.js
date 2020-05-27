import produce from 'immer';

export default function cart(state = [], action) {
  // 2 - A ACTION AVISA O REDUCER E O REDUCER FAZ AS ALTERAÇÕES NECESSÁRIAS
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    default:
      return state;
  }
}
