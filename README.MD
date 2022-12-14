# EN/US

## What is HTTP?

- HTTP is the protocol that governs communications between web browsers and web servers.
- HTTP stands for Hyper Text Transfer Protocol.
- HTTP is the foundation of data communication for the World Wide Web.
- HTTP is a client-server protocol, which means requests are initiated by the recipient
  usually the Web browser.
- HTTP is a stateless protocol, which means that the server does not keep any data

## HTTP Methods

- The HTTP protocol defines a set of request methods to indicate the desired
  action to be performed for a given resource.
- The most common HTTP methods are:
- GET: Requests a representation of the specified resource. Requests using GET should only retrieve data.\*/
- POST: Submits data to be processed to a specified resource. In the HTTP protocol,
  a POST request is used to submit an entity to the specified resource,
  often causing a change in state or side effects on the server.
- PUT: Replaces all current representations of the target resource with the uploaded content.
- DELETE: Removes all current representations of the target resource given by a URI.

## HTTP Status Codes

The HTTP response status code indicates whether a specific HTTP request has been successfully completed.
Responses are grouped in five classes:

- 1xx: Informational responses
- 2xx: Successful responses
- 3xx: Redirects
- 4xx: Client errors
- 5xx: Server error

## HTTP Request

- The HTTP request is the first message sent by the client to the server.

## HTTP Response

- The HTTP response is the second message sent by the server to the client.

## HTTP Headers

- A HTTP header consists of its case-insensitive name followed by a colon (:) and the value of the header.
  The general format of an HTTP header is:

## HTTP Body

- The body of the HTTP request is the data that is sent to the server.
  The body of the HTTP reponse is used to send data from the server

## HTTP Route Params

- Route parameters are named URL segments that are used to capture
  the values specified at their position in the URL. The captured values are
  populated in the req.params object, with the name of the route parameter
  specified in the path as their respective keys.

## HTTP Query Params

- Query parameters are name-value pairs that are appended to a URL to
  identify a specific resource.
- The query string is the part of a uniform resource locator (URL) which assigns values to specified parameters.
  The query string commonly includes fields added to a base URL by a Web browser or other client application,
  for example as part of an HTML form.

## HTTP Header

An HTTP header consists of its case-insensitive name followed by a colon (:) and the value of the header.
The general format of an HTTP header is:
Header-Name: Header-Value

The following are the most common HTTP headers:

- Accept: The Accept request HTTP header advertises which content types, expressed as MIME types,
  the client is able to understand. Using content negotiation, the server selects one of the proposals,
  uses it and informs the client of its choice with the Content-Type response header.
- The Accept-Charset request HTTP header advertises which character sets the client is able to understand.
  Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header
  Example: Accept-Charset: utf-8\*
- Accept-Encoding: The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand. Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header.
  Example: Accept-Encoding: gzip, deflate
- Accept-Language: The Accept-Language request HTTP header advertises which languages the client is able to understand, and which locale variant is preferred. Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header.
  Example: Accept-Language: en-US
- Authorization: The Authorization request HTTP header contains the credentials to authenticate a user agent with a server, usually, but not necessarily, after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.
  Example: Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
- Cache-Control: The Cache-Control general-header field is used to specify directives that must be obeyed by all caching mechanisms along the request/response chain
  Example: Cache-Control: no-cache

## STATUS CODE DETAILS

## Ok

- Ok is a successful response. It is used when the request has succeeded.
  the meaning of a success varies depending on the HTTP method:
  GET: The resource has been fetched and is transmitted in the message body.
  HEAD: The entity headers are in the message body.
  PUT or POST: The resource describing the result of the action is transmitted in the message body.
  TRACE: The message body contains the request message as received by the server\*/

## Created

