const userName = document.getElementById("fname");
const submitBtn = document.getElementById("submitBtn");
const type = document.getElementById("fvals")
const email = document.getElementById("ename")
const serial = document.getElementById("serial")
const date = document.getElementById("date")


const {
  PDFDocument,
  rgb,
  degrees
} = PDFLib;


// const capitalize = (str, lower = false) =>
//   (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
//     match.toUpperCase()
//   );

submitBtn.addEventListener("click", () => {
  // const val = capitalize(userName.value);
  const value = {
    name: userName.value.padStart(18),
    type: type.value.toUpperCase(),
    email: email.value,
    serial:serial.value,
    date:date.value
  }
  //check if the text is empty or not
  if (value.email.trim() !== "" && email.checkValidity()) {
    // console.log(val);
    generatePDF(value);
  } else {
    userName.reportValidity();
  }
});

const generatePDF = async (name) => {
  const existingPdfBytes = await fetch("https://ableally.in/abletest/certss.pdf").then((res) =>
    res.arrayBuffer()
  );


  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Draw a string of text diagonally across the first page
  firstPage.drawText(name.name, {
    x: 230,
    y: 340,
    size: 38,
    // font: Arial,
    color: rgb(0.05, 0.07, .5),
  });
  firstPage.drawText(name.type, {
    x: 270,
    y: 180,
    size: 38,
    // font: Arial,
    color: rgb(0.05, 0.07, .5),
  });
  firstPage.drawText(name.email, {
    x: 350,
    y: 310,
    size: 12,
    // font: Arial,
    color: rgb(0.05, 0.07, .5),
  });
  firstPage.drawText(name.serial, {
    x: 100,
    y: 50,
    size: 10,
    // font: Arial,
    color: rgb(0.05, 0.07, .5),
  });
  firstPage.drawText(name.date, {
    x: 700,
    y: 50,
    size: 10,
    // font: Arial,
    color: rgb(0.05, 0.07, .5),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");


  var file = new File(
    [pdfBytes],
    "AbleTest-Certificate.pdf", {
      type: "application/pdf;charset=utf-8",
    }
  );
  saveAs(file);
};