function calculate(){
    let day;
    let month;
    let year;
    console.log(cd.value.slice(0,5));
    let current_day = parseInt( cd.value.slice(8,10),10);
    let current_month = parseInt( cd.value.slice(5,7),10);
    let current_year = parseInt( cd.value.slice(0,4),10);
    console.log("current date:-" ,current_year,current_month,current_day);

    let birth_day = parseInt( dob.value.slice(8,10),10);
    let birth_month = parseInt( dob.value.slice(5,7),10);
    let birth_year = parseInt( dob.value.slice(0,4),10);
    console.log("date of birth:-" , birth_year,birth_month,birth_day);

    if(current_day>=birth_day)
    {
      day= current_day - birth_day;
    }
    else
    {
        day = current_day + new Date(current_year,current_month,0).getDate() - birth_day;
        current_month--;
    }

    if(current_month>=current_day)
    {
        month = current_month - birth_month;
    }
    else
    {
        month = current_month + 12 - birth_month;
        current_year--;
    }
    year = current_year - birth_year;

    if(year<0)
    {
        agetext.innerHTML = "WRONG DATA ,you are not born yet ";
    }
    else
    {
        agetext.innerHTML = year + " years , "  + month + " months ," + day + " days " ;
    }

} 