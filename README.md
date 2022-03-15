
# Quiz Platform for Formula Student

(Now it's an) Open Source tool for creating quizzes

## Made by

- [@goncaloacbsilva](https://github.com/goncaloacbsilva)


## Tech Stack

**Frontend:** React, Axios, Chakra-UI

**Backend:** NodeJS, Express, Multer, Postgres


## IMPORTANT NOTE
This project was initially planned to be private-source and only targeted for [FST Lisboa](https://www.fstlisboa.com) requirements, therefore it does not have any documentation available at the moment. This README and your *godlike* ReactJS/NodeJS knowledge are the only things that can save you.

**YOU HAVE BEEN WARNED**

## Screenshots
![Quiz Selection](https://github.com/goncaloacbsilva/FS-Quiz-Platform/blob/main/media/quiz_selection.jpg)
![Question Overview](https://github.com/goncaloacbsilva/FS-Quiz-Platform/blob/main/media/questions_overview.jpg)

## Project Structure

The project is organized in two main folders
- **frontend** (self-explanatory)
- **production**: Backend + Frontend production files (build directory)

## Features

- **Questions Submission**
    - Set knowledge area
    - Set resolution dificulty
    - Set resolution time
    - Select answer template (Multiple Choice or Open Answer)
    - Upload question image
    - Upload resolution image

- **Questions Overview**
    - Search question by content
    - Filter questions by Team Department (or knowledge areas)
    - View question current state and if it was reviewed
    - View question in quiz mode along with its solution and resolution
    - Add question to the current quiz

- **Quiz Creation**
    - Set quiz name
    - Reorder questions
    - Remove question from the quiz

- **Quiz Mode**
    - Choose quiz from list


## "ENV" Variables

These variables should be at the .env file but for now you can modify the following lines


- **production/queries.js:5**

    This variables are related to the Quiz DB connection

    `DB_USER`
    `DB_HOST`
    `DB_NAME`
    `DB_PASSWORD`

- **production/index.js:10**

    Backend API port

    `const port`

- **frontend/src/api/apiEndpoint.js:1**

    Backend API Endpoint

    `API_ENDPOINT`

----

## Installation

Make sure that you have `yarn` and `npm` installed (yes I can't decide myself when it comes to package managers) and then  just follow 3 Simple steps

```bash
  git clone https://github.com/goncaloacbsilva/FST-Quiz-Platform-Frontend.git FST_Quiz
  cd FST_Quiz
  cd frontend && yarn && cd.. && cd production && npm install && cd ..
```




    
## Run Locally

Well this is the part where you struggle because:
- 1st: Maybe you are not a FST team member and because of that you can't access our quiz database.
- 2nd: You can try to create your own db but you'll still struggle because you don't have our db structure.
You can always try to reverse enginner my database queries and create the structure from that.
Or I'll maybe upload a db schema so you can import it

After setting up the database connection open two terminals at the parent location and type:

*Terminal 1*
```bash
  cd production && node index.js
```

*Terminal 2*
```bash
  cd frontend && yarn start
```




## Deployment

To prepare the project for deployment we first compile the frontend part and then we move it to the production folder

```bash
  rm -rf production/client/build
  cd frontend
  yarn build
  mv build/ ../production/client/
```
For running the final result execute this last command

```bash
  cd production
  node index.js
```

**Important note:** Don't forget to change the `API_ENDPOINT` when deploying to somewhere else (not localhost)
## Contributing

YES! Contributions are really apreciated!

Right now the main goal is to finish the game logic and abstract all the platform making it more customizable in order to be used by other teams or someone else.

More details will be available soon...
