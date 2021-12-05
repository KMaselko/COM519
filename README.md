# COM519 Assignment 1 CRUD Application
- Kacper Maselko (https://github.com/KMaselko)

Github repository: https://github.com/KMaselko/COM519<br/>
Hosted application (Heroku): https://boiling-fjord-53043.herokuapp.com/

This CRUD Application has been created for the module COM519 as an Assignment 1.

This application will help every gamer to look up the most important information about any video game that exists in a database of the application.<br/>
The data that a user can look at are:
- Title of a game
- Genre
- Price in £
- Publisher
- Avarage amount of hours to finish the main plot

User can add, modify and delete data from the database that is connected to mongoDB using mongoose.<br/>

# Running the project
To run the project using VS code, a user needs to clone this repository by using the command line such as cmd or Git Bash and inserting `git clone https://github.com/KMaselko/COM519`.<br/>
The user then needs to type `npm install` in their VS code terminal.<br/>
Rename `config.en.example` to `config.env`.<br/>
After that, they need to change `MONGO_URI` URL into their own mongoDB database. This property can be find in config.env file.<br/>
Finally, they need to type `npm start` in the VS code terminal.

Alternatively, a user can access this application with this link: https://boiling-fjord-53043.herokuapp.com/.

# Usage
The application will load the main page as its index which will display all the data in the database. To make it more readable, I have implemented a sorting and filtering system so the user would not see hundreds of data in one page. This is how it presents itself:
![image](https://user-images.githubusercontent.com/92021893/144755134-7bc0f3b6-41a6-4a38-a63c-82d0cdd37292.png)<br/>
As we can see, the main page has only 7 entries.<br/>
They can do multiple things to display the data in more readable way or to find something that the user is looking for, for instance the user can:
- Sort the data by categories (ascending and descending)
- Display a specified amount of entires in one page
- Show next page for more entries
- Search for any category in a search bar

The database is connected to the application so all entries that are displayed on the website are shown from MongoDB:
![image](https://user-images.githubusercontent.com/92021893/144755879-e0952ea3-e509-497d-9663-532143dd03fa.png)

If we modify any entry from the website, it would also save those changes in the database.

## Add
![image](https://user-images.githubusercontent.com/92021893/144756306-ad0b0e56-bb14-4181-bf0f-5a899e6f0ede.png)
![image](https://user-images.githubusercontent.com/92021893/144756315-89e669e0-71d5-4e0d-b25a-7748b169da0a.png)
![image](https://user-images.githubusercontent.com/92021893/144756324-c6c1fe29-7faf-4de1-afa0-3972b90279c8.png)
As shown above, it is clearly seen that an added entry has been inserted into the database and it is being read from that database to display on the website.
## Modify

Let's update the price of Days Gone, at the moment it is £20.
![image](https://user-images.githubusercontent.com/92021893/144759105-8c3ba2e6-4491-4578-ac5d-419a313d3b6e.png)
![image](https://user-images.githubusercontent.com/92021893/144759128-c90565d7-5616-4e60-b489-4e9e376cc286.png)
![image](https://user-images.githubusercontent.com/92021893/144759136-94e786ee-24d7-4a06-ba81-3df030a5a60b.png)

As you can see, the price has been increased to £21

## Delete
When the X button is pressed, the entry will be deleted from the database, let's try with Cyberpunk:
![image](https://user-images.githubusercontent.com/92021893/144759229-d554e9d3-a69c-43e7-b941-66e01ccd54ed.png)
![image](https://user-images.githubusercontent.com/92021893/144759236-31f6fb26-d73d-4d87-832a-7ad98d0a428a.png)


# Problems solved
This simple application can solve multiple problems such as:
- Checking how long does it take to beat a given game
- Looking for a game by its genre (if someone is interested in a specific genre but does not know any games)
- Checking the price
- Checking the publisher
- Checking which game is the longest or the shortest (if someone does not have much time to play for example)

