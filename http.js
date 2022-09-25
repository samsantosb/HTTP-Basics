/*What is HTTP?*/
/*HTTP is the protocol that governs communications between web browsers and web servers.
HTTP stands for Hyper Text Transfer Protocol.
HTTP is the foundation of data communication for the World Wide Web.
HTTP is a client-server protocol, which means requests are initiated by the recipient
usually the Web browser.
HTTP is a stateless protocol, which means that the server does not keep any data*/]

/*HTTP Methods*/
/*The HTTP protocol defines a set of request methods to indicate the desired 
action to be performed for a given resource.*/
/*The most common HTTP methods are:*/
/*GET: Requests a representation of the specified resource. Requests using GET should only retrieve data.*/
/*POST: Submits data to be processed to a specified resource. In the HTTP protocol, 
a POST request is used to submit an entity to the specified resource,
often causing a change in state or side effects on the server.*/
/*PUT: Replaces all current representations of the target resource with the uploaded content.*/
/*DELETE: Removes all current representations of the target resource given by a URI.*/
/*HEAD: Asks for a response identical to that of a GET request, but without the response body.*/

/*HTTP Status Codes*/
/*The HTTP response status code indicates whether a specific HTTP request has been successfully completed.
Responses are grouped in five classes:*/

/*1xx: Informational responses*/
/*2xx: Successful responses*/
/*3xx: Redirects*/
/*4xx: Client errors*/
/*5xx: Server errors*/

/*HTTP Headers*/
/*An HTTP header consists of its case-insensitive name followed by a colon (:) and the value of the header.*/
/*The general format of an HTTP header is:*/
/*Header-Name: Header-Value*/
/*The following are the most common HTTP headers:*/
/*Accept: The Accept request HTTP header advertises which content types, expressed as MIME types,
the client is able to understand. Using content negotiation, the server selects one of the proposals,
uses it and informs the client of its choice with the Content-Type response header.*/
/*Accept-Charset: The Accept-Charset request HTTP header advertises which character sets the client is able to understand.
Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the
Content-Type response header.
//Example: Accept-Charset: utf-8*/
/*Accept-Encoding: The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm,
the client is able to understand. Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header.
//Example: Accept-Encoding: gzip, deflate*/
/*Accept-Language: The Accept-Language request HTTP header advertises which languages the client is able to understand,
and which locale variant is preferred. Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header.
//Example: Accept-Language: en-US*/
/*Authorization: The Authorization request HTTP header contains the credentials to authenticate a user agent with a server,
usually, but not necessarily, after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.
//Example: Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==*/
/*Cache-Control: The Cache-Control general-header field is used to specify directives that must be obeyed by all caching mechanisms along the request/response chain.
//Example: Cache-Control: no-cache*/


/*HTTP Cookies*/
/*HTTP cookies (also called web cookies, Internet cookies, 
    browser cookies or simply cookies) are small pieces of 
data that a server sends to the user's web browser.
The browser may store it and send it back with later requests to the same server.
//Example: Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1*/

/*HTTP Authentication*/
/*HTTP authentication is a method for an HTTP user agent (for example, a web browser,
or a custom application)
to provide a user name and password when making a request.
//Example: Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==*/

/*HTTP Request*/
/*The HTTP request is the first message sent by the client to the server.
The request contains the following components:
// 
//for example: GET /index.html HTTP/1.1
//
*/

/*HTTP Reponse*/
/*The HTTP response is the second message sent by the server to the client.
The response contains the following components:*/

/*Body of the HTTP Request*/
/*The body of the HTTP request is the data that is sent to the server.
The body of the HTTP request is used to send data to the server.*/

/*Body of the HTTP Response*/
/*The body of the HTTP response is the data that is sent to the client.
The body of the HTTP response is used to send data to the client.*/

/*Route Parameters*/
/*Route parameters are named URL segments that are used to capture 
the values specified at their position in the URL.
The captured values are populated in the req.params object,
with the name of the route parameter specified in the path as their respective keys.*/

/*Query Parameters*/
/*Query parameters are name-value pairs that are appended to a URL to
identify a specific resource.*/
/*The query string is the part of a uniform resource locator (URL) which assigns values to specified parameters.
The query string commonly includes fields added to a base URL by a Web browser or other client application,
for example as part of an HTML form.*/






