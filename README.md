# My Pretty ToDos App
### Capstone Project
```
Student: Olena Chudnovets
Course: Cloud Developer
Project: Serverless TODO Application
Data: Marth 18 2021
```
## Screenshots


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

