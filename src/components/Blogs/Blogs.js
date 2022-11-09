import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')

    return (
        <div className='mb-10'>
            <div className="hero h-96" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-60 bg-teal-700"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-7xl font-bold underline underline-offset-8 decoration-fuchsia-700">Blogs</h1>
                    </div>
                </div>
            </div>
            <div className='mt-5 w-75'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" name="" id="" />
                    <div className="collapse-title text-xl font-medium">
                        Difference between SQL and NoSQL
                    </div>
                    <div className="collapse-content text-start">
                        When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision.The Main Differences:
                        <br />
                        Type –
                        SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.

                        <br />
                        Language –
                        SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.

                        <br />

                        Scalability –
                        In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets.

                        <br />
                        Structure –
                        SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.

                        <br />
                        Property followed –
                        SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance).

                        <br />
                        Support –
                        Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments.

                    </div>
                </div>
                <div tabIndex={0} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" name="" id="" />
                    <div className="collapse-title text-xl font-medium">
                        What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content text-start">
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                        JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                    </div>
                </div>
                <div tabIndex={0} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" name="" id="" />
                    <div className="collapse-title text-xl font-medium">
                        What is the difference between javascript and NodeJS?
                    </div>
                    <div className="collapse-content text-start">
                        1. NodeJS :
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                        <br />
                        2. JavaScript :
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    </div>
                </div>
                <div tabIndex={0} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" name="" id="" />
                    <div className="collapse-title text-xl font-medium">
                        How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content text-start">
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;