import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
      <div>
        <div className="blog-container">
          <Card border="primary ">
            <Card.Header>difference between javascript and node.js</Card.Header>
            <Card.Body>
              <Card.Text>
                1.Its a backend Framework used to built server side of the web
                applications.
                <br />
                2.Its writen in JS. Unlike JS its used outside the browser.
                <br />
                3.You can use it to built web applications , desktop and mobile
                softwares.
                <br />
                4.You can do file system manipulation (file handling), Database.
                which you cant do in JS.
                <br />
                5.And also in terms of security its better than JS.(imagine that
                you are using a API in your web site. And you are using it in
                you JS file. It can be viewed by other people and they will also
                use it).
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary">
            <Card.Header>
              When should you use node js and when should you use mongodb
            </Card.Header>
            <Card.Body>
              <Card.Text>
               NodeJS is an application runtime environment that allows you to write server-side applications in JavaScript. Thanks to its unique I/O model, it excels at the sort of scalable and real-time situations we are increasingly demanding of our servers. Its also lightweight, efficient, and its ability to use JavaScript on both frontend and backend opens new avenues for development.
             MongoDB facilitate to store database in json(javascript object notation) (or simply when data in form of key value pair) this is very fast and efficient so you should use it when you have key value pair to store(json data)
              one of the best advantage with MongoDB is you can store a collection inside another collection (in relational database is can be said as table inside another table) this neglect use of “join”

              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="success">
            <Card.Header>Differences between `sql` and `nosql` databases.</Card.Header>
            <Card.Body>
          
              <Card.Text>
               1. SQL databases are relational, NoSQL databases are non-relational.
              2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
              3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
              4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
              5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
};

export default About;