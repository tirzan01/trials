 const digit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ,
 'j' ,'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 
 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// digit.lenght = 36
 function randomEmail(){
    const newEmail = []
    for (let i = 0; i < Math.ceil(Math.random()*10+10); i++) {
// result = 10 < i <= 20
        const element = digit[Math.floor(Math.random()*35)];    
        newEmail.push(element)
    }
    
    function Email(){
        let element = '' 

        for (let i = 0; i < newEmail.length; i++) {
            element = element+newEmail[i];     
        }

        return element 
    }

    return Email()+'@gmail.com'
}

 console.log(randomEmail())