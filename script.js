var buttons = document.querySelectorAll('.more');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var description = this.parentNode.querySelector('p');
    description.classList.toggle('show');
  });
});


var buttons = document.querySelectorAll('.btn a');

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    var productName = this.parentNode.parentNode.querySelector('h2').textContent;
    var message = "Желаю купить данный продукт: " + productName;
    var url = this.href + "?sel=-" + this.href.split('vk.me/')[1] + "&message=" + encodeURIComponent(message) + "&intent=1";
    window.open(url, '_blank');
  });
});
