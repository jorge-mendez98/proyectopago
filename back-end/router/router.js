var express = require("express")
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
var rutas =  express.Router()
rutas.get("/",function(req,res,next){
  
  res.render("index.html")
})
rutas.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'LIBRO DE TERROR',

          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success.html',
    cancel_url: 'http://localhost:3000/cancel.html',
  });

  res.redirect(303, session.url);
});
module.exports = rutas