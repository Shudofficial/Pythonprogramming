// let user = {
//     name: "John"
//     surname: "Smith"
// }
// user.name = "Pete"
// delete user.name;
let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
    for(let key in isEmpty){
        return false
    }
    return true;

}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

//If salaries is empty, then the result must be 0.
let salaries = {
    John: "100",
    Ann: "130",
    Pete: "160"
};
let sum = 0
for(let keys in salaries) {
    sum += salaries[keys];
}
alert(sum);

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
function multiplyNumeric(obj){
    for(let key in multiplyNumeric){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2
        }     
    }       
}
