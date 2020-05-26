import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://assets.xtechcommerce.com/uploads/images/medium/8812880a9b3a4abb64e4ba6284d18fd6.png"
                alt="MacBook Pro"
              />
            </td>
            <td>
              <strong>MacBook Pro</strong>
              <span>R$11.000,29</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#191920" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#191920" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#191920" />
              </button>
            </td>
          </tr>
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
