# Instructions


1. **Clone the Project**:

   ```bash
   git clone <repository_url>
   ```
1. **Run the server**   
First, go to brik/server/config/config.json and set the db connections accordingly  
   ```bash
    "development": {
    "username": "{YOUR_DB_USERNAME}",
    "password": "{YOUR_DB_PASSOWRD}",
    "database": "klontong",
    "host": "localhost",
    "dialect": "postgres"},
   ```
   Follow this instructions
   ```bash
    cd brik/server
    npm install
    # Create postgres db (please configure the )
    sequelize db:create
    # Migrate
    sequelize db:migrate
    # Seed the db
    sequelize db:seed:all
    nodemon bin/www
   ```
   The server will run on port 3000

1. **Run the client**  
Follow this instructions

   ```bash
   cd brik/vue-client
   npm install
   npm run dev
   ```
   The client will run on port 5050

1. **Enjoy**  : http://localhost:5050/



### **Note**: 

- You can watch a short instructional video demonstrating the features at the following link:  
  [Watch the Video](https://www.veed.io/view/9e02da1d-017b-4602-902f-30baaf25adcc?panel=share) 

- The UI/UX of the application is responsive, so you can also try it on the mobile version.

- You have the option to use an existing user account created via the seeder with the following credentials:  
  - Email: rayhan@mail.com
  - Password: mustofa