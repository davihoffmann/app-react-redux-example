import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <th>&nbsp;</th>
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#191920" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#191920" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.price}</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#191920" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = (staet) => ({
  cart: staet.cart,
});

export default connect(mapStateToProps)(Cart);
