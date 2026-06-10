import {

PayPalButtons

}

from '@paypal/react-paypal-js'


import {
useState,
useEffect
}
from 'react'

import emailjs
from
'@emailjs/browser'

export default function Checkout(){

const [form,setForm]=useState({

name:'',
email:'',
phone:'',
country:'',
address:'',
state:'',
city:'',
zip:''

})

useEffect(()=>{

const saved=
localStorage.getItem(
'checkoutCustomer'
)

if(saved){

setForm(
JSON.parse(saved)
)

}

},[])

useEffect(()=>{

localStorage.setItem(

'checkoutCustomer',

JSON.stringify(form)

)

},[form])

const [ready,setReady]=
useState(false)

const [invoice,setInvoice]=
useState(false)



const [order,setOrder]=
useState(null)

useEffect(()=>{

    

const saved=
localStorage.getItem(
'checkoutOrder'
)

if(saved){

setOrder(
JSON.parse(saved)
)

}

},[])

return(

<div className="min-h-screen bg-gray-100 p-6">

<div
className="
max-w-2xl
mx-auto
bg-white
rounded-3xl
p-6
md:p-10
shadow-sm
"
>

<h1
className="
text-3xl
font-bold
text-center
"
>

Checkout

</h1>

<p
className="
text-center
text-gray-500
mt-2
mb-8
"
>

Enter shipping details

</p>

<div className="space-y-4">

<input
value={form.name}
onChange={(e)=>
setForm({
...form,
name:e.target.value
})
}
placeholder="Full Name"
className="
w-full
border
rounded-2xl
p-4
"
/>

<input
value={form.email}
onChange={(e)=>
setForm({
...form,
email:e.target.value
})
}
placeholder="Email"
className="
w-full
border
rounded-2xl
p-4
"
/>

<input
value={form.phone}
onChange={(e)=>
setForm({
...form,
phone:e.target.value
})
}
placeholder="Phone"
className="
w-full
border
rounded-2xl
p-4
"
/>

<input
value={form.country}
onChange={(e)=>
setForm({
...form,
country:e.target.value
})
}
placeholder="Country"
className="
w-full
border
rounded-2xl
p-4
"
/>

<input
value={form.address}
onChange={(e)=>
setForm({
...form,
address:e.target.value
})
}
placeholder="Address"
className="
w-full
border
rounded-2xl
p-4
"
/>

<input
value={form.state}
onChange={(e)=>
setForm({
...form,
state:e.target.value
})
}
placeholder="State / Province"
className="
w-full
border
rounded-2xl
p-4
"
/>

<div className="grid md:grid-cols-2 gap-4">

<input
value={form.city}
onChange={(e)=>
setForm({
...form,
city:e.target.value
})
}
placeholder="City"
className="
border
rounded-2xl
p-4
"
/>

<input
value={form.zip}
onChange={(e)=>
setForm({
...form,
zip:e.target.value
})
}
placeholder="ZIP Code"
className="
border
rounded-2xl
p-4
"
/>

</div>

</div>

<div
className="
mt-8
rounded-3xl
bg-gray-50
p-5
"
>

<div className="font-bold">

Order Summary

</div>

<div
className="
text-sm
text-gray-500
mt-2
"
>

{order ? (

<div className="space-y-5 text-sm">

{order.gummies > 0 && (

<div>

<div className="font-semibold">

Bulk Gummies — {order.gummies} {order.unit}

</div>

{order.bulkFlavors?.length > 0 && (

<div className="text-gray-500 pl-3 mt-1">

{order.bulkFlavors.map(f=>(

<div key={f}>
• {f}
</div>

))}

</div>

)}

{

order.bulkFlavorNote

&&

(

<div
className="
mt-3
text-sm
italic
text-gray-600
"
>

Mix Ratio:

<br/>

<div
className="
whitespace-pre-line
"
>

{

order.bulkFlavorNote

}

</div>

</div>

)

}

</div>

)}

{order.dry > 0 && (

<div>

<div className="font-semibold">

Gold Sea Moss — {order.dry} {order.unit}

</div>

</div>

)}

{order.soap > 0 && (

<div>

<div className="font-semibold">

Soap — {order.soap} {order.soapUnit}

</div>

{order.soapScents?.length > 0 && (

<div className="text-gray-500 pl-3 mt-1">

{order.soapScents.map(s=>(

<div key={s}>
• {s}
</div>

))}

{

order.soapMixNote

&&(

<div
className="
mt-3
italic
text-gray-600
whitespace-pre-line
"
>

Mix Ratio:

<br/>

{

order.soapMixNote

}

</div>

)

}

</div>

)}

</div>

)}

{order.jar > 0 && (

<div>

<div className="font-semibold">

60ct Jar — {order.jar} {order.jarUnit}

</div>

{order.jarFlavors?.length > 0 && (

<div className="text-gray-500 pl-3 mt-1">

{order.jarFlavors.map(f=>(

<div key={f}>
• {f}
</div>

))}

</div>

)}

{

order.jarFlavorNote

&&

(

<div
className="
mt-3
text-sm
italic
text-gray-600
whitespace-pre-line
"
>

Mix Ratio:

<br/>

{

order.jarFlavorNote

}

</div>

)

}

{order.jarLid && (

<div className="text-gray-500 pl-3">

Lid: {order.jarLid}

</div>

)}

</div>

)}

{order.pouch > 0 && (

<div>

<div className="font-semibold">

60ct Pouch — {order.pouch} {order.pouchUnit}

</div>

{order.pouchFlavors?.length > 0 && (

<div className="text-gray-500 pl-3 mt-1">

{order.pouchFlavors.map(f=>(

<div key={f}>
• {f}
</div>

))}

</div>

)}

{

order.pouchFlavorNote

&&

(

<div
className="
mt-3
text-sm
italic
text-gray-600
whitespace-pre-line
"
>

Mix Ratio:

<br/>

{

order.pouchFlavorNote

}

</div>

)

}

{order.pouchColor && (

<div className="text-gray-500 pl-3">

Color: {order.pouchColor}

</div>

)}

</div>

)}

<hr/>

{order?.importNotice&&(

<div
className="
bg-amber-50
rounded-2xl
p-4
mt-4
text-sm
"
>

Import tax notice: When delivery is near, you may receive an online customs payment request. Estimated: US$30–60

</div>

)}

<div className="font-bold">

Total

</div>

<div className="text-2xl font-black">

{order.currency === 'USD' &&
`US$${order.total}`}

{order.currency === 'CAD' &&
`CA$${order.total}`}

{order.currency === 'GBP' &&
`£${order.total}`}

{order.currency === 'EUR' &&
`€${order.total}`}

</div>

</div>

):( 
<div className="text-gray-400">

No order found

</div>

)}

</div>

</div>

<div
className="
bg-yellow-50
rounded-2xl
p-4
mt-6
text-center
text-sm
"
>

Shipping cost already included.

After payment,
Larry will confirm delivery.

</div>

<>

<button

type="button"

onClick={()=>{

if(

!order||

!form.name||

!form.country||

!form.address||

!form.city

){

alert(
'Please complete shipping info'
)

return

}

setInvoice(false)

setReady(true)

}}

className="
w-full
bg-black
text-white
rounded-full
py-4
mt-8
"

>

Review Order

</button>

{ready&&(

<>

<button

type="button"

onClick={()=>
setInvoice(true)
}

className="
w-full
mt-4
bg-gradient-to-r
from-[#FFC439]
to-[#FFB347]
text-[#003087]
font-bold
rounded-full
py-5
"

>

Create Invoice

<div className="text-xs">

Review before payment

</div>

</button>

{invoice&&(

<div
className="
mt-6
rounded-3xl
border
bg-gray-50
p-6
space-y-3
"
>

<div className="text-2xl font-bold">

Invoice Preview

</div>

<div>
Customer: {form.name}
</div>

<div>
Country: {form.country}
</div>

<div>
Address: {form.address}
</div>

<div>

State:
{form.state}

</div>

<div>

City:
{form.city}

</div>

<div>

Display price:{' '}

<span className="font-bold">

{order?.currency==='USD'&&
`US$${order?.total}`}

{order?.currency==='CAD'&&
`CA$${order?.total}`}

{order?.currency==='GBP'&&
`£${order?.total}`}

{order?.currency==='EUR'&&
`€${order?.total}`}

</span>

<div
className="
mt-2
text-sm
font-semibold
"
>

Checkout amount:{' '}
US${order?.usdTotal}

</div>

<div
className="
text-xs
text-gray-500
"
>

Payment processed in USD.
Your bank or PayPal may convert automatically.

</div>

</div>

<div
className="
bg-yellow-50
rounded-xl
p-3
text-sm
"
>

Shipping already included

</div>

{order?.importNotice&&(

<div
className="
bg-orange-50
rounded-xl
p-3
text-sm
mt-3
"
>

Estimated import tax: 

US$30–60. Payment is usually requested online before delivery.

</div>

)}

<div
className="
mt-4
space-y-3
"
>

<div
className="
bg-blue-50
rounded-2xl
p-4
text-sm
"
>

Accepted payment methods

<div className="mt-2">

✓ Apple Pay

</div>

<div>

✓ Debit / Credit Card

</div>

<div>

✓ PayPal

</div>

</div>

<div className="mt-5">


<PayPalButtons

forceReRender={[

order

]}

style={{

shape:'pill',

layout:'vertical',

label:'paypal',

height:50

}}

createOrder={(data,actions)=>{

console.log(
'PAYPAL ORDER',
order
)

const amount=

Number(
order?.usdTotal
)

console.log(
'USD TOTAL',
amount
)

return actions.order.create({

purchase_units:[

{

amount:{

currency_code:'USD',

value:

amount.toFixed(2)

},

description:

'Larry Sea Moss Wholesale'

}

]

})

}}

onApprove={

async(

data,

actions

)=>{

try{

const payment=

await actions
.order
.capture()

const customer=

JSON.parse(

localStorage.getItem(
'checkoutCustomer'
)

)

const paymentId=
payment.id

const lines=[]

lines.push(
`Customer:
${customer?.name}`
)

lines.push(
`Email:
${customer?.email || '-'}`
)

lines.push(
`Phone:
${customer?.phone || '-'}`
)

lines.push(
`Country:
${customer?.country || '-'}`
)

lines.push(
`Address:
${customer?.address || '-'}`
)

lines.push(
`State:
${customer?.state || '-'}`
)

lines.push(
`City:
${customer?.city || '-'}`
)

lines.push(
`ZIP:
${customer?.zip || '-'}`
)

if(order.gummies>0){

lines.push(
`Sea Moss Gummies:
${order.gummies} ${order.unit}`
)

if(order.bulkFlavors?.length){

lines.push(
`Flavors:
${order.bulkFlavors.join(', ')}`
)

}

if(order.bulkFlavorNote){

lines.push(
`Mix Ratio:
${order.bulkFlavorNote}`
)

}

}

if(order.dry>0){

lines.push(
`Gold Sea Moss:
${order.dry} ${order.unit}`
)

}

if(order.soap>0){

lines.push(

`Soap:
${order.soap} bars`

)

if(
order.soapScents?.length
){

lines.push(

`Scents:
${order.soapScents.join(', ')}`

)

}

if(
order.soapMixNote
){

lines.push(

`Mix Ratio:
${order.soapMixNote}`

)

}

}

if(order.jar>0){

lines.push(
`60ct Gummies Jar:
${order.jar} jars`
)

if(order.jarFlavors?.length){

lines.push(
`Flavors:
${order.jarFlavors.join(', ')}`
)

}

if(order.jarFlavorNote){

lines.push(
`Mix Ratio:
${order.jarFlavorNote}`
)

}

if(order.jarLid){

lines.push(
`Lid:
${order.jarLid}`
)

}

}

if(order.pouch>0){

lines.push(
`60ct Gummies Pouch:
${order.pouch} pouches`
)

if(order.pouchFlavors?.length){

lines.push(
`Flavors:
${order.pouchFlavors.join(', ')}`
)

}

if(order.pouchFlavorNote){

lines.push(
`Mix Ratio:
${order.pouchFlavorNote}`
)

}

if(order.pouchColor){

lines.push(
`Color:
${order.pouchColor}`
)

}

}

if(order.labelDesign){

lines.push(
'Label Design: Included'
)

}

lines.push(
`Total Weight:
${order.totalWeight} kg`
)

lines.push(
`Amount:
US$${order.usdTotal}`
)

lines.push(
`Payment ID:
${paymentId}`
)

const orderText=
lines.join('\n\n')

await Promise.all([

emailjs.send(

'service_wwkhsdi',

'template_wdcobns',

{

customer_name:

customer?.name,

country:

customer?.country,

amount:

`US$${order.usdTotal}`,

payment_id:

paymentId,

order:

orderText,

email:

customer?.email || form.email


},

'DDRcOIwMymVP1S2_s'

),

emailjs.send(

'service_wwkhsdi',

'template_hk1hkgn',

{

customer_name:

customer?.name,

country:

customer?.country,

amount:

`US$${order.usdTotal}`,

payment_id:

paymentId,

order:

orderText

},

'DDRcOIwMymVP1S2_s'

)

])

alert(

'Payment successful. Confirmation email sent.'

)

window.location.href=
'/'

}

catch(err){

console.error(
'EMAIL ERROR',
err
)

alert(

err?.text||

err?.message||

'Email failed'

)

}
}

}



onError={(err)=>{

console.log(
'PAYPAL ERROR',
err
)

alert(
'Payment failed'

)

}}

/>

</div>
</div>

</div>

)}

</>

)}
</>

<p
className="
text-center
text-sm
text-gray-500
mt-4
"
>

You can contact Larry for updates

</p>

</div>

</div>

)

}