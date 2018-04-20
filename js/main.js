lightbox.option({

    wrapAround: true,
    showImageNumberLabel: false

})


// Search Function

function searchFunction() {
    // Declare variables
    var input, filter, ul, li, img;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();
    ul = document.getElementById('gallery');
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < li.length; i++) {
        img = li[i].getElementsByTagName("img")[0];
        if (img.getAttribute('alt').toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
