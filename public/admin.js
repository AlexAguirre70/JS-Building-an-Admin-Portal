
// Your Code Here
async function getList() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
 //   console.log(books)
.then(
 function createList(books){    
    let bookList = document.createElement('ul')
        for (i=0;i<books.length; i++){
        //Create list item
            let item1= document.createElement('li');
            item1.textContent = books[i].title;
            item1.id='title'+[i];
            bookList.appendChild(item1);
        // add input Box
        let input1= document.createElement('INPUT');
        input1.setAttribute('type','text');
        input1.setAttribute('placeholder',books[i].quantity)
        input1.setAttribute('id','input'+books[i].id)
        //console.log(input1.placeholder)
        bookList.appendChild(input1)

        //add button with event listener
            let button1 = document.createElement('button')
            button1.textContent='Save'
            button1.setAttribute('name','button'+[i])
            button1.setAttribute('id',books[i].id)
            bookList.appendChild(button1)
                        
            button1.addEventListener('click',function(){
                let idn= this.id*1
                let inputField = document.getElementById('input'+idn)
               
                fetch('http://localhost:3001/updateBook',{
                method:'PATCH', 
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({               
                id:idn,         
                quantity:inputField.value
        })
        })            
            })
            

        }
        document.body.appendChild(bookList)
})
}
getList()

