[![Project CI](https://github.com/lum-ai/tag-example/actions/workflows/node.yml/badge.svg)](https://github.com/lum-ai/tag-example/actions/workflows/node.yml)
# tag-example
An example of the Text Annotation Graphs system in action in a reactjs app.

## Installation
### Using package.json file
    ```JavaScript
        "dependencies": {
            "text-annotation-graphs": "git://github.com/lum-ai/TAG.git#development"
        }
    ```
    
### Using npm
    ```Javascript
        npm i --save git://github.com/lum-ai/TAG.git#development 
    ```

## Using TAG inside a react application
### Import TAG library
    ```Javascript
        import {default as TagLibrary} from "text-annotation-graphs";
        import "text-annotation-graphs/dist/tag/css/tag.min.css"
    ```

### Import useRef
    ```Javascript
        import {useRef} from "react";
        ...
        const ref = useRef();
    ```

### Initialize TAG
    ```Javascript
        while (ref.current.firstChild) {
            ref.current.removeChild(ref.current.firstChild);
        }

        instance = TagLibrary.tag({
            container: ref.current,
            data: props.data,
            format: "odin",

            options: { ...props.options }
        });
    ```

### Add markup
    ```Javascript
        return (
            <div className="tag">
                <div className="tag-svg" ref={ref}/>
            </div>
        );
    ```

## Use the tag component 
    ```Javascript
        <Tag 
            data={ json data string }
            options={ TAG options json }
    ```

# Running the demo
## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
