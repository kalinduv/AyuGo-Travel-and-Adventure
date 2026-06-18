$(document).ready(function () {

  // ✅ DOM Modification
  $('#addParagraph').click(function () {
    $('#infoContainer').append('<p>Contact Us - travelwithayugo@gmail.com</p>');
  });

  $('#addText').click(function () {
    $('#infoContainer2').append('<p>Explore Photo Gallery Page</p>');
  });

  $('#addText2').click(function () {
    $('#infoContainer3').append('<p>Explore Destinations Page</p>');
  });


      // --- DOM Traversal ---
      $('#highlightMembers').click(function () {
        // 1. Highlight team member names
        $('#table1 tbody tr td:nth-child(2)').each(function () {
          $(this).css('background-color', '#d4edda');
        });
        // 2. Log roles to console
        $('#table1 tbody tr td:nth-child(3)').each(function () {
          console.log($(this).text());
        });
        // 3. Count team members
        let count = $('#table1 tbody tr').length;
        alert('Team members count: ' + count);
      });
    

    // HTML Events
    $(".banner").dblclick(function () {
      $(this).hide();
  });

 

$('#table2 tbody tr').on('dblclick', function () {
  $(this).css('background-color', '#ffeeba');
});

$('#table3 tbody tr').on('click', function () {
  alert('You selected the package: ' + $(this).children('td:first').text());
});


// --- DOM Attribute Modification ---
$('#addText').hover(function () {
  // 1. Change title on hover
  $(this).attr('title', 'Click to explore our gallery!');
});
// 2. Change href attribute on click
$('#addText').click(function (e) {
  e.preventDefault();
  $(this).attr('href', 'https://example.com/gallery');
});




//---javaScript Effects---

$('#addText2').click(function() {
$(this).animate({ marginTop: '-10px' }, 200).animate({ marginTop: '0px' }, 200);
});






// --- CSS Manipulation ---
$('#styleImages').click(function () {
  // 1. Toggle custom class
  $('img.img-thumbnail').toggleClass('active-style');
  // 2. Change text color of section titles
  $('h2').css('color', '#ff5733');
  // 3. Change background color of sections
  $('section').css('background-color', '#cce7d0');
});


   
});


  