# 4Trends
Here is whats hot on Google! 🤘
>Team: @EngAyoosh, @Ghadeer93, @mahmne, @aajour 

# User Story:
The word "trend" refers to a general direction in which something is developing or changing fastly.

4Trends is your best place to know whats going on around you, with just a click!

## About 4Trends:
* The idea inspired from [here](https://trends.google.com/trends/hottrends/visualize?ss=&ncol=&nrow=)
* Can cover 12 different countries, with top 10 trends on it (flexable to cover 50 country!)
## Array.Splice?
> The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

```javascript
// Array.splice(position_you_want_to_remove, number_of_items_to_remove)

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]

```
**see** more at: [Array.prototype.splice](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
)


## How to use?
 * User Side :

    * Open [URL](https://fortrends.herokuapp.com/) for the website .
    * One click on the country flag is enough :bowtie:

  * Developer Side:

      ` git clone https://github.com/FACG2/4Trends.git`

      Run `npm install` to install all dependencies`

      Run  `node src/server.js `

     Navigate to http://localhost:5000/ in your browser
     
     Big **THANKS** for: @abdabdhalees & @abeeralshaer & @shahenazmonia for their help :heart:

