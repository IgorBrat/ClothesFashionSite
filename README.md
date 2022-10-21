# Web lab 9

Description: Now, you are about to put a final touches on all pages you created - implement interaction with your REST API server.

Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)

## Requirements:

- For any http request - use axios library
https://github.com/axios/axios#installing
- All your API functions should be separated into single file (or folder, if you want) - just like you saw in Live coding for 5 lab with fetch() function

## Functionality:

- On Catalog Page - all items should now be fetched from your backend with GET method (using axios)
- Search with filters - should also be implemented with GET request (search by text field can be left as it is)
Hint: pass filters as url parameter
- Before response from your GET method is received you have to display a Spinner(Loader component) to the user. Something like this: https://projects.lukehaas.me/css-loaders/

### React description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
