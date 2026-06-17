export default function ThankYou(){

return(

<div
className="
min-h-screen
bg-gray-100
flex
items-center
justify-center
p-6
"
>

<div
className="
max-w-xl
w-full
bg-white
rounded-3xl
shadow-xl
p-10
text-center
"
>

<div
className="
text-6xl
mb-6
"
>

✅

</div>

<h1
className="
text-3xl
font-black
mb-4
"
>

Payment Received

</h1>

<p
className="
text-gray-600
mb-8
"
>

Thank you for your order.

We received your payment and sent confirmation email.

Larry will review and contact you soon.

</p>

<button

onClick={()=>{

window.location.href='/'

}}

className="
bg-black
text-white
px-8
py-4
rounded-full
"

>

Back to Calculator

</button>

</div>

</div>

)

}