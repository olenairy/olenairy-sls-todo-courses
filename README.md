# My Pretty ToDos App
### Capstone Project
```
Student: Olena Chudnovets
Course: Cloud Developer
Project: Serverless TODO Application
Data: Marth 18 2021
```
## Screenshots
(Demo all interface in 1 images

## Git repositoryes: 

### Buckend of project:
https://github.com/olenairy/olenairy-sls-todo-courses.git

### Frontend of project:
https://github.com/olenairy/olenairy-sls-todo-courses-client.git

## Architecture Diagram
(Diagram)
## Description
For my Capstone Project I chose Serverless technology because that enable me to build more agile applications, for example AWS Lambda come with automatic scaling, built-in high availability.(AWS logo)

My Pretty ToDos App based on code from course 4 project and have more functionality features. Frontend of the project was largely changed both visually and functionally. Added feature to edit text and Due Date, not only change the image. Added auto reforvarding to home page after edit text or upload image.
(smal demo fragment)
## Functionality
Pretty ToDos App keep the ToDo list and shows them beautifully. Allows users to update images, edit text and Due Date.
User of the web application can use the interface to create, delete and complete ToDos. The application allows users to upload a file. User of the web interface can click on a "image" button, then select and upload a file.
(smal demo fragment)
After that the file is being process to convert to thumbnails picture. Was created additional AttachmentsBucket for storage small pictures.  File appear in the Todo properties on the home page. Pictures deleted from two backets - AttachmentsBucket and ThumbnailsBucket after delete ToDo item. 
(smal demo fragment)
User of the web interface can click on a "pencil" button, then edit Todo and Due Date.
The application only displays list of ToDo for a logged in user. Authentication is implemented and does not allow unauthenticated access.
(smal demo fragment)
## Codebase
The code is split into multiple layers separating business logic from code for DynamoDB access, file storage, and other code. Code is implemented using async/await and Promises without using callbacks.
(smal demo fragment)
## Best practices
All resources needed by an application are defined in the "serverless.yml" without using AWS console. 
(smal demo fragment)
Each function has its own set of permissions using different IAM roles per function.
(smal demo fragment)
App have logging statements in code with informative log parameters, which is helpful for debugging in serverless environment.
(smal demo fragment)
Distributed tracing is enabled for Lambda and API Gateway in serverless.yml file. App have implemented X-Ray for logging application level metrics.
(smal demo fragment)
## Architecture
Data is stored in a table with a composite key. Scan operation is not used to read data from a database.
(smal demo fragment)
## Testing 
Link to Postman collection of tests:
(link to git file)
Result of tests from the collection:

(smal demo fragments)

## How to run the application
(for front different run command)
To deploy an application run the following commands:

```
npm install
sls deploy -v
```




## Frontend

You can see the Frontend in different rep -  
"https://github.com/olenairy/olenairy-sls-todo-courses-client.git" 
https://github.com/olenairy/olenairy-sls-todo-courses-client.git

