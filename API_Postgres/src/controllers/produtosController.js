const produtosModel = require('../models/produtosModel')

class ProdutosController {
    buscar() {
        return produtosModel.listar()
    }

    index(id) {
        return produtosModel.listarId(id)
    }

    create(produto) {
        return produtosModel.criar(produto)
    }

    update(id_produto, produto) {
        return produtosModel.update(id_produto, produto)
    }

    delete(id_produto) {
        return produtosModel.delete(id_produto)
    }
}

module.exports = new ProdutosController()