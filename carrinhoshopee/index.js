import {adicionarItem, removerItem, calcularTotal, deletarItem} from "./services/carrinho.js"
import { createItem } from "./services/item.js"
const carrinho = [];

console.log("Bem vindo a shopee");

const item1 = await createItem("Shampoo XLR8", 3, 20.00);
const item2 = await createItem("Pasta de Dente", 3, 8.79);
const item3 = await createItem("Condicionador", 2, 21.99);
const item4 = await createItem("Agua Sanitaria", 3, 15.00);
const item5 = await createItem("Gatorade", 3, 6.90);
const item6 = await createItem("Coca-Cola Lata", 1, 5.00);
const item7 = await createItem("Pringles", 1, 11.00);
const item8 = await createItem("Banana", 5, 0.49);
const item9 = await createItem("Maça", 5, 0.68);
const item10 = await createItem("M&M", 2, 10.00);

adicionarItem(carrinho, item1);
adicionarItem(carrinho, item2);
adicionarItem(carrinho, item3);
adicionarItem(carrinho, item4);
adicionarItem(carrinho, item5);
adicionarItem(carrinho, item8);
adicionarItem(carrinho, item9);
adicionarItem(carrinho, item6);

deletarItem(carrinho, "Shampoo XLR8");
removerItem(carrinho, 1, "Pasta de Dente")
removerItem(carrinho, 1, "Pasta de Dente")
removerItem(carrinho, 1, "Pasta de Dente")
carrinho.forEach(element => {
    console.log(element.name);    
});

const totalCarrinho = await calcularTotal(carrinho)
console.log(totalCarrinho);
