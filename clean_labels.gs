var subscribers = [];
var curDate = new Date();

function clean_old() {
  subscribe('Github/Chef', 96);
  subscribe('Github/Misc', 6);
  subscribe('Github/Extensions', 6);
  subscribe('Github/Zendesk', 6);

  subscribe('Notifications/Cron', 24);
  subscribe('Notifications/Alerts', 12);

  run();
}


function subscribe(string, hours){
  subscribers.push({search: string, hours: hours});
}

function run(){
  var labels = GmailApp.getUserLabels();

  for(var i = 0; i < labels.length ; i++){
    for(var j = 0; j < subscribers.length ; j++){
      cleanLabel(labels[i], subscribers[j]);
    }
  }
}                

function cleanLabel(label, subscriber){
  var labelName = label.getName();

  if(labelName.indexOf(subscriber.search) > -1){
    var timeout = 1000 * 60 * 60 * subscriber.hours;
    var threads = label.getThreads();
    var curDate = new Date();

    for (var j = 0; j < threads.length; j++) {
      if (curDate - threads[j].getLastMessageDate() > timeout){
        threads[j].removeLabel(label);
      }
    }
  }
}