- Created is a successful response. It is used when a new resource has been created.
  The newly created resource can be referenced by the URI(s) returned in the entity of the response,
  with the most specific URI for the resource given by a Location header field.
  The response SHOULD include an entity containing a list of resource characteristics and location(s)
  from which the user or user agent can choose the one most appropriate. The entity format is specified
  by the media type given in the Content-Type header field. The origin server MUST create the resource
  before returning the 201 status code. If the action cannot be carried out immediately, the server SHOULD
  respond with 202 (Accepted) response instead.

## Accepted

- Accepted is a successful response. It is used when the request has been accepted for processing,
  but the processing has not been completed. The request might or might not eventually be acted upon,
  as it might be disallowed when processing actually takes place. There is no facility for re-sending a status
  code from an asynchronous operation such as this.

## No_content

- No Content is a successful response. It is used when the request has succeeded,
  but that there is no new information to send back in the response payload body.
  Metadata in the response header fields refer to the target resource and its selected representation
  after the requested action was applied.

## Bad_request

- Bad Request is a client error response. It is used when the request cannot be understood by the server
  due to malformed syntax. The client SHOULD NOT repeat the request without modifications.

## Unauthorized

- Unauthorized is a client error response. It is used when the request has not been applied
  because it lacks valid authentication credentials for the target resource.

## Forbidden

- Forbidden is a client error response. It is used when the request has not been applied
  because it lacks valid authentication credentials for the target resource.

## Not_found

- Not Found is a client error response. It is used when the origin server did not find a current representation
  for the target resource or is not willing to disclose that one exists.

## Internal_server_error

- Internal Server Error is a server error response. It is used when the server encountered an unexpected condition that prevented it from fulfilling the request.

## Bad_gateway

- Bad Gateway is a server error response. It is used when the server, while acting as a gateway or proxy,
  received an invalid response from the upstream server it accessed in attempting to fulfill the request.

## Service_unavailable

- ervice Unavailable is a server error response. It is used when the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.
  The server SHOULD send a Retry-After header field to suggest an appropriate amount of time for the client
  to wait before retrying the request.

## Gateway_timeout

- Gateway Timeout is a server error response. It is used when the server, while acting as a gateway or proxy,
  did not receive a timely response from an upstream server it needed to access in order to complete the request.

---

# PT-BR

## O que ?? HTTP?

- HTTP ?? o protocolo que rege as comunica????es entre navegadores da web e servidores da web.
- HTTP significa Hyper Text Transfer Protocol.
- HTTP ?? a base da comunica????o de dados para a World Wide Web.
- HTTP ?? um protocolo cliente-servidor, o que significa que as solicita????es s??o iniciadas pelo destinat??rio
  geralmente o navegador da Web.
- HTTP ?? um protocolo sem estado, o que significa que o servidor n??o mant??m nenhum dado

## M??todos HTTP

- O protocolo HTTP define um conjunto de m??todos de solicita????o para indicar o
  a????o a ser executada para um determinado recurso.
- Os m??todos HTTP mais comuns s??o:
- GET: Solicita uma representa????o do recurso especificado. Solicita????es usando GET devem apenas recuperar dados.
- POST: Envia dados a serem processados ??????para um recurso especificado. No protocolo HTTP,
  uma solicita????o POST ?? usada para enviar uma entidade ao recurso especificado,
  muitas vezes causando uma mudan??a no estado ou efeitos colaterais no servidor.
- PUT: Substitui todas as representa????es atuais do recurso de destino pelo conte??do carregado.
- DELETE: remove todas as representa????es atuais do recurso de destino fornecidas por um URI.

## C??digos de status HTTP

O c??digo de status de resposta HTTP indica se uma solicita????o HTTP espec??fica foi conclu??da com ??xito.
As respostas s??o agrupadas em cinco classes:

- 1xx: respostas informativas
- 2xx: respostas bem-sucedidas
- 3xx: Redirecionamentos
- 4xx: Erros do cliente
- 5xx: erro do servidor

## Solicita????o HTTP

- A solicita????o HTTP ?? a primeira mensagem enviada pelo cliente ao servidor.

## Resposta HTTP

