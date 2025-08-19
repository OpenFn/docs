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
  filename: 'trials.pdf', // Returns a JSON response containing an url parameter to PDFShift's Amazon S3 bucket.
  // The URL expires after 48 hours
});

fn(state => {
  const { data } = state;
  const pdfData = JSON.parse(data);
  console.log(`Download PDF in 48 hours from ${pdfData.url}`);
  return { ...state, pdfData };
});
