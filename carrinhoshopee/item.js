// class item{
//     constructor(nomeItem, Quantidade, precoUnitario){
//         this.nomeItem = nomeItem;
//         this.Quantidade = Quantidade;
//         this.precoUnitario = precoUnitario;
//     }

//     getName(){
//         return this.nomeItem;
//     }
//     getPreco(){
//         return this.precoUnitario;
//     }
//     getQuantidade(){
//         return this.Quantidade;
//     }

//     setNome(nomeItem){
//         this.nomeItem = nomeItem;
//     }
//     setQuantidade(Quantidade){
//         this.Quantidade = Quantidade;
//     }
//     setPrecoUnitario(precoUnitario){
//         this.precoUnitario = precoUnitario;
//     }
// }

async function createItem(name,quantity, price) {
    return {
        name,
        price,
        quantity,
        subtotal: () => {
            return price * quantity;
        }
    }
}

export {createItem}
