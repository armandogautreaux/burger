$(function() {
  //POST A BURGER THROUGH THE NEXT EVENT
  $('.create-form').on('submit', function(event) {
    event.preventDefault();

    var newBurger = {
      name: $('#name')
        .val()
        .trim(),
      devoured: $('#devoured').val()
    };

    // Send the POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
  //UPDATE BOOLEAN VALUE THROUGH THE NEXT EVENT
  $('.devour-burger').on('click', function(event) {
    event.preventDefault();
    var id = $(this).data('id');

    var newDevour = $(this).data('newdevour');
    var newDevourUpdate = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newDevourUpdate
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
