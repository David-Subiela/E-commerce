// Array para almacenar los productos seleccionados con su cantidad
let selectedProducts = [];

// Obtén una referencia a todos los botones "Añadir al carrito"
let addButtonList = document.querySelectorAll(".add-cart");
let cartNotification = document.querySelector(".header__cart--notification");
let cartNotificationHidden = document.querySelector(
  ".header__cart--notification-oculto"
);
let lastValue = parseInt(cartNotification.innerText);
let lastValueHidden = parseInt(cartNotificationHidden.innerText);

// Agrega un controlador de eventos a cada botón "Añadir al carrito"
addButtonList.forEach(function (addButton) {
  addButton.addEventListener("click", function () {
    // Obtén la información del producto añadido
    let productItem = this.closest(".item");
    let productName = productItem.querySelector("h2").textContent;
    let productPrice = productItem.querySelector(".price-rebaja").textContent;
    let productImageSrc = productItem.querySelector("img").src;

    // Busca si el producto ya está en el carrito
    let existingProduct = selectedProducts.find(function (product) {
      return product.name === productName;
    });

    if (existingProduct) {
      // Si el producto ya está en el carrito, incrementa su cantidad
      existingProduct.quantity++;
    } else {
      // Si el producto no está en el carrito, crea un objeto para representarlo
      let product = {
        name: productName,
        price: productPrice,
        imageSrc: productImageSrc,
        quantity: 1,
      };
      // Agrega el producto al array de productos seleccionados
      selectedProducts.push(product);
    }

    // Actualiza la ventana modal con la lista de productos seleccionados
    updateModalProductList();

    // Muestra la ventana modal
    const modalCart = document.getElementById("modal-cart");
    modalCart.style.display = "block";
  });
});

// Obtén una referencia al botón de cierre de la ventana modal
let modalCloseButton = document.querySelector(".modal-cart-close");
// Agrega un controlador de eventos al botón de cierre
modalCloseButton.addEventListener("click", function () {
  // Oculta la ventana modal
  const modalCart = document.getElementById("modal-cart");
  modalCart.style.display = "none";
});

