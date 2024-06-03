document.getElementById('search-bar').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        let productName = product.querySelector('h2').textContent.toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});

document.getElementById('category').addEventListener('change', function() {
    let selectedCategory = this.value;
    let products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        if (selectedCategory === 'all' || product.getAttribute('data-category') === selectedCategory) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});
