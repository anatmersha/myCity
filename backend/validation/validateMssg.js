import { ObjectId } from "mongodb";
export default  function validateMssg(body) {
 if (Object.keys(body).length <4) {
  console.log('NOT ENOUGH FIELDS ---REGISTER---', body);
  return { status: false, data: 'לא מספיק שדות' };
 }
 const errors = [];
 const unexpectedFields = [];
 for (const field in body) {
  const element = body[field];
  switch (field) {
   case 'sender':
    if (ObjectId.isValid(element))
     errors.push('מספר השולח אינו תקין נסו שנית או צרו קשר');
    break;
   case 'convo':
    if (ObjectId.isValid(element))
     errors.push('מספר שיחה לא תקין אנא נסו שנית מאוחר יותר או צרו קשר');
    break;
   case 'text':
        if(typeof element!='string')errors.push('תוכן ההודעה אינו תקין נסו שנית')
       if (!element.length > 0) errors.push('תוכן ההודעה לא קיים');
    break;
   case 'created':
    break;
   default:
    unexpectedFields.push(`unexpected field-${field}`);
    break;
  }
 }
 if (unexpectedFields.length) {
  console.log('UNEXPECTED FIELDS ---REGISTER---', unexpectedFields);
  return { status: false, data: unexpectedFields.join(',') };
 }
 if (errors.length) return { status: false, data: errors.join(',') };
 return { status: true, data: body };
 // expected output const user= validateFields(body)
 // if user ===true good else res.send(user.data).sendStatus(400)
}
