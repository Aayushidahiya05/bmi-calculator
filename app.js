const form = document.querySelector('form')
//this will give you an empty value
//const height = parseInt(document.querySelector('#height').value)

//why can't we add the height value outside the form? 
//ans:-page load hote hi empty value height k andr store ho jayegi isliye form k andr likha jaata h
//ans:- because after page loading the empty value will be stored immediately in the height so in order to avoid it we must enter the height inside the form.

//whenever form is submitted its submitted in GET type or POST type  
//so in order to stop it from getting into url(stopping the default action of the form)

form.addEventListener('submit',function(e){
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

    if(height ==='' || height<0 || isNaN(height)){
        results.innerHTML=`Please give a valid height`;
    }
   
    else if(weight ==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)  
        results.innerHTML = `<span> ${bmi}</span>`;
    }

})