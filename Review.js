$(document).ready(function () {

  //  DOM Modification
  $('#addText').click(function () {
    $('#infoContainer2').append('<p>Explore Photo Gallery Page</p>');
  });



      // --- DOM Traversal ---
      $('#highlightMembers').click(function () {
        // 1. Highlight team member names
        $('#reviewtable tbody tr td:nth-child(2)').each(function () {
          $(this).css('background-color', '#d4edda');
        });
      });
    });
