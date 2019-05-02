/* eslint-disable strict */
$(function() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    
    const input = $(this).find(
      'input[name="shopping-list-entry"]').val();
    const results = [];
    results.push($(`<li>
      <span class="shopping-item">${input}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`))

  
    $(".shopping-list").append(results);
  });
  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
  
  $('ul').on('click', '.shopping-item-toggle', function (event) {
    $(this).parent().siblings('span').toggleClass('shopping-item__checked');
  });
});
 