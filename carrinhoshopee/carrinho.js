async function adicionarItem(carrinho, item){
    carrinho.push(item);
}

async function deletarItem(carrinho, itemName){
    let i = 0;
    while(i<carrinho.length && carrinho[i].name != itemName){
        i++;
    }
    if(i === carrinho.length)
        console.log("item nao encontrado no carrinho");
    else{
        for(let j=i; j<carrinho.length; j++){
            carrinho[j] = carrinho[j+1];
        }
        carrinho.length -= 1;
    }
}

async function removerItem(carrinho, quantidade, itemName){
    let i=0;
    while(i < carrinho.length && carrinho[i].name != itemName)
        i++;
    if(i === carrinho.length){
        console.log("item nao encontrado no carrinho")
    }
    else if(carrinho[i].quantity === 1){
        deletarItem(carrinho, itemName)
    }
    else{
        carrinho[i].quantity -= quantidade;
    }
}

async function calcularTotal(carrinho){
    return carrinho.reduce((total,item) => total + item.subtotal(), 0);
}

export {adicionarItem, deletarItem, removerItem, calcularTotal};
