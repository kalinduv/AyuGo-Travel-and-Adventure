// Execute the code only after the entire HTML document has loaded
$(document).ready(function () {


// Retrieve reviews from localStorage.    
let reviews = JSON.parse(localStorage.getItem("reviews")) || [

{name:"Alice",review:"Great experience!",rating:"⭐⭐⭐⭐⭐"},
{name:"Bob",review:"Loved the service.",rating:"⭐⭐⭐⭐"},
{name:"Charlie",review:"Could be better.",rating:"⭐⭐⭐"}

];



// Function to display reviews in the review table
function displayReviews(showAll = false){

let tbody = $("#reviewtable tbody");

tbody.empty();

// If showAll is true, show all reviews
// Otherwise show only the last three reviews
let data = showAll ? reviews : reviews.slice(-3);


data.forEach(function(r){

let index = reviews.indexOf(r);

// Append a new row to the table
tbody.append(`

<tr>

<td>${r.name}</td>

<td>${r.review}</td>

<td>${r.rating}</td>

<td>

<!-- Edit icon -->
<i class="bi bi-pencil-square editBtn"

data-index="${index}"

style="font-size:24px;
cursor:pointer;
margin-right:15px;
color:#6c757d;">

</i>

<!-- Delete icon -->
<i class="bi bi-trash deleteBtn"

data-index="${index}"

style="font-size:24px;
cursor:pointer;
color:#6c757d;">

</i>

</td>

</tr>

`);

});

}


// Function to calculate and update review statistics
function updateStatistics(){

let total = reviews.length;

let five = reviews.filter(r => r.rating==="⭐⭐⭐⭐⭐").length;

let four = reviews.filter(r => r.rating==="⭐⭐⭐⭐").length;

let three = reviews.filter(r => r.rating==="⭐⭐⭐").length;


// Display calculated values in statistics table
$("#totalReviews").text(total);

$("#fiveStar").text(five);

$("#fourStar").text(four);

$("#threeStar").text(three);

}


displayReviews();

updateStatistics();


// Event handler for Submit Review button
$("#submitReview").click(function(){

// Retrieve values from input fields    
let name = $("#reviewerName").val().trim();

let review = $("#reviewText").val().trim();

let rating = $("#reviewRating").val();


// Validation to ensure fields are not empty
if(name==="" || review===""){

alert("Please fill all fields");

return;

}


// Add a new review object to the reviews array
reviews.push({

name:name,

review:review,

rating:rating

});


// Save updated reviews array to localStorage
localStorage.setItem(

"reviews",

JSON.stringify(reviews)

);


displayReviews();

updateStatistics();


// Clear input fields after submission
$("#reviewerName").val("");
$("#reviewText").val("");
$("#reviewRating").prop("selectedIndex",0);


alert("Review submitted successfully");
});


// Event handler for View Reviews button
$("#viewReviews").click(function(){

displayReviews(true);

});


$(document).on("click",".deleteBtn",function(){

let index = $(this).data("index");

// Remove selected review from array
reviews.splice(index,1);


// Save updated reviews array
localStorage.setItem(

"reviews",

JSON.stringify(reviews)

);


displayReviews();
updateStatistics();

alert("Review deleted successfully");


});



$(document).on("click",".editBtn",function(){

let index = $(this).data("index");


// Populate form fields with selected review details
$("#reviewerName").val(

reviews[index].name

);


$("#reviewText").val(

reviews[index].review

);


$("#reviewRating").val(

reviews[index].rating

);



reviews.splice(index,1);


localStorage.setItem(

"reviews",

JSON.stringify(reviews)

);


displayReviews();
updateStatistics();


$("html, body").animate({

scrollTop:0

},500);

});


// Event handler for Highlight Names button
$("#highlightMembers").click(function(){

// Select the first column and apply CSS styling
$("#reviewtable tbody tr td:first-child").css({
"background-color":"yellow",
"font-weight":"bold",
"color":"black"
});

});
});