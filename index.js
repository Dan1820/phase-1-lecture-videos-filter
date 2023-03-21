let books=[
    {
        title:'intro to js',
        author: 'markoff',
        price: 26,
        inventory :0
    },
    {
        title:'intro to c#',
        author:'dunhill',
        price: 100,
        inventory :10
    },
    {
        title:'intro to php',
        author:'culture',
        price: 40,
        inventory :2
    },
    {
        title:'intro to java',
        author:'hill',
        price: 50,
        inventory :30
    }
]
//function that will loop through inventory
// find the first object  whose conditio returns true based on a callback
// function loopAndFind(inventory,finder){
//     let result=null
//     for ( item of inventory){
//         if(finder(item)===true){
//             result=item
//             break
//         }
//     }
//     return result
// }
// function isBook(book){
//     return book.title==='intro to java'
// }
// console.log(loopAndFind(books,isBook))
// function findBook(inventory,finder){
//     let result=null
//     for(item of inventory){
//         if(finder(item)===true){
//             result=item
//         break

//         }
        
//     }
//     return result
// }
let foundItem= books.find((book)=>
     book.title ==='intro to php'
)
console.log(foundItem)

let findAuthor=books.find((book)=> book.author==='markoff')
console.log(findAuthor)

let getThePrice= books.find((book)=> book.price=50)
console.log(getThePrice)
// function thereIsBook(book){
//     return book.title==='intro to java'
// }
// console.log(findBook(books,thereIsBook))
//find the frst book to be restocked
function restock(item){
    return item.inventory<3

}

// console.log(findBook(books, restock))