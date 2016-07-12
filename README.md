# Basic functionality of chat app:
- Login with a username of your choice (just make sure you use the same username each time you log in)
- Your messages are right-aligned and purple
- Site is fully response

# Process
I originally started building this yesterday. It was my first time using any sort of scaffolding tool and structuring my scripts by models and views. I got pretty lost in the project yesterday and so decided to start from scratch today. This was the process I took today:
- I drew out rough wireframes
- I identified user interactions on each page of the app
- I hard coded a rough mock up of the html to get an idea of the flow of the app
- Then, started working on the log in page and storing the appropriate user data (just the username in this case)
- After adding a click handler to the login button, I started adding in the html elements for each module with jquery.
- After getting all of the functionality down, I styled

# Things I'd like to add but haven't yet:
- Event listeners for whenever the '@' sign is pressed, this will trigger a function that tries to match each index of a typed string in the message box and assign another username to it. The @username will then be highlighted for the appropriate user.
- The ability to have multiple chat rooms 
