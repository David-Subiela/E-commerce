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
    let productPrice = productItem.querySelector(".price").textContent;
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
  /* let totalPriceElement = document.getElementById("total-price");  */ // Elemento con el precio total

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

      /*     let productQuantity = document.createElement("p");
      productQuantity.textContent = `Cantidad: ${product.quantity}`;
      productQuantity.className = "product-info-quanti"; */

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
      /* inputNumber.value = "1"; */
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
          /* updateTotalPrice(); */ // Actualiza el precio total
        }
      }
      // Función para aumentar la cantidad de un producto en el carrito
      function increaseProductQuantity(index) {
        selectedProducts[index].quantity++;
        inputNumber.value = selectedProducts[index].quantity; // Actualiza el valor del inputNumber
        updateModalProductList();
        updateCartCount();
        /* updateTotalPrice(); */ // Actualiza el precio total
      }

      let productPrice = document.createElement("p");
      productPrice.textContent = `${product.price}`;
      productPrice.className = "product-info-price";

      // Agregamos los elementos secundarios al div principal
      /* Primer div secundario */
      productImgdetails.appendChild(productImage);
      /* productImgdetails.appendChild(productName); */
      /* Segundo div secundario */
      productDetails.appendChild(productName);
      productDetails.appendChild(minusPrice);
      productDetails.appendChild(inputNumber);
      productDetails.appendChild(plusPrice);
      /* Tercero div secundario */
      /*   productInfoprice.appendChild(productPrice); */

      // Agregamos los div secundarios al div principal
      listItem.appendChild(productImgdetails);
      listItem.appendChild(productDetails);
      listItem.appendChild(productInfoprice);

      // Agregamos el div principal al contenedor
      modalProductList.appendChild(listItem);

      // Creamos div principal con (appendChild):
      /* listItem.appendChild(productImage); */
      /* listItem.appendChild(productQuantity); */

      // Creamos div secundarios (dentro del principal):

      // Elementos dentro del segundo div secundario
      // Primer div secundario
      /* productDetails.appendChild(productName);
      productDetails.appendChild(minusPrice);
      productDetails.appendChild(inputNumber);
      productDetails.appendChild(plusPrice);
      productInfoprice.appendChild(productPrice); */
      // Segundo div secundario
      /*   modalProductList.appendChild(listItem);
      modalProductList.appendChild(productDetails);
      modalProductList.appendChild(productInfoprice); */

      if (index >= 0) {
        listItem.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
        listItem.style.marginTop = "25px";
        listItem.style.marginBottom = "23px";
      }

      /*   let quantity = 0;
      let totalPrice = 0; */
      /* plusPrice.addEventListener("click", function () {
        quantity++;
        inputNumber.value = quantity.toString();
      }); */
      /* minusPrice.addEventListener("click", function () {
        if (quantity > 1) {
          quantity--;
          inputNumber.value = quantity.toString();
        }
      }); */

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
      /* modalProductList.appendChild(deleteButton); */
    });
    // Cuenta cuantos productos estamos añadiendo TOTALES al carrito en el encabezado
    /* countElement.textContent =
      "Productos añadidos al carrito (" + getTotalQuantity() + ")"; */

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

    /*  function updateTotalPrice() {
      let totalPrice = 0;
      selectedProducts.forEach(function (product) {
        totalPrice += parseFloat(product.price) * product.quantity;
      });
      document.getElementById("total-price").textContent =
        totalPrice.toFixed(2); // Redondeo a dos decimales con el método toFixed()
    } */
    // Inicializar el contador de productos al cargar la página
    updateCartCount();
    // Actualizar la clase principal-cartChart al cargar la página
    updateCartButtonClass();
    // Actualizar el precio total al cargar la página
    /* updateTotalPrice(); */
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
  // Actualiza la ventana modal con la lista de productos seleccionados
  /*  updateModalProductList();
  updateCartCount(); */
  // Muestra la ventana modal
  document.getElementById("modal-cart").style.display = "block";
});
// Agrega un controlador de eventos al carrito de compra con SCROLL
cartButtonScroll.addEventListener("click", function () {
  // Actualiza la ventana modal con la lista de productos seleccionados
  /* updateModalProductList();
  updateCartCount(); */
  // Muestra la ventana modal
  document.getElementById("modal-cart").style.display = "block";
});

/* ELIMINAR ---------------
---------------------------
---------------------------
---------------------------
---------------------------
// Obtén una referencia a todos los botones "Añadir al carrito"
let addButtonList = document.querySelectorAll(".add-cart");

// Agrega un controlador de eventos a cada botón "Añadir al carrito"
addButtonList.forEach(function (addButton) {
  addButton.addEventListener("click", function () {
    // Obtén la información del producto añadido
    let productItem = this.closest(".item");
    let productName = productItem.querySelector("h2").textContent;
    let productPrice = productItem.querySelector(".price").textContent;
    let productImageSrc = productItem.querySelector("img").src;

    // Actualiza la ventana modal con la información del producto
    document.getElementById("modal-cart-product-image").src = productImageSrc;
    document.getElementById("modal-cart-product-name").textContent =
      productName;
    document.getElementById("modal-cart-product-price").textContent =
      productPrice;

    // Añade el producto al carrito (opcional)
    // Aquí puedes agregar tu lógica para guardar el producto en el carrito

    // Muestra la ventana modal
    document.getElementById("modal-cart").style.display = "block";
  });
});

// Obtén una referencia al botón de cierre de la ventana modal
let modalCloseButton = document.querySelector(".modal-cart-close");

// Agrega un controlador de eventos al botón de cierre
modalCloseButton.addEventListener("click", function () {
  // Oculta la ventana modal
  document.getElementById("modal-cart").style.display = "none";
});

// Obtén una referencia al botón "Remove" en la ventana modal
var modalRemoveButton = document.querySelector(".modal-cart-remove");

// Agrega un controlador de eventos al botón "Remove"
modalRemoveButton.addEventListener("click", function () {
  // Elimina el producto del carrito (opcional)
  // Aquí puedes agregar tu lógica para eliminar el producto del carrito

  // Oculta la ventana modal
  document.getElementById("modal-cart").style.display = "none";
});

// Obtén una referencia al carrito de compra
let cartButton = document.querySelector(".principal-cartChart");

// Agrega un controlador de eventos al carrito de compra
cartButton.addEventListener("click", function () {
  // Muestra la ventana modal
  document.getElementById("modal-cart").style.display = "block";
});
*/
/* principalCart.addEventListener("click", () => {
  console.log("Has hecho click en el carro principal");
}); */

/* 
https://www.youtube.com/watch?v=dSbWJAXQ7cA 

https://www.youtube.com/watch?v=bPJGm81Pxtk

https://www.youtube.com/watch?v=lCuiW-bmCzE --- 19:20 // 26:09

*/
