//Paste the javascript url below into the URL bar of a bookmark, and when you click on that bookmark it will prompt you to enter the words you want to emojify.
//See the Read Me file for implementation instructions and limitations in Chrome.


javascript: function main() {var str=prompt("What would you like to emojify?"); var final=""; var letters = /^[a-zA-Z]*$/; var numbers = /^[0-9]*$/; for (let i = 0; i < str.length; i++) {if (str.charAt(i).match(letters)) {final=final.concat(":"+str.charAt(i)+":")} else if (str.charAt(i).match(numbers)) {final=final.concat(":e"+str.charAt(i)+":")} else if (str.charAt(i) == " " || str.charAt(i) ==".") {final=final.concat(str.charAt(i)+"     ")} else if (str.charAt(i) == "?") {final=final.concat(":question:")} else if (str.charAt(i) == "!") {final=final.concat(":exclamation:")} else {final=final.concat(str.charAt(i))}}; console.log(final); window.alert(final); } main()
