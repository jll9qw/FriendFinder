var friendsData = [
  {
    customerName: "Ahmed",
    link: "ahmed@example.com",
    scores: [""]
  },
  {
    customerName: "Saima",
    link: "saima@example.com",
    scores: [""]
  }
];

var result = {};
for (var i=0; i<friendsData.length; i++) {
  result[friendsData[i].key] = friendsData[i].value;
}

module.exports = result;
