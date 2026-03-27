# Option Tree Decision App

This is a simple static web application that presents a 3-level decision tree. It's built with plain HTML, CSS, and JavaScript.

## How It Works

The application displays a series of choices in rows. Your selection in one row determines which options appear in the next.

- **Row 1**: Starts with two initial choices (e.g., 'A' and 'B').
- **Row 2**: Based on the Row 1 selection, two new options are shown.
  - If you choose 'A', you get options 'x' and 'y'.
  - If you choose 'B', you get options 'z' and 'v'.
- **Row 3**: Based on the Row 2 selection, a final pair of options is displayed.
  - 'x' leads to '1' and '2'.
  - 'y' leads to '3' and '4'.
  - 'z' leads to '5' and '6'.
  - 'v' leads to '7' and '8'.

The path of your choices is logged at the bottom of the page (e.g., "A > x > 1"). You can use the "Reset" button to start over.

## How to Customize

The labels for each of the 14 decision nodes can be edited directly in the `index.html` file.

### File Structure and Responsibilities

- `index.html`: **(Layout and Content)**
  - This file contains the structure for all 14 decision nodes.
  - **To change the text on a button, edit the content of the `<span class="label">...</span>` element inside the corresponding `div` for that node.** For example, to change the first button, find `id="node-A"` and modify the text inside its span.

- `styles.css`: **(Styling)**
  - This file controls the visual appearance of the application, including the layout, colors, and fonts of the buttons and text.

- `script.js`: **(Logic and Interactivity)**
  - This script manages the core logic of the decision tree.
  - It handles click events on the nodes.
  - It shows and hides the appropriate nodes based on user selections.
  - It updates the log with the current selection path.

## Prerequisites

To run the application with the backend server for logging selections, you will need to have Node.js and npm installed. You can download them from the official website:

- [Node.js](https://nodejs.org/) (npm is included with the Node.js installation)

## How to Run with Data Logging

1.  **Install Dependencies:**
    Open your terminal in the project directory and run:

    ```sh
    npm install
    ```

2.  **Start the Server:**
    After the installation is complete, start the server:

    ```sh
    npm start
    ```

3.  **View the App:**
    Open your web browser and navigate to `http://localhost:3000`.

## Accessing the Outcomes

Every time a final selection is made in the decision tree, the choice will be sent to the server and saved as a new line in a file named `selections.log` in your project directory.

Each line in the log will contain a timestamp followed by a JSON object representing the selection path.

**Example Log Entry:**

```
2026-03-27T10:00:00.000Z: {"top":"A","second":"x","final":"1"}
```

If you just want to run the front-end without the data logging, you can still open the `index.html` file directly in your browser.
