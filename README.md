# The Widget is created with React and builded with Parcel.

The widget is created with react. To show that widget can be added to any code repo and save time, I am using github pages to host.
4 files in home directory index.html, style.css, script.js and widgetPage are normal HTML and css and js files to be rendered by github. Other than that whole directory is bootstraped with create-react-app.

## Available Scripts

In the project directory, you can run:

### `yarn start` to start react app

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
or

### `you can open with live server` to see the dummy website implementation

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build:widget`

Builds the app for production to the `docs` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and you will get 4 files. We need index.css and index.js for our widget to work.

### How to add more widget

just add `<div class="root"></div>` where you want to add the widget. You can pass multiple data-attributes to edit the widget according to your use case.
