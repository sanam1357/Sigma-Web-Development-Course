probability = Math.random()*101
console.log("The Probability is ", probability)
console.log("Choose One Number:\n1.Sum\n2.Subtract\n3.Multiply\n4.Divide")
question = 2

function calcu(a,b){
    if(probability>10){
        if(question==1){
            console.log("The Sum of ",a," & ",b," is ",(a+b))
        }
        else if(question==2){
            console.log("The Subraction of ",a," & ",b," is ",(a-b))
        }
        else if(question==3){
            console.log("The Multiplication of ",a," & ",b," is ",(a*b))
        }
        else if(question==2){
            console.log("The Divison of ",a," & ",b," is ",(a/b))
        }
        
    }
    else{
        
        if(question==1){
            console.log("The Sum of ",a," & ",b," is ",(a-b))
        }
        else if(question==2){
            console.log("The Subraction of ",a," & ",b," is ",(a/b))
        }
        else if(question==3){
            console.log("The Multiplication of ",a," & ",b," is ",(a+b))
        }
        else if(question==2){
            console.log("The Divison of ",a," & ",b," is ",(a**b))
        }
    }


}
calcu(5,6)
