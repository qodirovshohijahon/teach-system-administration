let menu = {
    widht : 200,
    height : 300,
    title : 'mymenu'
}
​
function sum(myObject) {
    for (let key in myObject )
    {
        if(menu[key] === typeof number)
        {
            key*=2;
            return key;
    
        }
    }
    
    //  return menu;   
}
console.log(sum());

console.log(menu[key])