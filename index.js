let express = require('express');

let app = express()

app.get("/",(req,res)=>{

    console.log("getting request from the root")
    
    res.send("Home")
})
app.get('/hello/:name', function(request, response) {
    console.log(`got request for "/hello/${request.params.name}"`);
    //in the above example, returns "hello sally!"
    response.send(`hello ${request.params.name}!`);
   });



app.get('/africa/:country',(req ,res)=> {

    console.log(`getting requeste from ${req.params.country} to find out what is going on in Mali`)

    res.send(`In Africa there is ${req.params.country}`)



   })

app.get("*", (req, res)=>{

    console.log("getting request from wild card")
    res.status(404).send("Page not found")
})


let port = 3000;
app.listen(port, function(){

    console.log(" Im listening to port " + `${port}`)
})