# Title

*description*

[deployed url](https://dartmouth-cs52-21s.github.io/lab2-gebrielmbelaineh/)

## What Worked Well

I've met the main specifications of the project which were:

Questions:
display several questions (enough for this to be interesting)
have a header image and some text
have some number of potential answers

Question Answers:
be either text or an image (demonstrate some of both)
text answers are just clickable text boxes (not an image)
have 4 potential display states:
initial none selected state
have a :hover effect
have a clicked/selected state
when one answer is chosen all other answers should change to a not-selected state (different from the initial no answer chosen state).
have an associated value to be used to calculate the overall quiz output.

Done Button:
calculate the quiz output
Output Display
should have text and an image
should not show unless the calculations are finished
should display an error if not all questions were answered

## What Didn't
N/A

## Extra Credit
Q. Why might it be better for the link to the javascript file to be placed at the bottom rather than in <head> ... </head>?

If inside our script we try to change an html element that does not yet exist, we will run into an error. This is because at the time the script was run, the element didn't exist. 
An added benefit of placing the link at the bottom is that if we have a lot of javascript code (time consuming to run), all of the content in the webpage will at least have been loaded. 
This will help load our webpage faster.


I took both paths. This involves reading in quiz questions and answers from a JSON file and then looping through them and appending to the html of the page with javascript.
I styled all the radio buttons with transitions and animations. The output is a new page and it has an animation. 
Mobile also works.

## Screenshots
