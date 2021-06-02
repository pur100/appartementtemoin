/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
var products = document.querySelectorAll('#spot')
var dot = document.querySelectorAll('.ShopTheLook__Dot').forEach(item => {
  item.addEventListener('click', function(){
      products.forEach(product => {
      product.classList.add('show_me');
      })
  })
})

var menu = document.getElementById('MegaMenuForColor')
var link = menu.parentNode
menu.addEventListener('mouseover', function(){
  link.classList.add('underscore')
})

menu.addEventListener('mouseleave', function(){
  link.classList.remove('underscore')
})



fitText(document.getElementById("h1"), 0.38);
