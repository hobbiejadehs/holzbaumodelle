// www.mysite.com/my_app.html?Use_Id=abc

var GET = {};
var query = window.location.search.substring(1).split('&');
for (var i = 0, max = query.length; i < max; i++) {
  if (query[i] === '')
    // check for trailing & with no param
    continue;

  var param = query[i].split('=');
  GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || '');
}

const id = GET.id;
console.log(id);
