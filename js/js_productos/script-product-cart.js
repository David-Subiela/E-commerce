// Agregar controlador de eventos al botón "Añadir al carrito"
const addToCartButton = document.querySelector(".add-cart");
addToCartButton.addEventListener("click", addToCart);

function addToCart(event) {
  event.preventDefault();

  // Obtener los detalles del producto
  const productTitle = document.querySelector(".details__title").textContent;
  const productPrice = document.querySelector(".price").textContent;
  const productQuantity = document.querySelector(".input__number").value;

  // Crear un objeto con los detalles del producto
  const product = {
    title: productTitle,
    price: productPrice,
    quantity: parseInt(productQuantity),
  };

  // Actualizar la cantidad de productos en el carrito
  const cartCount = document.querySelector(".header__cart--notification");
  const currentCount = parseInt(cartCount.textContent);
  cartCount.textContent = currentCount + product.quantity;

  // Mostrar los detalles del carrito en el modal correspondiente
  const cartProductList = document.getElementById("modal-cart-product-list");
  const productItem = document.createElement("div");
  productItem.textContent = `${product.title} - ${product.price} - ${product.quantity}`;
  cartProductList.appendChild(productItem);

  // Abrir el modal del carrito
  const modalCart = document.getElementById("modal-cart");
  modalCart.style.display = "block";

  // Obtén una referencia al botón de cierre de la ventana modal
  let modalCloseButton = document.querySelector(".modal-cart-close");
  // Agrega un controlador de eventos al botón de cierre
  modalCloseButton.addEventListener("click", function () {
    // Oculta la ventana modal
    const modalCart = document.getElementById("modal-cart");
    modalCart.style.display = "none";
  });
}
