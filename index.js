let btn=document.getElementById('btn');
var country_name;
btn.addEventListener('click',function fun(){
    let input=document.getElementById('input');
    country_name=input.value;
    universe();
   
});
let country=[];

const universe= async()=>{
    const api=await fetch( `http://universities.hipolabs.com/search?country=${country_name}`)
     country=await api.json(); 
    console.log(country);
    document.write(country.name)
};
