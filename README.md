Question 1
We have an observable, totalCustomers, which displays the total number of the company. We want to have this number appear on the subtitle of the card. How are we going to do this? Why this approach?
See if the candidate goes for the async pipe or a subscribe and see if he knows the idea of unsubscribing.

Question 2
We have the function GetQuotes on our FakeHttpService which returns an object containing the id and the price of the quote. We want to trigger a request to the back end when both fields are set and display the PRICE.
a)	How are going to do this? CombineLatest -> switchMap -> map
b)	If we want to not trigger a request if Data is < 100, how to do this? Filter
c)	How to trigger the request at the start of the page? startWith
d)	What s the difference between map and switchmap?
(Bonus) Do you know an alternative to map in this case? Pluck

Question 3
We are going to add an extra line to display the quote Id, which is contained alongside the price. What is your approach?
See the approach (if he goes for double pipe or subscribes) and if he knows shareReplay.
If he forgot about ShareReplay, show the console: what caused the double call?

Question 4
We want to display a progress bar when the request is ongoing. 
a)	How to do this with observable?
See if he goes for a subject and a tap.
b)	What is the tap operator?
c)	What is OnPush?
