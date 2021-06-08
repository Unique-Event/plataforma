  var nome = document.getElementById("nome");
  var sobrenome= document.getElementById("sobrenome");
  var cargo = document.getElementById("cargo");
  var empresa = document.getElementById("empresa");
  var email = document.getElementById("email");
  var endereco = document.getElementById("inputEndereco");
  var telefone = document.getElementById("telefone");
  // var area = document.getElementById("area");
  var senha = document.getElementById("senhaPlataforma");
  var confirmacao = document.getElementById("confirmacaoSenha");
  var numero = document.getElementById("inputNumero");
  var complemento = document.getElementById("inputComplemento");
  var cep = document.getElementById("inputCEP");
  var bairro = document.getElementById("inputCity");
  var estado = document.getElementById("inputState");

// funcao referente ao cadastro do usuário
function signUp() {
  if (!nome.value) {
    let nome = document.getElementById("retorno").innerHTML = "Ops! Todos os campos são obrigatórios! Digite seu nome.";
    //alert("Digite seu nome");
    return;
  }
  if (!sobrenome.value){
    let sobrenome = document.getElementById("retorno").innerHTML = "Ops! Todos os campos são obrigatórios! Digite seu sobrenome.";
    // alert("Digite seu sobrenome");
    return;
  }
  if (!empresa.value) {
    let empresa = document.getElementById("retorno").innerHTML = "Ops! Todos os campos são obrigatórios! Digite sua empresa.";
    //alert("Digite sua empresa");
    return;
  }
  if (!cargo.value) {
    let cargo = document.getElementById("retorno").innerHTML = "Ops! Todos os campos são obrigatórios! Digite seu cargo.";
    //alert("Digite seu cargo");
    return;
  }
  if (!email.value) {
    let sobrenome = document.getElementById("retorno").innerHTML = "Ops! Todos os campos são obrigatórios! Digite seu e-mail.";
    //alert("Digite seu e-mail");
    return;
  }
  //if (!endereco.value) {
   // alert("Digite seu endereço");
   // return;
 // }
  if (!telefone.value) {
    let phone = document.getElementById("retorno").innerHTML = "Ops! Todos os campos são obrigatórios! Digite seu telefone.";
    //alert("Digite seu telefone");
    return;
  }
 // if (!area.value) {
  //  alert("Digite sua área de interesse");
  //  return;
 // }
  if (!senha){
    let senha = document.getElementById("retorno").innerHTML = "Ops! Todos os campos são obrigatórios! Digite sua senha.";
    //alert("Digite sua senha");
    return;
  }
  if (senha.value!=confirmacao.value){
    let confirmacao = document.getElementById("retorno").innerHTML = "Ops! Confirmação de senha diferente! Digite novamente.";
    //alert("Senha e confirmação de Senha estão diferentes!");
    return;
  }

 let UniqueEvent = Parse.Object.extend('UniqueEvent');
 let myNewObject = new UniqueEvent();

  myNewObject.set('nome', nome.value);
  myNewObject.set('sobrenome', sobrenome.value);
  myNewObject.set('empresa', empresa.value);
  myNewObject.set('cargo', cargo.value);
  myNewObject.set('email', email.value);
  myNewObject.set('telefone', telefone.value);
  myNewObject.set('senha', senha.value);
  myNewObject.set('confirmacao', confirmacao.value);

  myNewObject.save().then(
    (result) => {
      //alert("Usuário cadastrado com Sucesso!")
        window.location = "./versao.html";
    },
    (error) => {
      alert(`Erro: ${JSON.stringify(error)}`);
    }
  );
 
}

// funcao referente ao login do usuario
function logar(){
  var email = document.getElementById("emailLogin").value;
  var senha = document.getElementById("senhaLogin").value;

  (async () => {
  const UniqueEvent = Parse.Object.extend('UniqueEvent');
  const queryEmail = new Parse.Query(UniqueEvent);
  queryEmail.equalTo('email', email);

  const querySenha = new Parse.Query(UniqueEvent);
  querySenha.equalTo('senha', senha);

  const query = Parse.Query.and(queryEmail, querySenha);
  
  try {
    const results = await query.find();

    if (!email){
      alert("Digite seu email!");
      return;
    }
    if (!senha){
      alert("Digite sua senha!");
      return;
    }


    if (results.length>0){
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        alert("Bem vindo a Unique Events!");
        window.location ="./portal.html";
      }
    }else{
      alert("Usuário ou Senha Inválidos!")
    }
  } catch (error) {
    console.error('Error while fetching UniqueEvent', error);
  }
})();
}
function cadastroEvento(){
  
 
      const cadEvento = new Parse.Object('cadEvento');
      cadEvento.set('endereco', endereco.value);
      cadEvento.set('numero', numero.value);
      cadEvento.set('complemento', complemento.value);
      cadEvento.set('cep', cep.value);
      cadEvento.set('bairro', bairro.value);
      cadEvento.set('estado', estado.value);
      cadEvento.save().then(
      (result) => {
      alert("Dados cadastrados com sucesso,você receberá seu óculos VR o mais rápido possível!")
      window.location = "./portal.html";
        },
        (error) => {
        alert(`Erro: ${JSON.stringify(error)}`);
        }
      );
   
  }
  
  
// ESCOLHA VERSAO

function chooseDesktop(){
  alert("Usuário cadastrado com Sucesso!");
  window.location = "./portal.html";
}
  
