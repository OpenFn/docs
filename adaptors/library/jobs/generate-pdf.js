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

// Post generated PDF link to WhatsApp
fn(state => {
  const { data } = state;
  const pdfData = JSON.parse(data);
  return { ...state, pdfData };
});

request('POST', 'messages', state => ({
  to: '254712345678',
  body: `Please check on the PDF and download in 24hours. ${state.pdfData.url}`,
  type: 'template',
  template: {
    name: 'hello_world',
    language: { code: 'en_US' },
  },
  messaging_product: 'whatsapp',
}));
