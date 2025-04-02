# e-Learning-Website
Simple Website created to show the basic structure of an e-learning system.

## Installation JSP Project
Before the installation, you need to have Java 8 or higher installed on your computer.
You need to download [Apache Tomcat](https://tomcat.apache.org/download-90.cgi)
Once you have downloaded and installed Apache Tomcat, you can start the server by running the command `startup.bat` in the bin directory.
Put your project in the webapps directory of your Apache Tomcat installation.
Then you can access the website by going to `http://localhost:8080/e-learning-websit/homepage.html.

## Installation Angular 12 Project
Before the installation, you need to have Node.js version 19.9.0 installed on your computer.
You need to install [Angular 12 CLI](https://angular.io/cli) by running the command `npm install @angular/cli@12` in your terminal in the project directory.
Once you have installed Angular CLI, you can run the command `npm install` to install the dependencies.
Then you can run the command `ng serve --open` to start the server and open the website.
In case the project failed to compile, try to open the power shell and run the command ` $env:NODE_OPTIONS = "--openssl-legacy-provider"` before running the command `ng serve --open`.


