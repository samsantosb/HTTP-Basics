const StatusCode = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
};


module.exports = { StatusCode }


//PT-BR
//OK
/*Ok é uma resposta bem sucedida. É usada quando a solicitação foi bem sucedida.
O significado de um sucesso varia dependendo do método HTTP:
GET: O recurso foi buscado e transmitido no corpo da mensagem.
HEAD: Os cabeçalhos da entidade estão no corpo da mensagem.
PUT ou POST: O recurso que descreve o resultado da ação é transmitido no corpo da mensagem.
TRACE: O corpo da mensagem contém a mensagem de solicitação recebida pelo servidor*/

//CREATED
/*Created é uma resposta bem sucedida. É usada quando um novo recurso foi criado.
O novo recurso criado pode ser referenciado pelo URI(s) retornado na entidade da resposta,
com o URI mais específico para o recurso fornecido por um cabeçalho de localização.
A resposta DEVE incluir uma entidade contendo uma lista de características do recurso e localização(s)
de onde o usuário ou agente do usuário pode escolher o mais apropriado. O formato da entidade é especificado
pelo tipo de mídia fornecido no cabeçalho Content-Type. O servidor de origem DEVE criar o recurso
antes de retornar o código de status 201. Se a ação não puder ser executada imediatamente,
o servidor DEVE responder com a resposta 202 (Aceito) em vez disso.*/

//ACCEPTED
/*Aceito é uma resposta bem sucedida. É usada quando a solicitação foi aceita para processamento,
mas o processamento ainda não foi concluído. A solicitação pode ou não ser eventualmente executada,
pois pode ser negada quando o processamento é realizado. Não há meios para reenviar um código de status
de uma operação assíncrona como esta.*/

//NO_CONTENT
/*Sem conteúdo é uma resposta bem sucedida. É usada quando a solicitação foi bem sucedida,
mas não há novas informações para enviar de volta no corpo da resposta de carga útil.
Os metadados nos campos de cabeçalho da resposta se referem ao recurso de destino e sua representação
selecionada após a aplicação da ação solicitada.*/

//BAD_REQUEST
/*Bad Request é uma resposta de erro do cliente. É usada quando a solicitação não pode ser entendida pelo servidor
devido a sintaxe mal formada. O cliente NÃO DEVE repetir a solicitação sem modificações.*/

//UNAUTHORIZED
/*Não autorizado é uma resposta de erro do cliente. É usada quando a solicitação não foi aplicada
porque não possui credenciais de autenticação válidas para o recurso de destino.*/

//FORBIDDEN
/*Proibido é uma resposta de erro do cliente. É usada quando a solicitação não foi aplicada
porque não possui credenciais de autenticação válidas para o recurso de destino.*/

//NOT_FOUND
/*Não encontrado é uma resposta de erro do cliente. É usada quando o servidor de origem não encontrou uma representação atual
para o recurso de destino ou não está disposto a revelar que um existe.*/

//INTERNAL_SERVER_ERROR
/*Erro interno do servidor é uma resposta de erro do servidor. É usada quando o servidor encontrou uma condição inesperada
que o impediu de cumprir a solicitação.*/

//BAD_GATEWAY
/*Bad Gateway é uma resposta de erro do servidor. É usada quando o servidor, enquanto atua como gateway ou proxy,
recebeu uma resposta inválida do servidor upstream que ele acessou ao tentar cumprir a solicitação.*/

//SERVICE_UNAVAILABLE
/*Serviço indisponível é uma resposta de erro do servidor. É usada quando o servidor não pode atualmente lidar com a solicitação
devido a uma sobrecarga temporária ou manutenção programada, que provavelmente será aliviada após algum atraso.
O servidor DEVE enviar um campo Retry-After para sugerir uma quantidade apropriada de tempo para o cliente
para tentar novamente a solicitação.*/

//GATEWAY_TIMEOUT
/*Gateway Timeout é uma resposta de erro do servidor. É usada quando o servidor, enquanto atua como gateway ou proxy,
não recebeu uma resposta oportuna do servidor upstream que ele precisava acessar para concluir a solicitação.*/







