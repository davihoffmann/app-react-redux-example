import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  // QUANTIDADE DISPONÍVEL EM STOCK
  const stockAmount = stock.data.amount;

  /**
   * CASO O PRODUTO JA ESTIVER NO CARRINHO,
   * USA A QUANTIDADE QUE ESTA LA, SE NAO É 0
   */
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  /**
   * VERIFICA SE A QUANTIDADE DE PRODUTO QUE ESTA SENDO ADICIONADO,
   * ESTÁ DISPONÍVEL NO STOCK
   */
  if (amount > stockAmount) {
    console.tron.warn('ERRO');
    return;
  }

  if (productExists) {
    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
