// Generate a PDF document from a HTML string

fn(state => {
  const { data } = state;

  state.pdfHTMLContent = `<html>
       <body style="font-family: Arial, sans-serif; font-size: 14px;">
         <h1>Sales Report</h1>
         <p>Date: ${data.date}</p>
         <p>Total Sales: $${data.totalSales}</p>
      </body>
    </html>`;

  return state;
});

generatePDF($.pdfHTMLContent, {
  sandbox: true,
  filename: 'trials.pdf',
});

fn(state => {
  const { data } = state;
  console.log(`Download PDF in 48 hours from ${data.url}`);
  return { ...state, pdfData: data };
});
