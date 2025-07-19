import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
import { getCourseById } from '../../services/CourseService';
import { Button, Label, Textarea } from 'flowbite-react';
import ImageWithFallback from '../ImageWithFallback';
import { toast } from 'react-toastify';
import { createOrder, verifypayments } from '../../services/OrderService';
import { BUSINESS_DESCRIPTION, BUSINESS_NAME, KEY_ID } from '../config/Constant';

const OrderPage = () => {
     function getPriceAfterDiscount(price, discount) {
  return (price - (price * discount) / 100).toFixed(0);
}

    const {courseId} = useParams();
    const {isLogin,user} = useAuth();
    const [courses,setCourses] = useState(null);
    const [address, setAddress] = useState("");

    async function getCourse(){
        const course = await getCourseById(courseId);
        console.log("courses is",courses);
        
        setCourses(course);
    }
    
useEffect(()=>{
    getCourse()
},[]);
console.log(courses);

//Create Order
async function handleCreateOrder(){
  if(address.trim() ==""){
    console.log("user is",user);
    console.log(courses);
    
    toast.error("Address is required...");
    return;
  }


  const order = {
    amount: getPriceAfterDiscount(courses.price,courses.discount),
    address: address,
    userId:user?.userId,
   courseId: courses?.id,
   userName: user?.name 
    

  }
  console.log(order);
  

  //Call Create Order Api
  const orderResponse  = await createOrder(order)
  console.log(orderResponse);
  toast.success("order created. Now Proceeding for Payments.")
  
  var options = {
    "key": KEY_ID, // Enter the Key ID generated from the Dashboard
    "amount": orderResponse.amount, // Amount is in currency subunits. 
    "currency": "INR",
    "name": BUSINESS_NAME, //your business name
    "description": BUSINESS_DESCRIPTION,
    "image": "http://localhost:5173/react.svg",
    "order_id": orderResponse?.razorpayOrderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
      //After Payment Success
      toast.success("Payment Success")
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature)
        //Verify Payment 
        verifyPayment(response.razorpay_payment_id,response.razorpay_order_id,response.razorpay_signature);
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": user?.name, //your customer's name
        "email": user?.email,
        "contact": user?.phoneNumber //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": address
    },
    "theme": {
        "color": "#3399cc"
    }
};
//Call the RazorPay Checkout
const rpay = new window.Razorpay(options);
rpay.on('payment.failed', function (response){
        console.log(response.error.code);
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.step);
        console.log(response.error.reason);
        console.log(response.error.metadata.order_id);
        console.log(response.error.metadata.payment_id);
        toast.error("Payment Failed...")
});
rpay.open();
  
}

const verifyPayment=async (payementId,orderId,signature)=>{
try{
   const response = await verifypayments({
  razorpayOrderId: orderId,
  razorpayPaymentId: payementId,
  razorpaySignature: signature
  })

  toast.success("All Done..., thanks for buying...");
  console.log(response);

}catch(error){
  toast.error("Payment Failed....");
  console.log(error);
  
}
  
}

//Load Checkout Js[razorpay]
function loadCheckoutJs() {
return new Promise((resolve,reject)=>{
  const script = document.createElement('script');
  script.id = "razorpay_id";
  script.src = "https://checkout.razorpay.com/v1/checkout.js"

  script.onload =()=>{
    resolve("Script Loaded")
  }
  script.onerror=()=>{
    reject("Some Error Occured...")
  }


document.body.appendChild(script);
});


}
useEffect(()=>{
  loadCheckoutJs().then((response)=>{
    console.log(response);
    
  }).catch(error=>{
    console.log(error);
    
  });
},[]);


  return (
   <div className="flex dark:text-gray-200 gap-7 w-1/2 mx-auto mt-4 lg:mt-16 bg-gray-300 dark:bg-gray-700 rounded-lg p-6">
      <div className="flex w-full  justify-center  flex-col gap-3">
        <ImageWithFallback
          className={"w-full  max-h-52 rounded object-cover"}
          src={courses?.bannerUrl}
        />

        <p className="dark:text-gray-400">Course Information</p>
        <h1 className="font-bold text-xl">{courses?.title}</h1>
        <p>{courses?.shortDesc}</p>
        <p className="font-bold text-center text-4xl">
          ₹ {getPriceAfterDiscount(courses?.price, courses?.discount)}
        </p>
      </div>
      <div className="w-full flex  flex-col gap-3">
        <p className="dark:text-gray-400">Order Information</p>
        <h1 className="font-bold text-xl">{user?.name}</h1>
        <p>{user?.email}</p>

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="address" value="Billing Address" />
          </div>
          <Textarea
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            value={address}
            id="address"
            placeholder="Enter your billing address"
            required
            rows={4}
          />
        </div>
        <Button onClick={handleCreateOrder} color="indigo">
          Place Order
        </Button>
      </div>
    </div>
  )
}

export default OrderPage