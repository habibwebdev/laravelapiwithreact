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
