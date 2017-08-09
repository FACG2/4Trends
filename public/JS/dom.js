(function() {
    var country = document.querySelectorAll('.country')

    country.forEach(function(element) {
        element.addEventListener('click', function() {

            request('\search?c=' + element.getAttribute('number'), function(res) {
                fill(res)
                document.getElementById('ulContainer').style.display = "block";

            })
        })
    })

    function fill(arr) {
        for (let i = 1; i <= 10; i++) {
            document.querySelector('#a' + i).href = 'http://google.com/search?q=' + arr[i - 1]
            document.querySelector('#a' + i).target = '_blank'
            document.querySelector('#item' + i).textContent = arr[i - 1]
        }

    }
})()