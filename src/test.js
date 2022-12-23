const user= [
    {
        "id": 100,
        "firstName": "Torre",
        "lastName": "Doppler",
        "email": "tdoppler2r@yolasite.com",
        "gender": "Male",
        "birthday": "1998-05-17T10:20:30Z",
        "salary": 6924,
        "phone": "766-973-5223"
      }
    ]

   
    const data = Object.values(user[0]);
 
    const dateFormat= (user)=>{
       const date =  user[5].substring(0,10);
       const day = date.substring(8);
       const month = date.substring(5,7);
       const year = date.substring(0,4);
       return `${day}/${month}/${year}`;
    }
    data.map((string,index)=>{
       index == 5 ? console.log(dateFormat(data)) : '';
    })