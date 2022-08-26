import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

interface PreviewVideoProps {
  controls?: boolean
  type?: string
  src: string
  onLoadedMetaData?: (event: Event) => void
}

const PreviewVideo: React.FC<PreviewVideoProps> = ({
  src,
  type = 'mp4',
  controls = false,
  onLoadedMetaData = () => {},
}) => {
  const videoEl = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (src && videoEl && videoEl.current) {
      videoEl.current.load()
      videoEl.current.onloadedmetadata = (event) => {
        onLoadedMetaData(event)
      }
    }
  }, [src, onLoadedMetaData])

  return (
    <Video controls={controls} ref={videoEl}>
      <source type={`video/${type}`} src={src} />
    </Video>
  )
}

export default PreviewVideo

const Video = styled.video`
  width: 100%;
  height: 100%;
  margin: auto 0;
  background-color: #000;
  outline: none;
`
