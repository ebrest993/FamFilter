AS A USER

GIVEN a text-based messaging application,

WHEN I open the application
THEN I am presented with a login screen
WHEN I login
THEN I am presented with a dashboard of threads I belong to
WHEN I click on a thread
THEN I can see all messages from that group
WHEN I click on "Create New" in the dashboard
THEN I am presented with a form and textboxes asking for "Thread Subject" and "Type text here..."
WHEN I am ready to post this thread
THEN I am given the option to add people to this thread
WHEN someone adds to a thread that I created
THEN I am given the option to delete that message


heroku app:
https://big-family-thread-a97d96184e56.herokuapp.com/


one for every piece of info from the database that the app will need to function
USER
put method for updating the user info
delete method for deleting the account
post method for new user

FORM
post data object in db for new thread
    -subject/title
    -member id's with access
    -comments
    -initial message
    -date/time
    
get for single post
get for dashboard
put for replying to a post
post to create new post
delete to delete the post

