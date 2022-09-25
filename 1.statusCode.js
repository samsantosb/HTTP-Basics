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


//EN-US

//OK
/*Ok is a successful response. It is used when the request has succeeded.
The meaning of a success varies depending on the HTTP method:
GET: The resource has been fetched and is transmitted in the message body.
HEAD: The entity headers are in the message body.
PUT or POST: The resource describing the result of the action is transmitted in the message body.
TRACE: The message body contains the request message as received by the server*/

//CREATED
/*Created is a successful response. It is used when a new resource has been created.
The newly created resource can be referenced by the URI(s) returned in the entity of the response,
with the most specific URI for the resource given by a Location header field.
The response SHOULD include an entity containing a list of resource characteristics and location(s)
from which the user or user agent can choose the one most appropriate. The entity format is specified
by the media type given in the Content-Type header field. The origin server MUST create the resource
before returning the 201 status code. If the action cannot be carried out immediately, the server SHOULD
respond with 202 (Accepted) response instead.*/

//ACCEPTED
/*Accepted is a successful response. It is used when the request has been accepted for processing,
but the processing has not been completed. The request might or might not eventually be acted upon,
as it might be disallowed when processing actually takes place. There is no facility for re-sending a status
code from an asynchronous operation such as this.*/

//NO_CONTENT
/*No Content is a successful response. It is used when the request has succeeded,
but that there is no new information to send back in the response payload body.
Metadata in the response header fields refer to the target resource and its selected representation
after the requested action was applied.*/

//BAD_REQUEST
/*Bad Request is a client error response. It is used when the request cannot be understood by the server
due to malformed syntax. The client SHOULD NOT repeat the request without modifications.*/

//UNAUTHORIZED
/*Unauthorized is a client error response. It is used when the request has not been applied
because it lacks valid authentication credentials for the target resource.*/

//FORBIDDEN
/*Forbidden is a client error response. It is used when the request has not been applied
because it lacks valid authentication credentials for the target resource.*/

//NOT_FOUND
/*Not Found is a client error response. It is used when the origin server did not find a current representation
for the target resource or is not willing to disclose that one exists.*/

//INTERNAL_SERVER_ERROR
/*Internal Server Error is a server error response. It is used when the server encountered an unexpected condition
that prevented it from fulfilling the request.*/

//BAD_GATEWAY
/*Bad Gateway is a server error response. It is used when the server, while acting as a gateway or proxy,
received an invalid response from the upstream server it accessed in attempting to fulfill the request.*/


//SERVICE_UNAVAILABLE
/*Service Unavailable is a server error response. It is used when the server is currently unable to handle the request
due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.
The server SHOULD send a Retry-After header field to suggest an appropriate amount of time for the client
to wait before retrying the request.*/

//GATEWAY_TIMEOUT
/*Gateway Timeout is a server error response. It is used when the server, while acting as a gateway or proxy,
did not receive a timely response from an upstream server it needed to access in order to complete the request.*/

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







