# Project_310
#### HappieEE group project ####
$$
\frac{\frac{d}{dx}\frac{\int_{x^\sqrt{x}}^{3x^e}(3e^{2sin(x)})dx}{e^{\sqrt{sin(\int_0^{\sqrt{\pi}}(30+6x^2)dx)}}}\begin{bmatrix}
x & 3\pi & 8x\\
cos(x) & 3\sqrt{e} & x^6x\\
\sqrt{x} & 8 & 18\\
\end{bmatrix}\cdot \vec p }{x^t\cdot \frac{d}{dt}(5^t)\cdot(\int^{8x}_{90x+90x^2}(t^e)dt)}
$$

## What has Changed since project 1

## //What is the project about? ###
The purpose of our app, “happieEE”, is to determine if someone is happy or not.happieEE is a social media platform 
that has a feed and can detect the emotions in a user’s posts.

It's main features are:
  * Account and Security system, protect against common attacks like SQL Injection, XSS, CSRF, etc)
  * Happiness Facial Detection (ML)
  * Bar (Showing the info)
  * Filter 
  * Comment 
  * Feed (You can post results and share to everyone)


## How to compile and run the code?
### Back End
```bash
cd Back_End
nohup bash run.sh & # Run the main program
nohup node index.js > status.log & # Run the crash detector
```

### Front End
Run:
```bash
npm install -g @ionic/cli
cd Front_End
ionic serve
```

Compile to Production 
```bash
npm install -g @ionic/cli
cd Front_End
ionic build # Compile
gh-pages -d build  # Deploy to GitHub Pages
```
## Class Organization
- Using MySQL the data is seperated into a class for each table which contain's users data as objects
  this is located in the Backend folder in the file models.py
- Using Fast api the api functions for the application are located in the main.py file of the backend folder
- Using a Ionic + React framework the frontend code for the home feed is located in /Front_End/src/pages/Home.tsx.

### Frontend
Components:
 - Card
  - Each post on the global feed is a Card and this component allows us to easily add new posts  
 - ExploreContainer
  - This is where we prepare data to be shown in the Card component. We fetch data from our API on this component and pass it onto the Card component
 - Popup
  - This component sends a popup to the user showing information passed into the component

Pages:
 - Home
  - The Home page is the landing page that the users will first see when they go on the app. This is also where the global feed is to see user posts
 - Login
  - This is the login page where users can login or sign up a new account, with a forgot password option. 

Themes:
 - To prevent redundant code, we have a class where we have all our themes (i.e. colours) that we can easily access from other classes

### Backend
the documentation for the backend is located in HappieEE123/Project_310/FastAPI-docmentation UI.html


## Tech Stack
- Front End: Ionic + React 
- Backend: Python Fast API, Node.js for crash detector, bash for logging.
- Database: MySQL.


## a list of each feature you programmed for this assignment
- for each item on that list, explain briefly how you used that feature to improve your
system
- for each explanation, give a snippet of the output that demonstrates your feature
