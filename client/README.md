# Frontend Architecture 📺


![arch](https://user-images.githubusercontent.com/50620277/120650547-9175a480-c486-11eb-88be-d5c82c38700e.png)

## Design Patterns
- I use only React Hooks
- More then 3 states in a component I refactor it to a reducer function in a **separate file**
- I create a folder for component or a page if the relative files is more then 1
- Routing only render pages from pages folder
- Using many context to manage data intensive UIs
- Storing the user settings such as theme in context(Memory) & localStorage

## Folder Structure
- components : contains re-usable components for all pages
    - Header
    - Footer
    - InfoCard
- pages : contains the actual pages that will be rendered by the router
    - Home page
- shared : code that is used across the whole frontend
    - api : contains the API configurations, all the re-usable https requests
    - context : re-usable contexts such as user context
    - util : common functions, general files
- routing : all the files related to client-side routing and authorization
