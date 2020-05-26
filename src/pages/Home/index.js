import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://assets.xtechcommerce.com/uploads/images/medium/8812880a9b3a4abb64e4ba6284d18fd6.png"
          alt="MacBook Pro"
        />
        <strong>MacBook Pro</strong>
        <span>R$11.000,29</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.xtechcommerce.com/uploads/images/medium/8812880a9b3a4abb64e4ba6284d18fd6.png"
          alt="MacBook Pro"
        />
        <strong>MacBook Pro</strong>
        <span>R$11.000,29</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.xtechcommerce.com/uploads/images/medium/8812880a9b3a4abb64e4ba6284d18fd6.png"
          alt="MacBook Pro"
        />
        <strong>MacBook Pro</strong>
        <span>R$11.000,29</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.xtechcommerce.com/uploads/images/medium/8812880a9b3a4abb64e4ba6284d18fd6.png"
          alt="MacBook Pro"
        />
        <strong>MacBook Pro</strong>
        <span>R$11.000,29</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>

      <li>
        <img
          src="https://assets.xtechcommerce.com/uploads/images/medium/8812880a9b3a4abb64e4ba6284d18fd6.png"
          alt="MacBook Pro"
        />
        <strong>MacBook Pro</strong>
        <span>R$11.000,29</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
    </ProductList>
  );
}
