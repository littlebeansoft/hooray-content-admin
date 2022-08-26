export const pageStyle = `
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
  @page { 
    size : A4 portrait;
    margin: 5mm;
  }
`
