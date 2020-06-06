const connection = require('../database/connection');

module.exports = {
    async ListComments(request, response){
        const comments = await connection('comments').select('*');
        return response.json(comments);
    },
    async CreateComment(request, response){
        const { comment } = request.body;
        await connection('comments').insert({
            comment,
        })
        return response.json("Comentário Criado com Sucesso");     
    }
}