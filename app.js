const express = require("express");
const request = require("request");
const bP = require("body-parser");
const https = require("https");



const app = express();
app.use(bP.urlencoded({extended:true}));
app.use(express.static("public"))






app.post("/",function(req,res){
    const email = req.body.email;
     const response = addEmailAddress(email, req.body.FN , req.body.LN, res);

   app.post("/failure", (req , res)=>{

    res.redirect("/");

   })
  

});










app.get("/",function(req,res){

res.sendFile(__dirname + "/signup.html");
  
});







app.listen(3000,function(){
console.log("has started");
});



function addEmailAddress(email, Fname , Lname, res){
    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://us8.api.mailchimp.com/3.0/lists/107d497a2f/members',
      'headers': {
        'Authorization': 'Basic TUQ6M2EwMjE4MTNjNTM5NTY0NDNiZWVhMzBjOGQxZjY4NTgtdXM4',
        'Content-Type': 'application/json',
        'Cookie': '_abck=00D0300754E27475464FE43CD87FE50A~-1~YAAQNO8uF2Oko2aCAQAAk6i6qgjzZ08ffYHOp9+fyrAEEA6B75sXk+1hxSiu58b/IdhmMSic6xkuz9lh2PUa47hErFY/DCgIh8xAUWZW01S4XbNW5qJKl/yZrItEv1SZVWX5NKvhoDsm/Ad7fNDLgW3PPUEY2CLH9q8Eef39xe6uX5OUEuK1E0cavqKghzJgO9jyTN9EmQrJbMdh4Q3eFq5C8ChWyo4N1qhxaZa1QufWXmz2N9NprrBip9GrJo1ub3iFEPrSXaEzS4QW9SWPg6FMMcZanuxOyJQok8XHDBJ1ltrvSidBPxCRVgo7ugmsWaFQ+SDgSLRkl4N8jVR7TLyV8hAG1+qAPNitGTURAYhzTDgLQk4nJRYZ+v0=~-1~-1~-1; _mcid=1.3b7d018c87863e57f3ae9dca2fa6c6cc.301e44d3d7df94ce9a212c6a5a916491dd1fdb4f5340bcbf5f098953f254663f'
      },
      body: JSON.stringify({
        "email_address": email,
        "status": "subscribed",
        "merge_fields": {
          "FNAME": Fname,
          "LNAME": Lname
        }
      })
    
    };
    request(options, function (error, response) {
      
      
      console.log(response.body);
       if(response.statusCode === 200){
        res.sendFile(__dirname +"/success.html");
        }
        else{
            res.sendFile(__dirname +"/failure.html");
        }

    });
    
}

