function validateFields(body){
    const errors=[]
    const unexpectedFields=[]
for (const field in body) {
    const element=body[field]
switch (field) {
 case 'firstName':
       if (element.match(/[1-9\w]/)) errors.push('שם פרטי לא תקין');
  break;
 case 'lastName':
    if (element.match(/[1-9\w]/)) errors.push('שם משפחה לא תקין');
 case 'city':
    if (city.match(/[1-9\w]/)) errors.push('שם העיר לא תקין');
 break;
 case 'entity':
    if (element === 'admin' || element === 'sub-admin' || element === 'user')''
     else errors.push('סוג משתמש לא תקין');
    break;
 case 'id':
    if (!Number(id)) errors.push('תעודת הזהות אינה תקינה');
 break;
 default:
     unexpectedFields.push(key)
     break
}
}
if(unexpectedFields.length){console.log('UNEXPECTED FIELDS ---REGISTER---'); return unexpectedFields.join(',')}
if (errors.length)return errors.join(',')
return true
// expected output const user= validateFields(body) 
// if user ===true good else res.send(user).sendStatus(400)
}
