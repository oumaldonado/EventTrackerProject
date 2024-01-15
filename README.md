# EventTrackerProject

This website is a tattoo catalog that uses REST API technology and Postman. You can easily Create, Read, Update, and Delete tattoo entries. Whether you want to add new tattoos, check existing ones, edit details, or remove entries, it's all straightforward with the CRUD actions provided here."

# Tech Used

- Java
- Java Repository
- MySQL
- MySQL Workbench
- Git
- Github
- Gradle 
- JPA/Hybernate
- Spring REST
- SpringToolSuite/SpringBoot
- Postman

# Lessons Learned

- Competent in building RESTful APIs using Spring REST and leveraging SpringToolSuite/SpringBoot for Java application development.

- Proficient in testing and debugging APIs with Postman, ensuring robust and reliable functionality.

- Managed and optimized databases using MySQL and MySQL Workbench, ensuring data integrity and performance.

- Created RESTful APIs with Spring REST, incorporating industry practices for designing and developing robust web services.

- Used Gradle to make Spring projects run smoother by automating tasks and organizing the project structure. This helps in keeping things tidy and ensures that everything works seamlessly together.

# REST End Points

| HTTP Verb | URI               | Request Body | Response Body | Status Codes |
|-----------|-------------------|--------------|---------------|---------|
| GET       | `/api/tattoos`      |              | List of all _tattoo_ entities | 200 |
| GET       | `/api/tattoos/3`   |              | JSON of _tattoos_ `3` | 200,404 |
| POST      | `/api/tattoos`      | JSON of a new _tattoo_ entity  | JSON of created _tattoo_ | 201,400 |
| PUT       | `/api/tattoos/10`   | JSON of a new version of _tattoo_ `10` | JSON of updated _tattoos_ | 200,404,400 |
| DELETE    | `/api/tattoos/10`   |              |               | 204,404,400|
