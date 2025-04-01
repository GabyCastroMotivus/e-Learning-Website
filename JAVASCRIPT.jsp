<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>JavaScript Courses</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <style>
        body {
            margin: 0;
            font-family: "Montserrat", sans-serif;
        }
        h1 {
            color: #333;
        }
        .course {
            background: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        .course:hover {
            transform: scale(1.02);
        }
        .course h2 {
            margin: 0;
            color: #007BFF;
        }
        .course p {
            color: #555;
        }
    </style>
</head>
<body>
    <h1>JavaScript Courses</h1>
    <div class="course">
        <h2>Introduction to JavaScript</h2>
        <p>This course covers the basics of JavaScript, including syntax, variables, and functions.</p>
    </div>
    <div class="course">
        <h2>Advanced JavaScript Techniques</h2>
        <p>Learn advanced JavaScript techniques, including closures, promises, and async programming.</p>
    </div>
    <div class="course">
        <h2>JavaScript for Web Development</h2>
        <p>This course focuses on using JavaScript in web development, including DOM manipulation and event handling.</p>
    </div>
    <div style="margin-top: 20px;">
        <a href="homepage.html" class="w3-button w3-black">Back to Homepage</a>
    </div>
</body>
</html>
