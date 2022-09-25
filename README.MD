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
Responses are grouped in five classes:\*/

- 1xx: Informational responses
- 2xx: Successful responses
- 3xx: Redirects
- 4xx: Client errors
- 5xx: Server error

## HTTP Request

- The HTTP request is the first message sent by the client to the server.

## HTTP Response

- The HTTP response is the second message sent by the server to the client.

## HTTP Headers\*/

- A HTTP header consists of its case-insensitive name followed by a colon (:) and the value of the header._/
  The general format of an HTTP header is:_/

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

An HTTP header consists of its case-insensitive name followed by a colon (:) and the value of the header._/
The general format of an HTTP header is:_/
Header-Name: Header-Value\*

The following are the most common HTTP headers:

- Accept: The Accept request HTTP header advertises which content types, expressed as MIME types,
  the client is able to understand. Using content negotiation, the server selects one of the proposals,
  uses it and informs the client of its choice with the Content-Type response header.\*/
- The Accept-Charset request HTTP header advertises which character sets the client is able to understand.
  Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header
  Example: Accept-Charset: utf-8\*
- Accept-Encoding: The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand. Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header.
  Example: Accept-Encoding: gzip, deflate
- Accept-Language: The Accept-Language request HTTP header advertises which languages the client is able to understand, and which locale variant is preferred. Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header.
  Example: Accept-Language: en-US
- Authorization: The Authorization request HTTP header contains the credentials to authenticate a user agent with a server, usually, but not necessarily, after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.
  Example: Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==\*
- Cache-Control: The Cache-Control general-header field is used to specify directives that must be obeyed by all caching mechanisms along the request/response chain
  Example: Cache-Control: no-cache\*

## STATUS CODE DETAILS

## OK

- Ok is a successful response. It is used when the request has succeeded.
  the meaning of a success varies depending on the HTTP method:
  GET: The resource has been fetched and is transmitted in the message body.
  HEAD: The entity headers are in the message body.
  PUT or POST: The resource describing the result of the action is transmitted in the message body.
  TRACE: The message body contains the request message as received by the server\*/

## CREATED

- Created is a successful response. It is used when a new resource has been created.
  The newly created resource can be referenced by the URI(s) returned in the entity of the response,
  with the most specific URI for the resource given by a Location header field.
  The response SHOULD include an entity containing a list of resource characteristics and location(s)
  from which the user or user agent can choose the one most appropriate. The entity format is specified
  by the media type given in the Content-Type header field. The origin server MUST create the resource
  before returning the 201 status code. If the action cannot be carried out immediately, the server SHOULD
  respond with 202 (Accepted) response instead.\*/

# ACCEPTED

- Accepted is a successful response. It is used when the request has been accepted for processing,
  but the processing has not been completed. The request might or might not eventually be acted upon,
  as it might be disallowed when processing actually takes place. There is no facility for re-sending a status
  code from an asynchronous operation such as this.\*/

# NO_CONTENT

- No Content is a successful response. It is used when the request has succeeded,
  but that there is no new information to send back in the response payload body.
  Metadata in the response header fields refer to the target resource and its selected representation
  after the requested action was applied.\*/

## BAD_REQUEST

- Bad Request is a client error response. It is used when the request cannot be understood by the server
  due to malformed syntax. The client SHOULD NOT repeat the request without modifications.\*/

## UNAUTHORIZED

- Unauthorized is a client error response. It is used when the request has not been applied
  because it lacks valid authentication credentials for the target resource.\*/

## FORBIDDEN

- Forbidden is a client error response. It is used when the request has not been applied
  because it lacks valid authentication credentials for the target resource.\*/

## NOT_FOUND

- Not Found is a client error response. It is used when the origin server did not find a current representation
  for the target resource or is not willing to disclose that one exists.\*/

## INTERNAL_SERVER_ERROR

- Internal Server Error is a server error response. It is used when the server encountered an unexpected condition that prevented it from fulfilling the request.\*/

## BAD_GATEWAY

- Bad Gateway is a server error response. It is used when the server, while acting as a gateway or proxy,
  received an invalid response from the upstream server it accessed in attempting to fulfill the request.\*/

## SERVICE_UNAVAILABLE

- ervice Unavailable is a server error response. It is used when the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.
  The server SHOULD send a Retry-After header field to suggest an appropriate amount of time for the client
  to wait before retrying the request.\*/

## GATEWAY_TIMEOUT

- Gateway Timeout is a server error response. It is used when the server, while acting as a gateway or proxy,
  did not receive a timely response from an upstream server it needed to access in order to complete the request.

**********\*\*\*\***********\*\*\*\***********\*\*\*\***********\_\_\_**********\*\*\*\***********\*\*\*\***********\*\*\*\***********

