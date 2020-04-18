import React from 'react';
import { connect } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

import {
    Container,
    ProductTable,
    Total,
    HeaderProduct,
    BodyProduct,
    ImageProduct,
} from './styles';

import { formatPrice } from '../../utils/format';

function Cart({ cart, total, removeFromCart, updateAmount }) {
    function increment(product) {
        updateAmount(product.id, product.amount + 1);
    }

    function decrement(product) {
        updateAmount(product.id, product.amount - 1);
    }

    return (
        <Container>
            <ProductTable>
                {cart.map(product => (
                    <>
                        <ImageProduct>
                            <img src={product.image} alt={product.title} />
                        </ImageProduct>
                        <HeaderProduct>
                            <li>PRODUTO</li>
                            <li>QTD</li>
                            <li>SUBTOTAL</li>
                            <li />
                        </HeaderProduct>
                        <BodyProduct>
                            <li>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </li>
                            <li>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(product)}
                                    >
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#000"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => increment(product)}
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#000"
                                        />
                                    </button>
                                </div>
                            </li>
                            <li>
                                <strong>{product.subTotal}</strong>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    <MdDelete size={20} color="#000" />
                                </button>
                            </li>
                        </BodyProduct>
                    </>
                ))}

                <footer>
                    <button type="button"> Finalizar pedido</button>

                    <Total>
                        <span>TOTAL</span>
                        <strong>{total}</strong>
                    </Total>
                </footer>
            </ProductTable>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subTotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    ),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
