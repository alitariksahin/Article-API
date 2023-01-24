# Article-API

This project aims to create an interactive database for various articles.<br> 
Here is the link: https://article-api-ats.onrender.com

<h2>Technologies used in this project</h2>

Server side is built on <strong>Node.js/Express</strong> and powered with <strong>mongoDB</strong> <br>
Client side is made with <strong>Node.js/EJS</strong>

<h2>Functionality of the project</h2>
<ul>
<li>All of the data is stored in my server on mongoDB. Also, I created a <strong>REST API</strong> which has access to this server and data.<br>
Besides I added some further functionality to be able to manipulate data.</li>
<li>You can access this REST API via this extension "/articles" and you can apply all the crud operations by sending requests to <br>
"/articles" and "/articles/:id".<br></li>
<li>In order to make these accesses more flexible, I decided to add a useful client side and made an easy to use website on the same <br>
domain. In this web page I allowed all the users to manipulate the data like adding, editing, deleting.</li>
<li>In this way, users are granted two way of accessing and manipulating the data in my API: one is through the web page, and the other<br>
is through requests they make via their applications or code.</li>
</ul>

<h2>Structure of the code</h2>
My code structure includes both client-side work and server-side work, but they work seperately. <br>
By refactoring I carried all the heavy work of server side to controllers. Server-side-routes gather the request made externally and <br>
pass the to controllers to handle.<br>
On the other side, Client-side-routes handle request made on webpage and almost all the work is passed to the server side through <br>
middlewares, so website works clean and properly. Finally, ejs codes in views folder helps web pages to be dynamic and responsive.




