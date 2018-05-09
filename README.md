# dataintegrated
Data Integrated Backend Coding Challenge 

Setup instructions 
1. Download MongoDB 
2. Clone this repo to your computer 
3. Run npm install on your terminal to install dependencies 
4. Run nodemon or npm start to start the server

Api Endpoints 

(Note: These endpoints can easily be tested using HTTPie) 

Public Endpoints
/api/auth/sigin (POST) - To sign in 
/api/auth/signup (POST) - To register a new user

Private Endpoints (These routes require a JWT on the auth header to access)
/home
/profile
