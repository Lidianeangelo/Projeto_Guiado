const app=require("./src/app")
const PORT=8081

app.listen(PORT, function(){
    console.log(`Servidor rodando na porta ${PORT}`)
})