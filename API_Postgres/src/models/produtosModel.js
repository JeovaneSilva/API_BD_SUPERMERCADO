const conect = require("../database/db");

class ProdutosModel {
   async listar() {
        await conect.connect()
        const res = await conect.query( "Select * from produto")
        return res.rows
    }

    async listarId(id) {
        await conect.connect()
        const res = await conect.query("Select * from produto where id_produto=$1", [id]);
        return res.rows
    }

    async criar(produto) {
        await conect.connect()
        const sql = "insert into produto(nome_produto,preco) values ($1,$2)";
        const values = [produto.nome_produto, produto.preco];
        return await conect.query(sql, values);
    }

    async update(id_produto, produto){
        await conect.connect();
        const sql = "update produto set nome_produto=$1, preco=$2 where id_produto=$3";
        const values = [produto.nome_produto, produto.preco, id_produto];
        await conect.query(sql, values);
    }

    async delete(id_produto){
        await conect.connect();
        const sql = "delete from produto where id_produto=$1";
        const values = [id_produto];
        await conect.query(sql, values);
    }
}

module.exports = new ProdutosModel()