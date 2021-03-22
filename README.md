

# My Pretty ToDos App
### Capstone Project
```
Student: Olena Chudnovets
Course: Cloud Developer
Project: Serverless TODO Application
Data: Marth 22 2021
```
## Screenshots
![003-capst](https://user-images.githubusercontent.com/67039993/112070107-d22e7480-8b4b-11eb-90fc-8b8ddc924cce.png)

## Git repositoryes: 

### Buckend:
https://github.com/olenairy/olenairy-sls-todo-courses.git

### Frontend:
https://github.com/olenairy/olenairy-sls-todo-courses-client.git

## Architecture Diagram
(Diagram)
## Description
For my Capstone Project I chose Serverless technology because that enable me to build more agile applications, for example AWS Lambda come with automatic scaling, built-in high availability.<img width="40" alt="AWS" src="https://user-images.githubusercontent.com/67039993/112070474-7f08f180-8b4c-11eb-9152-3b1ec7e9d22a.png">

</br><b>My Pretty ToDos App</b> based on code from course 4 project and have more functionality features. Frontend of the project was largely changed both visually and functionally. Added feature to edit text and Due Date, not only change the image. Added auto reforvarding to home page after edit text or upload image.
<img width="300" alt="Edit-Image_Delete_Button" src="https://user-images.githubusercontent.com/67039993/112070945-92688c80-8b4d-11eb-94c2-8c0fa045fe0f.png">

## Functionality
<b>Pretty ToDos App</b> keep the ToDo list and shows them beautifully. Allows users to update images, edit text and Due Date.
User of the web application can use the interface to create, delete and complete ToDos. The application allows users to upload a file. User of the web interface can click on a "image" button, then select and upload a file.
<img width="300" alt="Edit-Image_Delete_Button" src="https://user-images.githubusercontent.com/67039993/112071447-892bef80-8b4e-11eb-9689-51310f5de05a.png">
After that the file is being process to convert to thumbnails picture. Was created additional AttachmentsBucket for storage small pictures.  File appear in the Todo properties on the home page. Pictures deleted from two backets - AttachmentsBucket and ThumbnailsBucket after delete ToDo item. 
(smal demo fragment)
User of the web interface can click on a "pencil" button, then edit Todo and Due Date.
The application only displays list of ToDo for a logged in user. Authentication is implemented and does not allow unauthenticated access.
(smal demo fragment)

## Screenshots show the successful build and deploy steps

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

