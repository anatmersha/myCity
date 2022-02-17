export default function usersAuth(body){
    if (Object.keys(body).length<6) {console.log('NOT ENOUGH FIELDS ---REGISTER---',body);return { status: false, data: 'לא מספיק שדות' };}
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
 case 'idCard':
    if (!Number(element)) errors.push('תעודת הזהות אינה תקינה');
    break;
case 'email':
if (!element?.match(/@/g)?.length === 1) inputsErr.push('@ אחד בלבד חובה');
 if (!element?.match(/.com/gi)?.length === 1) inputsErr.push('סיומת לא תקינה');
 if (!element?.match(/.co.il/gi)?.length === 1) inputsErr.push('סיומת לא תקינה');
 if (!element?.match(/.org/gi)?.length === 1) inputsErr.push('סיומת לא תקינה');
 if (!element?.match(/.net/gi)?.length === 1) inputsErr.push('סיומת לא תקינה');
break
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