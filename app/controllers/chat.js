module.exports.iniciaChat = function(application, req, res) {

    let dadosForm = req.body;

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').isLength({min:3, max: 15});

    let erros = req.validationErrors();

    if(erros) {
        res.render('index', {validacao : erros});
        return;
    }

    res.render('chat');

};