- A resposta HTTP ?? a segunda mensagem enviada pelo servidor ao cliente.

## Corpo HTTP

- O corpo da solicita????o HTTP s??o os dados que s??o enviados ao servidor.
  O corpo da resposta HTTP ?? usado para enviar dados do servidor

## Par??metros de rota HTTP

- Par??metros de rota s??o segmentos de URL nomeados que s??o usados ??????para capturar
  os valores especificados em sua posi????o na URL. Os valores capturados s??o
  preenchido no objeto req.params, com o nome do par??metro de rota
  especificados no caminho como suas respectivas chaves.

## Par??metros de consulta HTTP

- Par??metros de consulta s??o pares nome-valor que s??o anexados a um URL para
  identificar um recurso espec??fico.
- A string de consulta ?? parte de um localizador uniforme de recursos (URL) que atribui valores a par??metros especificados.
  A string de consulta geralmente inclui campos adicionados a uma URL base por um navegador da Web ou outro aplicativo cliente,
  por exemplo, como parte de um formul??rio HTML.

## Cabe??alho HTTP

Um cabe??alho HTTP consiste em seu nome que n??o diferencia mai??sculas de min??sculas seguido por dois pontos (:) e o valor do cabe??alho.
O formato geral de um cabe??alho HTTP ??:
Nome do Cabe??alho: Valor do Cabe??alho

A seguir est??o os cabe??alhos HTTP mais comuns:

- Aceitar: o cabe??alho HTTP da solicita????o Aceitar anuncia quais tipos de conte??do, expressos como tipos MIME,
  o cliente ?? capaz de entender. Usando a negocia????o de conte??do, o servidor seleciona uma das propostas,
  usa e informa o cliente de sua escolha com o cabe??alho de resposta Content-Type.
- O cabe??alho HTTP da solicita????o Accept-Charset anuncia quais conjuntos de caracteres o cliente ?? capaz de entender.
  Usando a negocia????o de conte??do, o servidor seleciona uma das propostas, usa-a e informa o cliente de sua escolha com o cabe??alho de resposta Content-Type
  Exemplo: Accept-Charset: utf-8
- Accept-Encoding: O cabe??alho HTTP da solicita????o Accept-Encoding anuncia qual codifica????o de conte??do, geralmente um algoritmo de compacta????o, o cliente ?? capaz de entender. Utilizando a negocia????o de conte??do, o servidor seleciona uma das propostas, utiliza-a e informa ao cliente sua escolha com o cabe??alho de resposta Content-Type.
  Exemplo: Accept-Encoding: gzip, deflate
- Accept-Language: O cabe??alho HTTP da solicita????o Accept-Language anuncia quais idiomas o cliente pode entender e qual variante de localidade ?? preferida. Utilizando a negocia????o de conte??do, o servidor seleciona uma das propostas, utiliza-a e informa ao cliente sua escolha com o cabe??alho de resposta Content-Type.
  Exemplo: Accept-Language: en-US
- Autoriza????o: O cabe??alho HTTP da solicita????o de autoriza????o cont??m as credenciais para autenticar um agente de usu??rio com um servidor, geralmente, mas n??o necessariamente, ap??s o servidor ter respondido com um status 401 Unauthorized e o cabe??alho WWW-Authenticate.
  Exemplo: Autoriza????o: B??sico QWxhZGRpbjpvcGVuIHNlc2FtZQ==
- Cache-Control: O campo de cabe??alho geral Cache-Control ?? usado para especificar diretivas que devem ser obedecidas por todos os mecanismos de cache ao longo da cadeia de solicita????o/resposta
  Exemplo: Cache-Control: no-cache

## DETALHES STATUS CODE

## Ok

- Ok ?? uma resposta bem sucedida. ?? usada quando a solicita????o foi bem sucedida.
  O significado de um sucesso varia dependendo do m??todo HTTP:
  GET: O recurso foi buscado e transmitido no corpo da mensagem.
  HEAD: Os cabe??alhos da entidade est??o no corpo da mensagem.
  PUT ou POST: O recurso que descreve o resultado da a????o ?? transmitido no corpo da mensagem.
  TRACE: O corpo da mensagem cont??m a mensagem de solicita????o recebida pelo servidor\*/

