//Codificado por Kaliny

    const itens = [ { //objeto que vai armazenar todos os produtos
        id: 0,
        nome: 'produto1',
        img: '1.png',
        quantidade: 0
    },

    { 
        id: 1,
        nome: 'produto2',
        img: '2.png',
        quantidade: 0
    },

    { 
        id: 2,
        nome: 'produto3',
        img: '2.png',
        quantidade: 0
    },

    { 
        id: 3,
        nome: 'produto4',
        img: '3.png',
        quantidade: 0
    },
        
    ]

    inicializarloja = () => {
        var containerProdutos = document.getElementById('produtos');
        itens.map((val)=>{
            containerProdutos.innerHTML+= `
            <div class="produto-single">
                <img src="'+val.img+'"></img>
                <p>`+val.nome+`</p>
                <a key="`+val.id+`" href="">Adicionar ao carrinho</a>
            </div>
            `;
        }) 
    }

    inicializarloja();

    atualizarCarrinho = () => {
        var containerCarrinho = document.getElementById('carrinho');
        containerCarrinho.innerHTML = "";
        itens.map((val)=>{
            if(val.quantidade > 0){
                containerCarrinho.innerHTML+= `
                <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
                `;
            }
        })
    }

    var links = document.getElementsByTagName('a');

    for(var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(){
            let key = this.getAttribute('key');
            itens[key].quantidade++;
            atualizarCarrinho();
            return false;
        })
    }