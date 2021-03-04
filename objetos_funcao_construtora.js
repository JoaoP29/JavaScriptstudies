//aprendendo a criar objetos em js

function Pessoa(nome, sobrenome){
this.nome=nome;
this.sobrenome=sobrenome;
this.falar=function(){
    return('meu nome é ' + this.nome + ' ' + this.sobrenome);
    }
}

var programador=new Pessoa('João', 'Pedro');
console.log(programador.falar() + ' e eu sou desenvolvedor full stack no sidia');