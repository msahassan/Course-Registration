
# Course-Registration


## FAQ

#### Add at least 3 Project features


### 3 Project features
1. Using this Project any can select any of the course in the cart section.
2. Any one can see the credit time of selected courses.
3. There is a limited credit in this Project, if the selected credit goes upto 2o credit it will show a alert, and no one select more than 20 credit.

#### Discuss how you managed the state in your assignment project.


## State Management

1. bookmarks and setBookmarks : These state variables are used to manage an array of courses. The setCourses function allows you to update the courses state when needed. Typically, this is used to store data fetched from an API or received from user interactions related to courses.

2. totalTime and setTotalTime: These state variables is used for storing a total credit. It represent the total duration of all the selected courses. I used setTotalTime to update this total time value when needed.

3. timeLeft and setTimeLeft: These state variables appear to represent the remaining credit time . They are used to track how much time is left for the course credit. I use dsetTimeLeft to update the remaining time as it counts down.

4. totalPrice and setTotalPrice: These state variables are used to manage the Price . It appears to be intended for holding the currently selected course(s) within the component. You would use setTotalPrice to update the how much money add. when a user interacts with your application.

