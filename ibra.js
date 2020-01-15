
/// Express example

var express =require("express");
var app = express();



app.get('/home/',(req,res)=>{

    console.log("getting request from home");
    res.send("Hello ibra")
});

app.get(['/hi','/ni','/lo'],(req, res)=>{

    console.log("getting regest from ....");
    res.send("they actually works");
});


app.get('/africa/:name',(req, res)=>{

    console.log(`getting request from "/africa/${req.params.name}"`);
    
    res.send(` is in west Africa ${req.params.name} `)
});

app.get('/whoa/:number', (req,res)=>{
if (req.params.number > 0 ){
    res.send("I know right")
} else{
    res.send("you enterred the wrong number")
}
});

app.get('/home/:firstname/:lastname',(req,res)=>{


    res.send(`  Welcome ${req.params.firstname}  ${req.params.lastname}`)
})

app.get('/word/:word',(req,res)=>{

 let newVariabe = req.params.word;
 let myString = ""
for (let i = newVariabe.length -1; i >0 ; i--){

    myString += newVariabe[i];
}

res.send(` this is your word entered and ${req.params.word} and here is the reverse `+ myString)

});



app.get(['/apple','/Ale'], (req, res)=>{
    
    res.send("Apple or Ale ... ?") ;

});
app.get('*',(req,res)=>{

    res.status(404).send("page not found")

});









var port = 3050;
app.listen(`${port}`,()=>{

console.log("app listening to port 3050");
})