# PT-BR

## O que é HTTP?

- HTTP é o protocolo que rege as comunicações entre navegadores da web e servidores da web.
- HTTP significa Hyper Text Transfer Protocol.
- HTTP é a base da comunicação de dados para a World Wide Web.
- HTTP é um protocolo cliente-servidor, o que significa que as solicitações são iniciadas pelo destinatário
  geralmente o navegador da Web.
- HTTP é um protocolo sem estado, o que significa que o servidor não mantém nenhum dado

## Métodos HTTP

- O protocolo HTTP define um conjunto de métodos de solicitação para indicar o
  ação a ser executada para um determinado recurso.
- Os métodos HTTP mais comuns são:
- GET: Solicita uma representação do recurso especificado. Solicitações usando GET devem apenas recuperar dados.
- POST: Envia dados a serem processados ​​para um recurso especificado. No protocolo HTTP,
  uma solicitação POST é usada para enviar uma entidade ao recurso especificado,
  muitas vezes causando uma mudança no estado ou efeitos colaterais no servidor.
- PUT: Substitui todas as representações atuais do recurso de destino pelo conteúdo carregado.
- DELETE: remove todas as representações atuais do recurso de destino fornecidas por um URI.

## Códigos de status HTTP

O código de status de resposta HTTP indica se uma solicitação HTTP específica foi concluída com êxito.
As respostas são agrupadas em cinco classes:\*/

- 1xx: respostas informativas
- 2xx: respostas bem-sucedidas
- 3xx: Redirecionamentos
- 4xx: Erros do cliente
- 5xx: erro do servidor

## Solicitação HTTP

- A solicitação HTTP é a primeira mensagem enviada pelo cliente ao servidor.

## Resposta HTTP

- A resposta HTTP é a segunda mensagem enviada pelo servidor ao cliente.

## Cabeçalhos HTTP\*/

- Um cabeçalho HTTP consiste em seu nome que não diferencia maiúsculas de minúsculas seguido por dois pontos (:) e o valor do cabeçalho._/
  O formato geral de um cabeçalho HTTP é:_/

## Corpo HTTP

- O corpo da solicitação HTTP são os dados que são enviados ao servidor.
  O corpo da resposta HTTP é usado para enviar dados do servidor

## Parâmetros de rota HTTP

- Parâmetros de rota são segmentos de URL nomeados que são usados ​​para capturar
  os valores especificados em sua posição na URL. Os valores capturados são
  preenchido no objeto req.params, com o nome do parâmetro de rota
  especificados no caminho como suas respectivas chaves.

## Parâmetros de consulta HTTP

- Parâmetros de consulta são pares nome-valor que são anexados a um URL para
  identificar um recurso específico.
- A string de consulta é parte de um localizador uniforme de recursos (URL) que atribui valores a parâmetros especificados.
  A string de consulta geralmente inclui campos adicionados a uma URL base por um navegador da Web ou outro aplicativo cliente,
  por exemplo, como parte de um formulário HTML.

## Cabeçalho HTTP

Um cabeçalho HTTP consiste em seu nome que não diferencia maiúsculas de minúsculas seguido por dois pontos (:) e o valor do cabeçalho._/
O formato geral de um cabeçalho HTTP é:_/
Nome do Cabeçalho: Valor do Cabeçalho\*

A seguir estão os cabeçalhos HTTP mais comuns:

- Aceitar: o cabeçalho HTTP da solicitação Aceitar anuncia quais tipos de conteúdo, expressos como tipos MIME,
  o cliente é capaz de entender. Usando a negociação de conteúdo, o servidor seleciona uma das propostas,
  usa e informa o cliente de sua escolha com o cabeçalho de resposta Content-Type.\*/
- O cabeçalho HTTP da solicitação Accept-Charset anuncia quais conjuntos de caracteres o cliente é capaz de entender.
  Usando a negociação de conteúdo, o servidor seleciona uma das propostas, usa-a e informa o cliente de sua escolha com o cabeçalho de resposta Content-Type
  Exemplo: Accept-Charset: utf-8\*
- Accept-Encoding: O cabeçalho HTTP da solicitação Accept-Encoding anuncia qual codificação de conteúdo, geralmente um algoritmo de compactação, o cliente é capaz de entender. Utilizando a negociação de conteúdo, o servidor seleciona uma das propostas, utiliza-a e informa ao cliente sua escolha com o cabeçalho de resposta Content-Type.
  Exemplo: Accept-Encoding: gzip, deflate
- Accept-Language: O cabeçalho HTTP da solicitação Accept-Language anuncia quais idiomas o cliente pode entender e qual variante de localidade é preferida. Utilizando a negociação de conteúdo, o servidor seleciona uma das propostas, utiliza-a e informa ao cliente sua escolha com o cabeçalho de resposta Content-Type.
  Exemplo: Accept-Language: en-US
