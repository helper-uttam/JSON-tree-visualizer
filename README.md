 # JSON Tree Visualizer

 An interactive React application that renders JSON data as an expandable, searchable tree. Useful for exploring nested JSON structures, debugging API responses, and visualizing object graphs in a human-friendly way.

 ## About

 `JSON Tree Visualizer` lets you paste or load JSON and displays it as a collapsible tree. Features include:

 - Expand / collapse nodes
 - Search keys and values with highlighting
 - Keyboard and mouse friendly canvas for navigation
 - Lightweight and dependency-minimal UI for fast rendering of reasonably-sized JSON

 This project is an educational and practical tool for developers and data engineers who want a quick way to inspect JSON payloads.

 ## Technologies used

 - React (Create React App)
 - JavaScript (ES6+)
 - HTML5 & CSS3
 - Browser APIs (Canvas/SVG where applicable)

 Key project files:

 - `src/App.js` — application root
 - `src/components/TreeCanvas.js` — tree rendering and interaction
 - `src/components/JSONInput.js` — JSON paste / load UI
 - `src/utils/jsonToFlow.js` — transforms JSON into the internal tree flow

 ## Setting up the React app locally (Windows PowerShell)

 Prerequisites:

 - Node.js (14+ recommended) and npm (or yarn)

 Clone the repository and install dependencies:

 ```powershell
 # from your preferred dev folder
 git clone https://github.com/helper-uttam/JSON-tree-visualizer.git
 cd JSON-tree-visualizer
 npm install
 ```

 Run the dev server:

 ```powershell
 npm start
 # Opens http://localhost:3000 by default
 ```

 Run tests (if any):

 ```powershell
 npm test
 ```

 Build for production:

 ```powershell
 npm run build
 ```

 ## Contributing

 Contributions are welcome. Please open an issue for feature requests or bugs, and send a pull request for code changes.

 ## License

 This project is provided under the MIT License — see the `LICENSE` file (if present) or add one if you plan to open-source the repo.

 ---

 If you'd like, I can also add a short demo GIF, badges (build, license), or a troubleshooting / FAQ section next. Let me know which extras you want.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
