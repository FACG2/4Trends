// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application

(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('flags');
    var addTodoForm = document.getElementById('ulContainer');
    var country = document.querySelectorAll('.country')


    country.forEach(function(element) {
        element.addEventListener('click', function() {
            request("\search?c=" + element.getAttribute('number'), function(res) {
                fill(res)
            })


        });
    })
    function fill(arr) {
        for (let i = 1; i <= 10; i++) {
           document.querySelector('#item' + i).textContent=arr[i-1]
        }
    }

})();