// Función para actualizar la lista de productos en la ventana modal
function updateModalProductList() {
  let modalProductList = document.getElementById("modal-cart-product-list");
  let modalEmptyMessage = document.getElementById("modal-cart-empty-message");
  let modalForm = document.querySelector(".modal-cart-form");
  let modalPrice = document.querySelector(".modal-cart-price");
  let modalFinal = document.querySelector(".modal-cart-final");
  let countElement = document.getElementById("cart-count"); // Elemento <h2> con el número de productos
  let cartButton = document.querySelector(".principal-cartChart");
  let cartButtonScroll = document.querySelector(".principal-cartChart-oculto");

  // Verifica si hay productos en el carrito
  if (selectedProducts.length === 0) {
    modalProductList.style.display = "none"; // Oculta la lista de productos
    modalEmptyMessage.style.display = "flex"; // Muestra el mensaje de carrito vacío
    modalForm.style.display = "none"; // Oculta el formulario
    modalPrice.style.display = "none"; // Oculta el precio total
    modalFinal.style.display = "none"; // Oculta el botón de finalizar compra
  } else {
    modalProductList.style.display = "block"; // Muestra la lista de productos
    modalEmptyMessage.style.display = "none"; // Oculta el mensaje de carrito vacío
    modalForm.style.display = "grid"; // Muestra el formulario
    modalPrice.style.display = "block"; // Muestra el precio total
    modalFinal.style.display = "block"; // Muestra el botón de finalizar compra

    modalProductList.innerHTML = "";

    // Recorre los productos seleccionados y crea elementos de lista para cada uno
    selectedProducts.forEach(function (product, index) {
      // Creamos div principal
      let listItem = document.createElement("div");
      listItem.classList.add("product-info");
      // Creamos div secundarios (dentro del principal)
      // Primer div secundario
      let productImgdetails = document.createElement("div");
      productImgdetails.className = "product-img-title";
      // Segundo div secundario
      let productDetails = document.createElement("div");
      productDetails.className = "product-info-details";
      // Tercero div secundario
      let productInfoprice = document.createElement("div");
      productInfoprice.className = "product-info-details-price";

      let productImage = document.createElement("img");
      productImage.src = product.imageSrc;
      productImage.alt = "Imagen del producto";

      let productName = document.createElement("h3");
      productName.textContent = product.name;
      productName.className = "product-info-name";

      let minusPrice = document.createElement("img");
      minusPrice.className = "input__minus";
      minusPrice.src = "/assets/img/svg/icon-minus.png";
      minusPrice.alt = "Botón disminuir precio";
      minusPrice.addEventListener("click", function () {
        decreaseProductQuantity(index);
      });

      let inputNumber = document.createElement("input");
      inputNumber.className = "input__number";
      inputNumber.type = "text";
      inputNumber.value = selectedProducts[index].quantity;

      let plusPrice = document.createElement("img");
      plusPrice.className = "input__plus";
      plusPrice.src = "/assets/img/svg/icon-plus.png";
      plusPrice.alt = "Botón aumentar precio";
      plusPrice.addEventListener("click", function () {
        increaseProductQuantity(index);
      });

      // Función para disminuir la cantidad de un producto en el carrito
      function decreaseProductQuantity(index) {
        if (selectedProducts[index].quantity > 1) {
          selectedProducts[index].quantity--;
          inputNumber.value = selectedProducts[index].quantity; // Actualiza el valor del inputNumber
          updateModalProductList();
          updateCartCount();
        }
      }
      // Función para aumentar la cantidad de un producto en el carrito
      function increaseProductQuantity(index) {
        selectedProducts[index].quantity++;
        inputNumber.value = selectedProducts[index].quantity; // Actualiza el valor del inputNumber
        updateModalProductList();
        updateCartCount();
      }

      let productPrice = document.createElement("p");
      productPrice.textContent = `${product.price}`;
      productPrice.className = "product-info-price";

      // Agregamos los elementos secundarios al div principal
      /* Primer div secundario */
      productImgdetails.appendChild(productImage);

      /* Segundo div secundario */
      productDetails.appendChild(productName);
      productDetails.appendChild(minusPrice);
      productDetails.appendChild(inputNumber);
      productDetails.appendChild(plusPrice);

      // Agregamos los div secundarios al div principal
      listItem.appendChild(productImgdetails);
      listItem.appendChild(productDetails);
      listItem.appendChild(productInfoprice);

      // Agregamos el div principal al contenedor
      modalProductList.appendChild(listItem);

      if (index >= 0) {
        listItem.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
        listItem.style.marginTop = "25px";
        listItem.style.marginBottom = "23px";
      }

      // Función para eliminar un producto del carrito
      function removeProductFromCart(productId) {
        // Encuentra el índice del producto en el arreglo de productos seleccionados
        const index = selectedProducts.findIndex(
          (product) => product.id === productId
        );
        if (index > -1) {
          // Elimina el producto del arreglo
          selectedProducts.splice(index, 1);
          // Actualiza la lista de productos en la ventana modal
          updateModalProductList();
        }
      }

      let listDeleteitem = document.createElement("div");
      listDeleteitem.classList.add("product-info-delete");

      // Agrega un botón "Eliminar" junto a cada producto
      const deleteButton = document.createElement("img");
      deleteButton.className = "recicle-bin-img";
      deleteButton.src = "/assets/img/carrito/recicle-bin.png";
      deleteButton.alt = "Eliminar producto";

      deleteButton.addEventListener("click", function () {
        removeProductFromCart(product.id);
      });
      /* Tercero div secundario */
      productInfoprice.appendChild(deleteButton);
      productInfoprice.appendChild(productPrice);
    });

    // Actualiza el contenido del elemento countElement
    function updateCartCount() {
      countElement.textContent =
        "Productos añadidos al carrito (" + getTotalQuantity() + ")";
      updateCartButtonClass(); // Actualiza la clase principal-cartChart
    }

    // Función para actualizar la clase principal-cartChart
    function updateCartButtonClass() {
      if (selectedProducts.length > 0) {
        cartButton.classList.add("active");
        cartButtonScroll.classList.add("active");
      } else {
        cartButton.classList.remove("active");
        cartButtonScroll.classList.remove("active");
      }
    }

    // Inicializar el contador de productos al cargar la página
    updateCartCount();
    // Actualizar la clase principal-cartChart al cargar la página
    updateCartButtonClass();
  }

  /* Añadir el total de productos al carrito imagen superior con redonda rosada */
  let userInputNumber = 0;
  /* Carrito Encabezado */
  lastValue = lastValue + userInputNumber;
  cartNotification.innerText = getTotalQuantity();

  /* Carrito Scroll */
  lastValueHidden = lastValueHidden + userInputNumber;
  cartNotificationHidden.innerText = getTotalQuantity();

  // Función para obtener la cantidad total de productos en el carrito
  function getTotalQuantity() {
    let totalQuantity = 0;
    selectedProducts.forEach(function (product) {
      totalQuantity += product.quantity;
    });
    return totalQuantity;
  }

  // Antes de actualizar la lista de productos, verifica si el carrito está vacío
  if (selectedProducts.length === 0) {
    countElement.textContent = "Productos añadidos al carrito (0)";
    totalPriceElement.textContent = "0.00";
    return;
  }
}

// Obtén una referencia al carrito de compra
let cartButton = document.querySelector(".principal-cartChart");
let cartButtonScroll = document.querySelector(".principal-cartChart-oculto");

// Agrega un controlador de eventos al carrito de compra
cartButton.addEventListener("click", function () {
  // Muestra la ventana modal
  document.getElementById("modal-cart").style.display = "block";
});
// Agrega un controlador de eventos al carrito de compra con SCROLL
cartButtonScroll.addEventListener("click", function () {
  // Muestra la ventana modal
  document.getElementById("modal-cart").style.display = "block";
});
