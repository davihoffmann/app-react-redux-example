import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.png';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Loja da Maçã" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

/**
 * 3 - REDUX AVISA TODOS OS COMPONENTES QUE ESTÃO OUVINDO O REDUCER PARA QUE
 *     ELES SE ATUALIZEM COM A NOVA INFORMAÇÃO
 * */
export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
