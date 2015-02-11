javascript:
var y = document.getElementsByClassName('_zs fwb');
var flag = 0;
var p;
p = window.prompt('Enter no of names required ', 10);

function moveWin()
{
    window.scroll(0, document.body.scrollHeight);
    y = document.getElementsByClassName('_zs fwb');
    if (y.length > p)
    {
      clearTimeout(stopScroll);
      flag = 1;
    }
    else
    var stopScroll = setTimeout('moveWin();', 1000);
    if (flag == 1)
    {
      y = document.getElementsByClassName('_zs fwb');
      var final = [[' USERNAME ',' ID ']];
      var names = [];
      var ids = [];
      var csvRows = [];
      for (var i = 0; i < p; i++)
      {
        var name = y[i].textContent;
        names.push(name);
        var url = y[i].getElementsByTagName('a') [0].href;
        var id = url.slice(25, url.indexOf('?'));
        ids.push(id);
        final.push([name,id]);
      }
      for (var i = 0 ; i < final.length ; ++i)
      {
        csvRows.push(final[i].join(','));
      }
      var csvString = csvRows.join('%0A');
      var a = document.createElement('a');
      a.href = 'data:attachment/csv,' + csvString;
      a.target = '_blank';
      a.download = 'FBnames.csv';
      if (csvRows.length > 1)
      {
        document.body.appendChild(a);
        a.click();
      }
    }
}
moveWin();
void (0);
