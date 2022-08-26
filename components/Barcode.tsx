import React from 'react'
import { useBarcode } from 'react-barcodes'

interface BarcodeProps {
  value: string
}

const Barcode: React.FC<BarcodeProps> = ({ value }) => {
  const { inputRef } = useBarcode({
    value,
    options: {
      background: '#fff',
      width: 1.5,
      height: 60,
      fontSize: 16,
    },
  })

  return <svg ref={inputRef} />
}

export default Barcode
