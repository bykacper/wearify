import shoppingCartIcon from '../../assets/shoppingCartIcon.png';

const CartButton = () => {
    return (
        <button className='cart-button'>
            Koszyk
            <img src={shoppingCartIcon} alt="Koszyk z zakupami" />
        </button>
    )
}

export default CartButton;