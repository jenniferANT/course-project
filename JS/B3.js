 // lọc theo mức giá 
 function filter(selectElement) {
     var selectedValue = selectElement.value;
     var minPrice, maxPrice;
     var tbody = document.querySelector('tbody#listProducts');
     var product_rows = tbody.querySelectorAll('tr');
     // Đặt giá trị tối thiểu và tối đa dựa trên giá trị đã chọn
     switch (selectedValue) {
         case '0':
             minPrice = 0;
             maxPrice = Infinity;
             break;
         case '1':
             minPrice = 0;
             maxPrice = 100000;
             break;
         case '2':
             minPrice = 100000;
             maxPrice = 250000;
             break;
         case '3':
             minPrice = 250000;
             maxPrice = 500000;
             break;
         case '4':
             minPrice = 500000;
             maxPrice = Infinity;
             break;
         default:
             // No valid selection, do nothing
             return;
     }

     for (var i = 0; i < product_rows.length - 1; i++) {
         var priceProducts = product_rows[i].cells[2].innerText;
         if (priceProducts < minPrice || priceProducts > maxPrice) {
             product_rows[i].style.display = 'none';
         } else {
             product_rows[i].style.display = 'table-row';
         }
     }
 }

 // tính tiền từng món khi nhập xong số lượng
 function calculateTotal(obj) {
     var quantity = obj.value;
     var row = obj.parentNode.parentNode;
     var price = row.cells[2].innerText;
     if (quantity < 0) {
         quantity = 0;
         obj.value = 0;
     }
     var totalPrice = parseInt(quantity) * parseInt(price);
     if (Number.isFinite(totalPrice) == false) {
         totalPrice = '';
     }

     row.cells[4].innerText = totalPrice;
     updateCart();
 }

 // cập nhật giỏ hàng
 function updateCart() {
     var cartTable = document.getElementById('cart');
     cartTable.innerHTML = '';

     var selectedProducts = document.querySelectorAll('.chon:checked');

     for (var i = 0; i < selectedProducts.length; i++) {
         var productRow = selectedProducts[i].parentNode.parentNode;
         var productName = productRow.cells[1].innerText;
         var productPrice = productRow.cells[2].innerText;
         var productQuantity = productRow.querySelector('.quantity').value;
         /*if (productQuantity < 0) {
             productQuantity = 0;
         }*/
         var productTotal = productRow.cells[4].innerText;

         var cartRow = cartTable.insertRow();
         var cartNameCell = cartRow.insertCell(0);
         var cartPriceCell = cartRow.insertCell(1);
         var cartQuantityCell = cartRow.insertCell(2);
         var cartTotalCell = cartRow.insertCell(3);

         cartNameCell.innerText = productName;
         cartPriceCell.innerText = productPrice;
         cartQuantityCell.innerText = productQuantity;
         cartTotalCell.innerText = productTotal;
     }

     calculateCartTotal();
 }

 // Tính tổng cả giỏ hàng
 function calculateCartTotal(obj) {
     var cartTable = document.getElementById('cart');
     var cartRows = cartTable.rows;
     var cartTotal = 0;

     for (var i = 0; i < cartRows.length; i++) {
         var rowTotal = parseFloat(cartRows[i].cells[3].innerText);
         if (Number.isFinite(rowTotal) == false) {
             rowTotal = 0;
         }
         cartTotal = cartTotal + rowTotal;
     }
     document.getElementById("tong").innerHTML = cartTotal;
 }

 function reverseAttribute(obj) {
     // đảo trạng thái khi tick vào checkbox
     var node = obj.parentElement.parentElement;
     var input = node.getElementsByTagName("input")[1];
     if (input.hasAttribute("readonly")) {
         input.removeAttribute("readonly");
         input.style.opacity = 1;
     } else {
         input.setAttribute("readonly", "readonly");
         input.style.opacity = 0.5;
         input.value = 0;
     }
     calculateTotal(obj)
 }