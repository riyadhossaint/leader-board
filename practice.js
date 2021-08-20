const bookNames = [ 
    'A Smarter Way to Learn JavaScript', 'Eloquent JavaScript', 'JavaScript & JQuery', 'JavaScript', 'Learn JavaScript VISUALLY', 'Effective javaScript', 'javaScript for Kids', 'Programming JavaScript Applications', 'You Don’t Know JS', 'Beginning javaScript', 'basic js consecpt', 'the complete guide for java'
];
const searchWord = 'Javascript';
let books = [];
for(const book of bookNames){
  if(book.toLowerCase().indexOf(searchWord.toLowerCase()) != -1){
      books.push(book);
    
      console.log(book);
  }
  
  
}

const numbers = [78, 56, 25, 21, 78, 256, 745, 12, 87, 65, 255,];
numbers.sort(function(a, b){
    return a - b;
})
console.log(numbers);

