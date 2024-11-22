# TreeView -- MindsDB Technical Test

## Setup

To get set up, clone the repo then install the dependencies:

```sh
npm install
```

Run the dev server and view at: http://localhost:5173/

```sh
npm run dev
```

You can also view it live at: https://mindsdb-technical.pages.dev/

## Notes

My goal was to design the TreeView component so that it would be extensible -- you can pass in a RowContent component and any nodes data that fit the TreeViewNode schema to to reuse for a different view.
