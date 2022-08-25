const date = new Date(20, 3, 4, 18);
const time = date.getHours();

if (time < 13 ) {
    console.log("you are doing well good morning");
} else if (time > 12  && time < 18 ) {
    console.log("There is no light but it is great afternoon")
} else {
    console.log ("A greet Evening to be a web developer")
}