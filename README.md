# About
This is the repo for the **frontend** of the Tennis Capstone Project for TDI (The Data Incubator).  The repo for the [**backend** is here](https://github.com/MareoRaft/tennis-backend-tdi).  The actual [deployed app is here](https://tennis-frontend-tdi.herokuapp.com).


## Run
You may need to do `export PORT=5001`.  Environment variables in `.env` should apply automatically.

    npm run dev
    # do NOT do `heroku local`, since that would run the start command, which is now reserved for production build



## Build & Deploy
Heroku has built-in support for "create-react-app" apps.  Therefore, pushing updates to heroku is enough.  Heroku should do the rest.  Make sure the Heroku config vars are set properly.

	git push heroku master



## Notes

  * This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
