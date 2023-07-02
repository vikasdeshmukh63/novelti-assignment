### Features of Project

- User Form: Create a user form with a user-friendly interface that allows users to enter their personal information, including first name, last name, email address, mobile number, address details, state, city, country, and zip code.
- Form Validation: Implement comprehensive form validation to ensure that the entered data is accurate and complete. The validation rules include checking for the required fields, minimum character length for names, valid email format, proper mobile number format with country code selection, mandatory address details, auto-complete search for state selection, multi-select dropdown with search option for country selection, and number validation for zip code.
- Create User: Provide a functionality to create a new user by capturing the data entered in the user form and storing it in the database. Upon successful creation, users will receive a notification that user is created.
- View List of Users: Display a list of all the users stored in the database, showing their basic information such as name, email address, and mobile number. Users can easily browse through the list and access individual user profiles for further actions.
- Edit and Update User: Allow users to edit their information by providing an edit option for each user in the list. When selected, users can modify their details and save the changes, which will be reflected in the database. Proper validation is applied to ensure the accuracy of the updated information.
- Delete User: Enable users to delete their profiles from the system. This feature removes the user's data from the database.

###Technologies Used
- ReactJS: A popular JavaScript library for building user interfaces. It provides a component-based architecture, allowing for reusable UI components and efficient rendering.
- Vite: A fast, lightweight build tool for modern web development. It offers a zero-config setup, instant hot module replacement (HMR), and fast development server, making it an excellent choice for rapid development and efficient bundling.
- MaterialUI and Tailwind: UI component libraries that offer pre-built, customizable components and styles to enhance the visual appeal and user experience of the application. MaterialUI follows Google's Material Design principles, while Tailwind provides a utility-first CSS framework.
- NodeJS: A JavaScript runtime that allows us to run JavaScript on the server-side. It provides a scalable and efficient environment for building server-side applications and APIs.
- Database: For storing and retrieving user data, any database technology can be used based on your preference and requirements. Some common choices include MySQL, PostgreSQL, MongoDB, or SQLite. The selected database technology used in this project is MongoDB

###To Run the Code
- after cloning or downloading the repository you need to install required packages or dependencies the command for that is 

`$ npm install` or `$ npm i`
- as previously mention the vite is use in this project to start the client the command is

`$ npm run dev`

-- to start the server the command is 
`$ npm run dev`