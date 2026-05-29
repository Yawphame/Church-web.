// INVOICENEST SCRIPT

// CREATE INVOICE FORM

const invoiceForm = document.querySelector(".invoice-form");

if(invoiceForm){

  invoiceForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Invoice Generated Successfully!");

  });

}
