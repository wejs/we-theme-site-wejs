// Theme scripts
$(document).ready(function() {

    function byTerm(searchTerm) {
        return searchTerm.name.indexOf('plugin') >= 0; 
    }

    $.ajax({
        url: "https://api.github.com/orgs/wejs/repos"
    }).then(function(data) {
        var plugins = data.filter(byTerm);
        console.log(plugins);
    });
});