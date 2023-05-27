const jsonServer = require('json-server');
const app = jsonServer.create();
const route = jsonServer.router('db.json');
const middleware = jsonServer.defaults()



app.use(middleware);

app.use((req,res,next)=>{
    let token = req.headers.authorization;
    if(token){
        next()
    }else{
        res.send('Protected Route!')
    }
})

app.use(route);



app.listen(8080,()=>{
    console.log(`Server is running at the port 8080`);
})