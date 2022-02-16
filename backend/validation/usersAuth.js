export default function usersAuth(body){
    if (Object.keys(body).length<5) {console.log('NOT ENOUGH FIELDS ---REGISTER---',body);return { status: false, data: 'לא מספיק שדות' };}
    const errors=[]
    const unexpectedFields=[]
for (const field in body) {
    const element=body[field]
switch (field) {
 case 'firstName':
       if (element.match(/[^A-Za-z]/)) errors.push('שם פרטי לא תקין');
  break;
 case 'lastName':
    if (element.match(/[^A-Za-z]/)) errors.push('שם משפחה לא תקין');
    break
 case 'city':
    if (element.match(/[^A-Za-z]/)) errors.push('שם העיר לא תקין');
 break;
 case 'entity':
    if (element === 'admin' || element === 'sub-admin' || element === 'user')''
     else errors.push('סוג משתמש לא תקין');
    break;
 case 'id':
    if (!Number(element)) errors.push('תעודת הזהות אינה תקינה');
    break;
    default:
        unexpectedFields.push(`unexpected field-${field}`)
        break
    }
}
console.log(unexpectedFields);
if(unexpectedFields.length){console.log('UNEXPECTED FIELDS ---REGISTER---',unexpectedFields); return {status:false,data:unexpectedFields.join(',')}}
if (errors.length)return {status:false,data:errors.join(',')}
return{status:true,data:body}
// expected output const user= validateFields(body) 
// if user ===true good else res.send(user.data).sendStatus(400)
}