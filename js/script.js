var cadastrados=[];


const labelDeTodosInputs = [document.getElementById("nomeTema"), document.getElementById("cpfTema"), document.getElementById("telefoneTema"), document.getElementById("sexoTema"), document.getElementById("floresTema"), document.getElementById("corTema")];


const idsInputs = [document.getElementById("nome"), document.getElementById("cpf"), document.getElementById("telefone"), document.getElementById("feminino"), document.getElementById("masculino"), document.getElementById("centaureaCyanus"), document.getElementById("lirio"), document.getElementById("calendula"), document.getElementById("amarilis"), document.getElementById("camelia"), document.getElementById("girassol"), document.getElementById("violeta"), document.getElementById("crisantemo"), document.getElementById("corFavorita")]

function mudarTema(){
    if(document.getElementById("main").style.backgroundColor == "rgb(255, 255, 255)" || document.getElementById("main").style.backgroundColor == ""){
        document.getElementById("main").style.backgroundColor  = "rgb(78, 78, 78)";
        document.getElementById("form").style.cssText = "background-color: rgb(0, 0, 0);" +"color: rgb(255, 255, 255);"+ "border-color:rgb(255, 255, 255);";
        for(x=0; x<labelDeTodosInputs.length; x++){
            if(labelDeTodosInputs[x].style.color != "red"){
                labelDeTodosInputs[x].style.color =  "rgb(255, 255, 255)";
            }
        }
        document.getElementById("areaBusca").style.cssText = "background-color: rgb(0, 0, 0);" + "color: rgb(255, 255, 255);" + "border-color:rgb(255, 255, 255);";
        document.getElementById("imagemFlor1").innerHTML= "<img src='imagens/flor9.png'>";
        document.getElementById("imagemFlor2").innerHTML= "<img src='imagens/flor8.png'>";
        return;
    }
    if(document.getElementById("main").style.backgroundColor == "rgb(78, 78, 78)"){
        document.getElementById("main").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("form").style.cssText = "background-color: rgb(238, 238, 238);" + "color: rgb(0, 0, 25);" + "border-color: rgb(0, 0, 0);";
        for(x=0; x<labelDeTodosInputs.length; x++){
            if(labelDeTodosInputs[x].style.color != "red"){
                labelDeTodosInputs[x].style.color =  "rgb(0, 0, 0)";
            }
        }
        document.getElementById("areaBusca").style.cssText = "background-color: rgb(238, 238, 238);" + "color: rgb(0, 0, 0);" + "border-color: rgb(0, 0, 0);";
        document.getElementById("imagemFlor1").innerHTML= "<img src='imagens/flor7.png'>";
        document.getElementById("imagemFlor2").innerHTML= "<img src='imagens/flor17.png'>";
        return;
    }
    
}

function escolherFeminino(){
    if(document.getElementById("masculino").checked == true){
        document.getElementById("masculino").checked = false
    }
}
function escolherMasculino(){
    if(document.getElementById("feminino").checked == true){
        document.getElementById("feminino").checked = false
    }
}

var preenchido=0;
var sexoDaPessoa;

function validaCampos(){
    var camposAlerta = [];
    
    for(y=0; y<idsInputs.length; y++){
        if(y<3 && idsInputs[y].style.color != "red"){
            if(idsInputs[y].value == ""){
                camposAlerta.push(labelDeTodosInputs[y]);
            }else{
                if(document.getElementById("main").style.backgroundColor == "rgb(255, 255, 255)" || document.getElementById("main").style.backgroundColor == ""){
                    labelDeTodosInputs[y].style.cssText =  "color: rgb(0, 0, 0)";
                }else{
                    labelDeTodosInputs[y].style.cssText =  "color1: rgb(255, 255, 255)";
                }
            } 
        }
        if(y == 3){ //sexo
            if(idsInputs[3].checked == false && idsInputs[4].checked == false){
                camposAlerta.push(labelDeTodosInputs[3])
            }else{
                if(document.getElementById("main").style.backgroundColor == "rgb(255, 255, 255)" || document.getElementById("main").style.backgroundColor == ""){
                    labelDeTodosInputs[3].style.cssText =  "color: rgb(0, 0, 0)";
                }else{
                    labelDeTodosInputs[3].style.cssText =  "color: rgb(255, 255, 255)";
                }
                if(idsInputs[3].checked == true){
                    sexoDaPessoa = "feminino"
                }else{
                    sexoDaPessoa = "masculino"
                }
            }
        }
        if(y >=5 && y <= 12){ //flores
            if(idsInputs[y].checked == true){
                preenchido++
            }
            if(y==12){
                if(preenchido == 0){
                    camposAlerta.push(labelDeTodosInputs[4])
                }else{
                    if(document.getElementById("main").style.backgroundColor == "rgb(255, 255, 255)" || document.getElementById("main").style.backgroundColor == ""){
                        labelDeTodosInputs[4].style.cssText =  "color: rgb(0, 0, 0)";
                    }else{
                        labelDeTodosInputs[4].style.cssText =  "color: rgb(255, 255, 255)";
                    }
                    preenchido=0;
                }
            }
            
        }
        if(y == idsInputs.length-1){ //cor
            if(idsInputs[y].value == "none"){
                camposAlerta.push(labelDeTodosInputs[5])
            }else{
                if(document.getElementById("main").style.backgroundColor == "rgb(255, 255, 255)" || document.getElementById("main").style.backgroundColor == ""){
                    labelDeTodosInputs[5].style.cssText =  "color: rgb(0, 0, 0)";
                }else{
                    labelDeTodosInputs[5].style.cssText =  "color: rgb(255, 255, 255)";
                }
            }
        }
        
    }
   
    if(camposAlerta.length>0){
        console.log("Preencha todos os campos")
        for(a=0; a<camposAlerta.length; a++){
            camposAlerta[a].style.cssText="color: red;"
        }
        alert("Preencha todos os campos");
        return false;
    }else{
        alert("Cadastro realizado");
        return true;
    }
}

