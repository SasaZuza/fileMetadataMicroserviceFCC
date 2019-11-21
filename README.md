# APIs and Microservices Projects - File Metadata Microservice

### _User stories_

1. I can submit a form that includes a file upload.
2. The form file input field  has the "name" attribute set to "upfile". We rely on this in testing.
3. When I submit something, I will receive the file name and size in bytes within the JSON response

  <br>
  <br>
  <br>
  <br>

### _Technology and how it was used_

#### Back-End features (Node + Express)

    - Import and use external library for implementing middleware (multer) to obtain file info.

#### Front-End features (HTML + CSS + Form Submission)

    - Front-End > Back-End communication via form action/method attributes.
    - Upload multipart/form-data.
    - Simple HTML and CSS to render front end.
