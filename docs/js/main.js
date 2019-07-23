// FETCH the book data
var books = fetch('http://someaweomseapi.com/api')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log('fetch result:', json)
        return json
    })

// INJECT the book data
    var booksHtml = books.map(function(book, index){
        return '<li>' + index + ' - ' + book.title + '</li>';
    }).join('');
