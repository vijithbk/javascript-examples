var passedMarksList = [400, 300, 500, 600, 800, 900].filter(function checkPassedStatus(marks) {
    return marks >= 400;
});
console.log(passedMarksList);  //  400, 500, 600, 800, 900