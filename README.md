# Backend of knwowme app

To start the application in the development environment follow the next steps.

1. Clone the [project](https://github.com/rdelacruzsiado/knowme).
2. Go to the project folder and create a new file called .env, copy the content of the .env.example file and fill the environment variables.

    Example:
    `DEV=development`
    `PORT=3000`
    `API_KEY=pAfMgvS6OtZUhB9F0uDXcT4Q3Pjm2WEz`
    `TIME_ZONE=America/Bogota`
    `SHOW_SEQUELIZE_LOGS=true`
    `DB_DIALECT=mysql`
    `DB_HOST=mysql`
    `DB_PORT=3306`
    `DB_NAME=knowme`
    `DB_USER=knowme`
    `DB_PASSWORD=EaMXsnFNyYzGm2bDZ47KtWBv5rJePjH9`
    `MYSQL_ROOT_PASSWORD=LyR4VC7qaYIErS6FAoXtNhTDkb0MJ52c`
    `JWT_SECRET=sqX692VruHD1SNvoAGnECL0yFjd8iMeW`

3. Install [docker-compose](https://docs.docker.com/compose/install/)
4. Go to the project folder and run docker-compose up and that's it.
