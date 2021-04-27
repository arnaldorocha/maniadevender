//dados

//funcionalidades
function index(req, res) {
  return res.render("index.html")
}
function modafeminina(req, res){
  const filters = req.query
  return res.render("modafeminina.html", { loja_maniadevender, filters,subjects,weekdays})
}
function modamasculina(req, res){
  return res.render("modamasculina.html", {subjects, weekdays})
}

//servidor
const express =require('express')
const server =express()

//configurar nunjucks (template engine)
const nunjucks =require('nunjucks')
nunjucks.configure('/',{
  express: server,
  noCache: true,
})

//inicio e configuração do servidor
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", index)
.get("/", modafeminina) 
.get("/", modamasculina) 

//start do servidor
.listen(5000)
