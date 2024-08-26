let mark={
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI=(this.mass/(this.height**2)).toFixed(2);// BMI được thêm vào object 1 cách tự động nếu chưa có
        return this.BMI;
    }
};
let john={
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI=(this.mass/(this.height**2)).toFixed(2);
        return this.BMI;
    }
};
if(mark.calcBMI()>john.calcBMI()){
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
}else if(john.BMI>mark.BMI){
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
}
