export const pageStyle = `
@page {
  size: 100mm 75mm;
  margin: 5mm;
}

@media print {
  html , body {
    height: 100% !important;
    overflow: initial !important;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }

  html {
    min-height: 100vh;
  }

  body { 
    height: auto;
    position: relative;
    z-index: 9999;
  }

  footer {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
  }
}
`
