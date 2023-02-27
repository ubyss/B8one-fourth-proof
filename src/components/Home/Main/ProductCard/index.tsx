import { IProducts } from "../../../../interface/IProduct";

const ProductCard: React.FC<{ product: IProducts }> = ({ product }) => {
  const { image, name, listPrice, price, installments } = product;

  return (
    <div className="product-card">
      <img className="product-card__img" src={image}></img>
      <h4 className="product-card__product-name">{name}</h4>

      <span className="product-card__old-price">{listPrice}</span>
      <div className="product-card__price-container">
        <h3 className="product-card__disconted-price">{price}</h3>
        <div className="product-card__disconted-container">
          <div className="product-card__discount-icon">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 5L6 7L8 5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="0.75"
                y="0.75"
                width="10.5"
                height="10.5"
                rx="5.25"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <span className="product-card__discount-text">
        à vista no pix ou cartão de crédito
      </span>

      <div className="product-card__card-container">
        <div className="product-card__card-container__card-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.1591 3.75H2.84091C1.96227 3.75 1.25 4.44956 1.25 5.3125V14.6875C1.25 15.5504 1.96227 16.25 2.84091 16.25H17.1591C18.0377 16.25 18.75 15.5504 18.75 14.6875V5.3125C18.75 4.44956 18.0377 3.75 17.1591 3.75Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.25 8.4375H18.75"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span className="product-card__card-container__card-text">
          <span className="product-card__card-container__card-text__price">
            R$ {price}{" "}
          </span>
          <div className="product-card__card-container__card-text__bottom">
            <span>em até</span>
            <span> {installments}x </span>
            <span>de </span>
            <span>R$ {listPrice}</span>
          </div>
        </span>
      </div>
      <button className="product-card__card-container__add-to-cart">
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ProductCard;