## Created

- Created ?? uma resposta bem sucedida. ?? usada quando um novo recurso foi criado.
  O novo recurso criado pode ser referenciado pelo URI(s) retornado na entidade da resposta,
  com o URI mais espec??fico para o recurso fornecido por um cabe??alho de localiza????o.
  A resposta DEVE incluir uma entidade contendo uma lista de caracter??sticas do recurso e localiza????o(s)
  de onde o usu??rio ou agente do usu??rio pode escolher o mais apropriado. O formato da entidade ?? especificado
  pelo tipo de m??dia fornecido no cabe??alho Content-Type. O servidor de origem DEVE criar o recurso
  antes de retornar o c??digo de status 201. Se a a????o n??o puder ser executada imediatamente,
  o servidor DEVE responder com a resposta 202 (Aceito) em vez disso.

## Aaccepted

- Aceito ?? uma resposta bem sucedida. ?? usada quando a solicita????o foi aceita para processamento,
  mas o processamento ainda n??o foi conclu??do. A solicita????o pode ou n??o ser eventualmente executada,
  pois pode ser negada quando o processamento ?? realizado. N??o h?? meios para reenviar um c??digo de status
  de uma opera????o ass??ncrona como esta.

## No_content

- Sem conte??do ?? uma resposta bem sucedida. ?? usada quando a solicita????o foi bem sucedida,
  mas n??o h?? novas informa????es para enviar de volta no corpo da resposta de carga ??til.
  Os metadados nos campos de cabe??alho da resposta se referem ao recurso de destino e sua representa????o
  selecionada ap??s a aplica????o da a????o solicitada.

## Bad_request

- Bad Request ?? uma resposta de erro do cliente. ?? usada quando a solicita????o n??o pode ser entendida pelo servidor devido a sintaxe mal formada. O cliente N??O DEVE repetir a solicita????o sem modifica????es.

## Unauthorized

- N??o autorizado ?? uma resposta de erro do cliente. ?? usada quando a solicita????o n??o foi aplicada
  porque n??o possui credenciais de autentica????o v??lidas para o recurso de destino.

## Forbidden

- Proibido ?? uma resposta de erro do cliente. ?? usada quando a solicita????o n??o foi aplicada
  porque n??o possui credenciais de autentica????o v??lidas para o recurso de destino.

## Not_found

- N??o encontrado ?? uma resposta de erro do cliente. ?? usada quando o servidor de origem n??o encontrou uma representa????o atual para o recurso de destino ou n??o est?? disposto a revelar que um existe.

## Internal_server_error

- Erro interno do servidor ?? uma resposta de erro do servidor. ?? usada quando o servidor encontrou uma condi????o inesperada que o impediu de cumprir a solicita????o.

## Bad_gateway

- Bad Gateway ?? uma resposta de erro do servidor. ?? usada quando o servidor, enquanto atua como gateway ou proxy, recebeu uma resposta inv??lida do servidor upstream que ele acessou ao tentar cumprir a solicita????o.

## Service_unavailable

- Servi??o indispon??vel ?? uma resposta de erro do servidor. ?? usada quando o servidor n??o pode atualmente lidar com a solicita????o devido a uma sobrecarga tempor??ria ou manuten????o programada, que provavelmente ser?? aliviada ap??s algum atraso. O servidor DEVE enviar um campo Retry-After para sugerir uma quantidade apropriada de tempo para o cliente para tentar novamente a solicita????o.

## Gateway_timeout

- Gateway Timeout ?? uma resposta de erro do servidor. ?? usada quando o servidor, enquanto atua como gateway ou proxy, n??o recebeu uma resposta oportuna do servidor upstream que ele precisava acessar para concluir a solicita????o.
