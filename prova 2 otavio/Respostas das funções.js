// questao 1)
// codigo da funcao
function Nprimo(numero) {
    for (var i = 2; i < numero; i++) {
      if(numero % i === 0) {
         return false;
      }
    }
    return numero !== 1;  
  } 

  // codigo para listar todos numeros primos entre 1 e 1000
  var numerosprimos1000 = [];
  for (var i = 1; i <= 1000; i++) {
    if (Nprimo(i)) {
      numerosprimos1000.push(i);
    }
  }
  console.log(numerosprimos1000);

  // questao 2)
  // codigo da funcao
  function ValidarSenha(senha) {
 
    if (senha.length < 8) {
      return false;
    }
  
    
    var maiusculo = false;
    let minusculo = false;
    let temNumero = false;
  
    for (var i = 0; i < senha.length; i++) {
      const char = senha[i];
     
      if (char >= 'A' && char <= 'Z') {
        maiusculo = true;
      } else if (char >= 'a' && char <= 'z') {
        minusculo = true;
      } else if (char >= '0' && char <= '9') {
        temNumero = true;
      }
    }
  
    return temNumero && minusculo && maiusculo;
  }
   // codigo que recebe uma senha e diz se ela é valida.
   var senhaTeste = 'Otavio10'
   console.log(ValidarSenha(senhaTeste))

   //questao 3)
   // codigo da funcao
   function calculoFatorial(numero) {
    if (numero === 0 || numero === 1) {
    return 1;
    }
    var resposta = 1;
    for (var i = 2; i <= numero; i++) {
    resposta *= i;
    }
    return resposta;
    }
    // codigo que calcula a fatorial do numero 1 ao 10
    for (var n = 1; n <= 10; n++) {
        var seqfatorial = calculoFatorial(n);
        console.log("Fatorial de " + n + ": " + seqfatorial);
        }
   
    //questao 4)
    //codigo da funcao
    function Nraiz(numero) {
        if (numero < 0) {
        return false;
        }
        var raiz = Math.sqrt(numero);
        return raiz % 1 === 0;
        }
    // codigo de exemplo 
     var numeroex = '25'
     console.log(Nraiz(numeroex));
