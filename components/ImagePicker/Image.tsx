import React, { FC } from 'react'

interface ImageProps {
  src: string
  isSelected: boolean
  onClick?: () => void
}

const Image: FC<ImageProps> = ({ isSelected, src, onClick }) => {
  return (
    <div className={`responsive${isSelected ? ' selected' : ''}`}>
      <img
        src={src}
        onClick={onClick}
        className={`thumbnail${isSelected ? ' selected' : ''}`}
        style={{ width: '100%', objectFit: 'cover' }}
      />
      <div className="checked">
        <div className="icon" />
      </div>
    </div>
  )
}

export default Image
