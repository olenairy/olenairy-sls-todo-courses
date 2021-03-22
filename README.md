# My Pretty ToDos App
### Capstone Project
```
Student: Olena Chudnovets
Course: Cloud Developer
Project: Serverless TODO Application
Data: Marth 18 2021
```
## Screenshots
<div><img width="416" alt="Screen Shot 2021-03-21 at 9 52 47 PM" src="https://user-images.githubusercontent.com/67039993/112039111-6daaef80-8b22-11eb-8b4e-4281966c50ad.png"></div>
<div>
<img width="337" alt="Screen Shot 2021-03-21 at 9 55 39 PM" src="https://user-images.githubusercontent.com/67039993/112039300-aa76e680-8b22-11eb-8bec-849e110991cb.png"></div>
<img width="247" alt="Screen Shot 2021-03-21 at 9 54 11 PM" src="https://user-images.githubusercontent.com/67039993/112039369-bd89b680-8b22-11eb-9af9-6eeb3bd21a38.png">
<img width="380" alt="Screen Shot 2021-03-21 at 9 55 13 PM" src="https://user-images.githubusercontent.com/67039993/112039394-c24e6a80-8b22-11eb-9306-5a41307d4723.png">

## Git repositoryes: 

### Buckend of project:
https://github.com/olenairy/olenairy-sls-todo-courses.git

### Frontend of project:
https://github.com/olenairy/olenairy-sls-todo-courses-client.git

## Description
For my Capstone Project I chose Serverless technology becouse that enable me to build more agile applications, for example AWS Lambda come with automatic scaling, built-in high availability.

My Pretty ToDos App based on code from course 4 project and have more functionality features. Frontend of the project was largely changed both visually and functionally. Added feature to edit text and Due Date, not only change the image. Added auto reforvarding to home page after edit text or upload image.

## Functionality
Pretty ToDos App keep the ToDo list and shows them beautifully. Allows users to update images, edit text and due date.
User of the web application can use the interface to create, delete and complete ToDos. The application allows users to upload a file. User of the web interface can click on a "image" button, then select and upload a file. After that the file is being process to convert to thumbnails picture. File appear in the Todo properties on the home page. User of the web interface can click on a "pencil" button, then edit Todo and Due Date.
The application only displays list of ToDo for a logged in user. Authentication is implemented and does not allow unauthenticated access.

## Codebase
The code is split into multiple layers separating business logic from code for DynamoDB access, file storage, and other code. Code is implemented using async/await and Promises without using callbacks.

## Best practices
All resources needed by an application are defined in the "serverless.yml" without using AWS console. 
Each function has its own set of permissions using different IAM roles per function.
App have logging statements in code with informative log parameters, which is helpful for debugging in serverless environment.
Distributed tracing is enabled for Lambda and API Gateway in serverless.yml file. App have implemented X-Ray for logging application level metrics.

## Architecture
Data is stored in a table with a composite key. Scan operation is not used to read data from a database.

## Testing 
Link to Postman collection of tests:

Result of tests from the collection:
<img width="1266" alt="Screen Shot 2021-03-21 at 6 55 38 PM" src="https://user-images.githubusercontent.com/67039993/112038811-11e06680-8b22-11eb-9779-10109d013eeb.png">
<img width="1222" alt="Screen Shot 2021-03-20 at 5 29 02 PM" src="https://user-images.githubusercontent.com/67039993/112038966-3b998d80-8b22-11eb-82a6-9781364f114d.png">
<img width="1271" alt="Screen Shot 2021-03-20 at 5 29 18 PM" src="https://user-images.githubusercontent.com/67039993/112039041-53711180-8b22-11eb-89a5-3c6c2efaa652.png">
<img width="1274" alt="Screen Shot 2021-03-20 at 5 29 39 PM" src="https://user-images.githubusercontent.com/67039993/112039069-5ec43d00-8b22-11eb-8c95-aff4fc41b14d.png">


## How to run the application
To deploy an application run the following commands:

```
npm install
sls deploy -v
```
## Architecture Diagram



## Frontend

You can see the Frontend in different rep -  "https://github.com/olenairy/olenairy-sls-todo-courses-client.git" 
https://github.com/olenairy/olenairy-sls-todo-courses-client.git

