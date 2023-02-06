// ****************** ATIVIDADE *********************
    //   perguntar ao usuário de qual número quer a tabuada ----- Variável X
    //   perguntar até onde ele quer a tabuada ----------------- Variável Y
    //   a tabuada deve começar no número 1 ------------  Variável Z
    //  deve terminar no número definido pelo usuário, então enquanto Variável Z for até a Variável Y vai executar a tabuada
    // variável Z servirá para determinar o começo da multiplicação e o limite (do loop) que irá multiplicar

var tabuadaDoNumeroX = prompt('Escolha um número de 1 a 10 para ver a tabuada dele');
var limiteTabuadaDoNumeroX = prompt('Escolha um número para ser o limite da sua tabuada');
let repeticao = 1;

//usando IF e WHILE 

    if (tabuadaDoNumeroX <= 10 ){
        while(repeticao <= limiteTabuadaDoNumeroX ){
            console.log(tabuadaDoNumeroX + " x " + repeticao + " = " + tabuadaDoNumeroX*repeticao);
            repeticao++
          }
    }else{
        console.log("tabuada inválida digite outro número")
    }
   

    //usando DO e WHILE 

    do{
        console.log(tabuadaDoNumeroX + " x " + repeticao + " = " + tabuadaDoNumeroX*repeticao);
        repeticao++
    }while (repeticao <= limiteTabuadaDoNumeroX )

    //usando for 
    // for(repete = 1, repete <= limiteTabuadaDoNumeroX, repete++){
    //     console.log(tabuadaDoNumeroX + " x " + repeticao + " = " + tabuadaDoNumeroX*repeticao);
    // }

    