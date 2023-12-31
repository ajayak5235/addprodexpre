
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
 app.use(bodyParser.urlencoded({extended: false}))



app.use('/add-product', (req, res,) => {
   res.send(`
   <form action="/product" method="POST">
       <input type="text" name="productName" placeholder="Product Name">
       <input type="text" name="productSize" placeholder="Product Size">
     
       <button type="submit">Add Product</button>
   </form>
`)
});

app.use('/product', (req, res,) => {
    console.log(req.body);
    res.redirect('/success')
});
app.use('/success', (req, res, ) => {
    
    res.send('<h1>Added successefully</h1>')
});

app.use('/', (req, res,) => {
   
    res.send('<h1>Hello from Express</h1>')
});

app.listen(3000);


