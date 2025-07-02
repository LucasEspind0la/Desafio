let quantidadeDeXP 
let nome  
let entrada 

entrada = "" // variavel do tipo string.

while(entrada !== "sair"){ // Enquanto a condição do laço for diferente de "sair" ele continua criando personagens.
nome = prompt("Digite o nome do seu Heroi :") // pergunta e armazena o nome do personagem.
quantidadeDeXP = Number(prompt("Digite sua quantidade de XP! : ")) // pergunta quanto e  Armazena a quantidade de XP
entrada = prompt("Digite 'sair' P/ Encerrar! Ou crie outro personagem :) ")
console.log("Olá Aventureiro : " + nome + "!") // Mensagem de "Olá Aventureiro".
console.log("Seu XP Atual é de :  " + quantidadeDeXP + "!📈") // Mostra uma mensagem  C/ a quantidade de XP.

if(quantidadeDeXP <= 1000){ //se o valor do XP for  menor ou igual a 1000 sua Divisão sera Ferro.
    console.log("Sua divisão é : Ferro!🧭\n")
    console.log("-------------------------------\n")
} else if(quantidadeDeXP >= 1001 && quantidadeDeXP <=2000){//se o valor do XP for  1001 ou menor ou igual a 2000 sua Divisão sera Bronze.
    console.log("Sua divisão é : Bronze!🎒\n")
    console.log("-------------------------------")
} else if(quantidadeDeXP >= 2001 && quantidadeDeXP <=5000){//se o valor do XP for 2001 ou menor ou igual a 5000 sua Divisão sera Prata
    console.log("Sua divisão é : Prata!🥈\n")
    console.log("-------------------------------\n")
} else if(quantidadeDeXP >= 5001 && quantidadeDeXP <=7000){//se o valor do XP for 5001 ou menor ou igual a 7000 sua Divisão sera Ouro.
    console.log("Sua divisão é : Ouro!🥇\n")
    console.log("-------------------------------\n")
} else if(quantidadeDeXP >= 7001 && quantidadeDeXP <=8000){//se o valor do XP for  7001 ou menor ou igual a 8000 sua Divisão sera Platina.
    console.log("Sua divisão é : Platina!⚔️\n")
    console.log("-------------------------------\n")
} else if(quantidadeDeXP >= 8001 && quantidadeDeXP <=9000){//se o valor do XP for 8001 ou menor ou igual a 9000 sua Divisão sera Ascendente.
    console.log("Sua divisão é : Ascendente!🚀\n")
    console.log("-------------------------------\n")
} else if(quantidadeDeXP >= 9001 && quantidadeDeXP <=10000){//se o valor do XP for 9001 ou menor ou igual a 10000 sua Divisão sera Imortal.
    console.log("Sua divisão é : Imortal!🛡️\n")
    console.log("-------------------------------\n")
} else if(quantidadeDeXP >=10001){//se o valor do XP for  10001 ou maior sua Divisão sera Radiante.
    console.log("Sua divisão é : Radiante!🌟 \n")
    console.log("-------------------------------\n")
}
}