function cadastrar(){
    if(validaCampos()){
        console.log("cadastro realizado com sucesso")
        var flores = [];
        var cadastrado = new Object;
            cadastrado.nome = idsInputs[0].value;
            cadastrado.cpf = idsInputs[1].value;
            cadastrado.telefone = idsInputs[2].value;
            cadastrado.sexo = sexoDaPessoa;
            for(b=5; b<=12; b++){
                if(idsInputs[b].checked == true){
                    flores.push(idsInputs[b].value);
                }
            }
            cadastrado.flores = flores;
            cadastrado.corFavorita = idsInputs[idsInputs.length-1].value;
        console.log(cadastrado);
        cadastrados.push(cadastrado);

        //limpar formulario
        for(x=0; x<idsInputs.length; x++){
            if(x<3){
                idsInputs[x].value = "";
            }
            if(x>=3 & x<=12){
                idsInputs[x].checked = false;
            }
            if(x==idsInputs.length-1){
                idsInputs[x].value = "none";
            }
        }
    }
}

const centaurea = {'nome': 'Centaurea cyanus', 'imagem':'<a href="https://www.emporiodassementes.com.br/flores/outras/centaurea-cyanus-escovinha-fidalguinhos" target="_blank"><img src="imagens/centaureaCyanus.png"></a>', 'valor':'centaureaCyanus'}
const lirio = {'nome': 'Lírio', 'imagem':'<a href="https://www.emporiodassementes.com.br/bulbos/lirio/lirio-asiatico-blackout" target="_blank"><img src="imagens/lirio.png"></a>', 'valor':'lirio'}
const calendula = {'nome': 'Calêndula', 'imagem':'<a href="https://www.emporiodassementes.com.br/hortalicas/calendula/calendula-calendula-officinalis" target="_blank"><img src="imagens/calendula.png"></a>', 'valor':'calendula'}
const amarilis = {'nome': 'Amarílis', 'imagem':'<a href="https://www.emporiodassementes.com.br/bulbos/amarilis/amarilis-minerva" target="_blank"><img src="imagens/amarilis.png"></a>', 'valor':'amarilis'}
const camelia = {'nome': 'Camélia', 'imagem':'<a href="https://www.plantei.com.br/sementes-de-balsamina-camelia-sortida-topssed-tradicional-flores" target="_blank"><img src="imagens/camelia.png"></a>', 'valor':'camelia'}
const girassol = {'nome': 'Girassol', 'imagem':'<a href="https://www.emporiodassementes.com.br/flores/girassol/girassol-anao" target="_blank"><img src="imagens/girassol.png"></a>', 'valor':'girassol'}
const violeta = {'nome': 'Violeta', 'imagem':'<a href="https://www.sementerara.com.br/alyssum-violeta-20-sementes" target="_blank"><img src="imagens/violeta.png"></a>', 'valor':'violeta'}
const crisantemo = {'nome': 'Crisântemo', 'imagem':'<a href="https://www.emporiodassementes.com.br/flores/crisantemo/crisantemo-dobrado-sortido" target="_blank"><img src="imagens/crisantemo.png"></a>', 'valor':'crisantemo'}
const todasFlores = [centaurea, lirio, calendula, amarilis, camelia, girassol, violeta, crisantemo];
const cardsParaFlores = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8"];

function buscar(){
    for(x=0; x<cadastrados.length; x++){
        if(cadastrados[x].cpf == document.getElementById("buscaCpf").value){
            document.getElementById("exibir").style.backgroundColor = cadastrados[x].corFavorita
            document.getElementById("exibir").style.border = "5px double black"
            if(cadastrados[x].sexo == "feminino"){
                document.getElementById("exibir").innerHTML = "<div class='circulo'><img src='imagens/portraitmodeWoman.png' class='icoMulher'/></div>"
            }else{
                document.getElementById("exibir").innerHTML = "<div class='circulo'><img src='imagens/man.png' class='icoHomem'/></div>" 
            }
            document.getElementById("exibir").innerHTML += "<div class='areaNome'>"+cadastrados[x].nome+"</div>"
            document.getElementById("exibir").innerHTML += "<div id='areaFlores'></div>"

            if(cadastrados[x].corFavorita == "rgb(0, 0, 0)"){
                document.getElementById("exibir").style.border = "5px double #fff"
            }

            for(y=0; y<todasFlores.length; y++){
                console.log("aqui")
                for(w=0; w<cadastrados[x].flores.length; w++){
                    if(todasFlores[y].valor == cadastrados[x].flores[w]){
                        document.getElementById("areaFlores").innerHTML += "<div id='"+cardsParaFlores[y]+"'></div>"
                        document.getElementById(cardsParaFlores[y]).innerHTML += todasFlores[y].imagem
                        document.getElementById(cardsParaFlores[y]).innerHTML += todasFlores[y].nome
                    }
                }
            }

            document.getElementById("exibir").innerHTML +=  '<div class="contato"><a href="https://api.whatsapp.com/send?1=pt_BR&phone=55'+cadastrados[x].telefone+'" target="_blank"><img src="imagens/whatsapp.png" class="icoWhats"></a><div>' 
        }
    }  
}