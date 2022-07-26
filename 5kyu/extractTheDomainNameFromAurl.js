// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    //your code here
// 

var myRegexp = new RegExp(".*\:\/\/(?:www.)?([^\/]+)(?:\.com.)", "g");
var match = myRegexp.exec(url);
console.log(match); // abc

  }


  // Match => reggie
  // .com => \.com
  // www. => w{3}\.
 // :// => \:\/\/


 // regex  - .*\://(?:www.)?([^\/]+)(?:\.com.)


 console.log(domainName("http://github.com/carbonfive/raygun"))
 console.log(domainName("http://www.zombie-bites.com"))
 console.log(domainName("https://www.cnet.com"))