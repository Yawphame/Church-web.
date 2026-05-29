// INVOICENEST APP

const invoiceForm = document.querySelector(".invoice-form");

if(invoiceForm){

  invoiceForm.addEventListener("submit", function(event){

    event.preventDefault();

    // GET FORM VALUES

    const clientName =
      document.querySelector('input[placeholder="Enter client name"]').value;

    const clientEmail =
      document.querySelector('input[placeholder="Enter client email"]').value;

    const amount =
      document.querySelector('input[placeholder="$0.00"]').value;

    const dueDate =
      document.querySelector('input[type="date"]').value;

    const description =
      document.querySelector("textarea").value;

    const status =
      document.querySelector("select").value;


    // CREATE INVOICE OBJECT

    const invoice = {
      clientName,
      clientEmail,
      amount,
      dueDate,
      description,
      status
    };


    // GET OLD INVOICES

    let invoices =
      JSON.parse(localStorage.getItem("invoices")) || [];


    // ADD NEW INVOICE

    invoices.push(invoice);


    // SAVE TO LOCAL STORAGE

    localStorage.setItem(
      "invoices",
      JSON.stringify(invoices)
    );


    // SUCCESS MESSAGE

    alert("Invoice Saved Successfully!");


    // RESET FORM

    invoiceForm.reset();

  });

}
