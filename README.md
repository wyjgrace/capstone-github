# capstone-github
 
**Run javascript on http server**
1. open cmd terminal
2. cd to directory containing the javascript file (C:\Users\wying\Desktop\capstone-github\)
3. type 'python -m http.server' to start local http server
4. js file is hosted here: http://127.0.0.1:8000/test_script.js

why do i need to do this?
- chrome bookmarklet 'not allowed to load local resource' error
- this is a security exception built into Chrome and other modern browsers.


**To bypass CORS restriction, setup cors-anywhere proxy**
1. open terminal
2. cd to directory (C:\Users\wying\Desktop\capstone-github\)
3. install node.js
4. npm install cors-anywhere
5. cd to node_modules\cors-anywhere\lib
6. npm run start
7. "Running CORS Anywhere on 0.0.0.0:8080" (localhost)
https://stackoverflow.com/questions/29670703/how-to-use-cors-anywhere-to-reverse-proxy-and-add-cors-headers#:~:text=This%20snippet%20is%20not%20required,all%20you%20need%20to%20know. 