- Autorização: O cabeçalho HTTP da solicitação de autorização contém as credenciais para autenticar um agente de usuário com um servidor, geralmente, mas não necessariamente, após o servidor ter respondido com um status 401 Unauthorized e o cabeçalho WWW-Authenticate.
  Exemplo: Autorização: Básico QWxhZGRpbjpvcGVuIHNlc2FtZQ==\*
- Cache-Control: O campo de cabeçalho geral Cache-Control é usado para especificar diretivas que devem ser obedecidas por todos os mecanismos de cache ao longo da cadeia de solicitação/resposta
  Exemplo: Cache-Control: no-cache\*

## DETALHES STATUS CODE

PT-BR

## OK

- Ok é uma resposta bem sucedida. É usada quando a solicitação foi bem sucedida.
  O significado de um sucesso varia dependendo do método HTTP:
  GET: O recurso foi buscado e transmitido no corpo da mensagem.
  HEAD: Os cabeçalhos da entidade estão no corpo da mensagem.
  PUT ou POST: O recurso que descreve o resultado da ação é transmitido no corpo da mensagem.
  TRACE: O corpo da mensagem contém a mensagem de solicitação recebida pelo servidor\*/

## CREATED

- Created é uma resposta bem sucedida. É usada quando um novo recurso foi criado.
  O novo recurso criado pode ser referenciado pelo URI(s) retornado na entidade da resposta,
  com o URI mais específico para o recurso fornecido por um cabeçalho de localização.
  A resposta DEVE incluir uma entidade contendo uma lista de características do recurso e localização(s)
  de onde o usuário ou agente do usuário pode escolher o mais apropriado. O formato da entidade é especificado
  pelo tipo de mídia fornecido no cabeçalho Content-Type. O servidor de origem DEVE criar o recurso
  antes de retornar o código de status 201. Se a ação não puder ser executada imediatamente,
  o servidor DEVE responder com a resposta 202 (Aceito) em vez disso.\*/

## ACCEPTED

- Aceito é uma resposta bem sucedida. É usada quando a solicitação foi aceita para processamento,
  mas o processamento ainda não foi concluído. A solicitação pode ou não ser eventualmente executada,
  pois pode ser negada quando o processamento é realizado. Não há meios para reenviar um código de status
  de uma operação assíncrona como esta.

## NO_CONTENT

- Sem conteúdo é uma resposta bem sucedida. É usada quando a solicitação foi bem sucedida,
  mas não há novas informações para enviar de volta no corpo da resposta de carga útil.
  Os metadados nos campos de cabeçalho da resposta se referem ao recurso de destino e sua representação
  selecionada após a aplicação da ação solicitada.

## BAD_REQUEST

- Bad Request é uma resposta de erro do cliente. É usada quando a solicitação não pode ser entendida pelo servidor devido a sintaxe mal formada. O cliente NÃO DEVE repetir a solicitação sem modificações.

## UNAUTHORIZED

- Não autorizado é uma resposta de erro do cliente. É usada quando a solicitação não foi aplicada
  porque não possui credenciais de autenticação válidas para o recurso de destino.

## FORBIDDEN

- Proibido é uma resposta de erro do cliente. É usada quando a solicitação não foi aplicada
  porque não possui credenciais de autenticação válidas para o recurso de destino.

## NOT_FOUND

- Não encontrado é uma resposta de erro do cliente. É usada quando o servidor de origem não encontrou uma representação atual para o recurso de destino ou não está disposto a revelar que um existe.

## INTERNAL_SERVER_ERROR

- Erro interno do servidor é uma resposta de erro do servidor. É usada quando o servidor encontrou uma condição inesperada que o impediu de cumprir a solicitação.

## BAD_GATEWAY

- Bad Gateway é uma resposta de erro do servidor. É usada quando o servidor, enquanto atua como gateway ou proxy, recebeu uma resposta inválida do servidor upstream que ele acessou ao tentar cumprir a solicitação.

## SERVICE_UNAVAILABLE

- Serviço indisponível é uma resposta de erro do servidor. É usada quando o servidor não pode atualmente lidar com a solicitação devido a uma sobrecarga temporária ou manutenção programada, que provavelmente será aliviada após algum atraso. O servidor DEVE enviar um campo Retry-After para sugerir uma quantidade apropriada de tempo para o cliente para tentar novamente a solicitação.

## GATEWAY_TIMEOUT

- Gateway Timeout é uma resposta de erro do servidor. É usada quando o servidor, enquanto atua como gateway ou proxy, não recebeu uma resposta oportuna do servidor upstream que ele precisava acessar para concluir a solicitação.
