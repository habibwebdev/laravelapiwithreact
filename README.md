# laravelapiwithreact

Build application with react frontend and laravel restful api

1. Create laravel 8 app
   1. laravel new laravelapi
2. Create react app
   1. npx create-react-app react-frontend
3. Start working with react-front-end
   1. Bootstrap added to index.html of react public folder
   2. Student.js created
   3. AddStudent.js created
4. AddStudent api created
   1. laravelapiwithreact database created in phpmyadmin
   2. Make sure to change the database name in .env file
   3. In AppServiceProvider.php, go to boot functin and add Schema::defaultStringLength(191); and import the class
   4. create model with php artisan make:model Student and filled with fields
   5. create migration with php artisan make:migration create_students_table and the fields here
   6. create controller with php artisan make:controller API/StudentController and created the save function inside the StudentController
   7. migrate the migration with php artisan migrate
5. Completed the logic for data insertion into database
   1. completed the handleSubmit function inside react-frontend
6. Fetch the data from database with laravel api
   1. create route to fetch all the students from database
   2. create the index function inside the StudentController
   3. Create the logic to fetch the data from database via laravel api into the frontend inside Student.js
7. Edit Student data via laravel api
   1. create route to fetch one student by id in laravel routes
   2. create the edit function inside StudentController
   3. implement the single record fetched from database into the frontend
   4. update student route created inside the routes
   5. update student function created inside the StudentController
   6. in the frontend, update functionality implemented
8. Delete the Student from database with laravel api
   1. create the route to delete the student from database
   2. create the destroy function inside the StudentControlller to delete the student
   3. complete the delete functionality of student into frontend
9. Install Sweet Alert into the frontend
   1. npm install sweetalert --save
   2. Integrate the sweet alert into all the screens created on the frontend with the message from backend
10. Forms validations from backend
    1. inside store function of StudentController apply validations
    2. errors handled inside the frontend
