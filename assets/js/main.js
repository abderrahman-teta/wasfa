var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var age = document.getElementById('age');
var done = document.getElementById('done');
var inputs = document.querySelectorAll('.input');



const data = [
    'Apple',
    'Artichoke',
    'Asparagus',
    'Banana',
    'Beets',
    'Bell pepper',
    'Broccoli',
    'Brussels sprout',
    'Cabbage',
    'Carrot',
    'Cauliflower',
    'Celery',
    'Chard',
    'Chicory',
    'Corn',
    'Cucumber',
    'Daikon',
    'Date',
    'Edamame',
    'Eggplant',
    'Elderberry',
    'Fennel',
    'Fig',
    'Garlic',
    'Grape',
    'Honeydew melon',
    'Iceberg lettuce',
    'Jerusalem artichoke',
    'Kale',
    'Kiwi',
    'Leek',
    'Lemon',
    'Mango',
    'Mangosteen',
    'Melon',
    'Mushroom',
    'Nectarine',
    'Okra',
    'Olive',
    'Onion',
    'Orange',
    'Parship',
    'Pea',
    'Pear',
    'Pineapple',
    'Potato',
    'Pumpkin',
    'Quince',
    'Radish',
    'Rhubarb',
    'Shallot',
    'Spinach',
    'Squash',
    'Strawberry',
    'Sweet potato',
    'Tomato',
    'Turnip',
    'Ugli fruit',
    'Victoria plum',
    'Watercress',
    'Watermelon',
    'Yam',
    'Zucchini'
  ]

function findMatch(word,drugs){
    return drugs.filter(drug =>{
        const regex = new RegExp('^'+word,'gi');
        return drug.match(regex) 
    });
}

window.addEventListener('load',function(e){
    fname.focus()
});
    var count = inputs.length;
inputs.forEach((input,index) =>{
    input.addEventListener('keydown',function(event){
        if(input != fname && input != lname && input != age){
            const result = findMatch(this.value,data);
            console.log(result);
        }
      if(event.keyCode == 13){
            if(index<count-1){
               this.nextSibling.nextSibling.nextSibling.nextSibling.focus()
            }else{
                window.print()
            }
       } else if(event.keyCode ==17){
                window.print()
       }
          
    })
})
