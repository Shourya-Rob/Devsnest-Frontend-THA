/*------------Call------------*/
var obj1={
    name : "Shourya",
    battery : 50,
    chargeBattery : function(){
        this.battery=100;
    }
}

 var obj2={
     name : "Ghosh",
     battery : 30
 }
obj1.chargeBattery.call(obj2);

console.log(obj2);


/*-----------Apply-----------*/

var obj1={
    name : "Shourya",
    battery : 50,
    chargeBattery : function(a,b){
        this.battery=20+a+b;
    }
}

 var obj2={
     name : "Ghosh",
     battery : 30
 }
obj1.chargeBattery.apply(obj2,[20,30]);

console.log(obj2);


/*------------Bind------------*/

var obj1={
    name : "Shourya",
    battery : 50,
    chargeBattery : function(a,b){
        this.battery=20+a+b;
    }
}

 var obj2={
     name : "Ghosh",
     battery : 30
 }
var obj3=obj1.chargeBattery.bind(obj2,20,30);
obj3();
console.log(obj2);