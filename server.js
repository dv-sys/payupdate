const app = require('./app');
const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.warn("Server is listening at http://localhost:"+port);
});