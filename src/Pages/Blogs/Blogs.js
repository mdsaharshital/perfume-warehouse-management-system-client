import React from "react";

const Blogs = () => {
  return (
    <div className="p-4">
      <h1 className="text-center my-2">My Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 mx-auto">
        <div className="mx-2">
          <h4>Differences between SQL and NoSQL databases?</h4>
          <p>
            <span className="fw-bold">Answer:</span>
            <ol>
              <li>
                <span className="fw-bold">Type:</span> SQL databases are
                primarily called as Relational Databases (RDBMS); whereas NoSQL
                database are primarily called as non-relational or distributed
                database.
              </li>
              <li>
                <span className="fw-bold">Language:</span>
                SQL databases defines and manipulates data based structured
                query language (SQL). A NoSQL database has dynamic schema for
                unstructured data. Data is stored in many ways which means it
                can be document-oriented, column-oriented, graph-based or
                organized as a KeyValue store.
              </li>
              <li>
                <span className="fw-bold">The Scalability :</span>
                In almost all situations SQL databases are vertically scalable.
                This means that you can increase the load on a single server by
                increasing things like RAM, CPU or SSD. But on the other hand
                NoSQL databases are horizontally scalable. This means that you
                handle more traffic by sharding, or adding more servers in your
                NoSQL database
              </li>
              <li>
                <span className="fw-bold">The Structure :</span>
                SQL databases are table-based on the other hand NoSQL databases
                are either key-value pairs, document-based, graph databases or
                wide-column stores.
              </li>
            </ol>
          </p>
        </div>
        <div className="mx-2">
          <h4>What is the purpose of jwt and how does it work?</h4>
          <p>
            <span className="fw-bold">Answer: </span>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. JWT transmites
            information between two parties .What these claims are depends on
            the use case at hand. For example, a claim may assert who issued the
            token, how long it is valid for, or what permissions the client has
            been granted. It's based on three parts, header, playload and the
            signature. Once these three gets matched user gets decoded
            information and access to specific route.The main purpose is to make
            sure of authentication and verfied user.
          </p>
        </div>
        <div className="mx-2">
          <h4>Differences between javascript and nodejs ?</h4>
          <p>
            <span className="fw-bold">Answer: </span>
            Javascript is a programming language that is used for writing
            scripts on the website. Where, NodeJS is a Javascript runtime
            environment.Javascript can only be run in the browsers. Where,We can
            run Javascript outside the browser with the help of NodeJS.It is
            basically used on the client-side. Where node is mostly used on the
            server-side. Javascript is used in frontend development. Nodejs is
            used in server-side development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
