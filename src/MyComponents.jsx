import React, { useState } from 'react'

function MyComponents(){

  const [name, setName] = useState();
  const [qty, setQty] = useState();
  const [remarks, setRemarks] = useState();
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState();

  const handleNameChange = (e) =>{
    setName(e.target.value);
  }

  const handleQty = (e) => {
    setQty(e.target.value);
  }

  const remarksChange = (e) => {
    setRemarks(e.target.value);
  }

  const paymentHandler = (e) => {
    setPayment(e.target.value);
  }

  const shippingHandler = (e) => {
    setShipping(e.target.value)
  }

  return(
    <>
      <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input type="number" value={qty} onChange={handleQty} />
        <p>Qty: {qty}</p>

        <textarea value={remarks} onChange={remarksChange}></textarea>
        <p>Remarks:{remarks}</p>

        <select value={payment} onChange={paymentHandler}>
          <option value="">Select Payment</option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
          <option value="COD">Cash on Delivery</option>
        </select>
        <p>Payment:{payment}</p>


        <input type="radio" value="Pickup" checked={shipping == "Pickup"} onChange={shippingHandler}/>Pickup
        <input type="radio" value="Delivery" checked={shipping == "Delivery"} onChange={shippingHandler}/>Delivery
        <p>{shipping}</p>

      </div>
    </>
  )
}

export default MyComponents;