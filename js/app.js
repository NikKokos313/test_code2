const cardNumberInput = document.getElementById('card-number');
const expiryDateInput = document.getElementById('expiry-date');
const cvvInput = document.getElementById('cvv');

cardNumberInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '').replace(/....(?!$)/g, '$& ');
    e.target.value = value;
});

expiryDateInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
    e.target.value = value;
});


document.getElementById('btn').addEventListener('click', function() {
     if ('Notification' in window) {
       Notification.requestPermission()
         .then(function(permission) {
           if (permission === 'granted') {
             new Notification('Уведомление', { body: 'Ваши данные перемещены в базу данных!' });
           }
         });
     }
   });