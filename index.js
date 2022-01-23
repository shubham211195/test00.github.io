let btn=document.getElementById('btn');
btn.addEventListener('click',function fun(){
    let input=document.getElementById('input');
    console.log(input.value);
   
});
fun();

(async()=>{
    const api=await fetch( `http://universities.hipolabs.com/search?country={country_name}`)
     country=await api.json();
    console.log(country);
})();
