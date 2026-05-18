type Base64ImageProps = {
  data: string
  mimeType?: string
  alt?: string
  className?: string
}

export function Base64Image({
  data,
  mimeType = "image/png",
  alt = "Image",
  className,
}: Base64ImageProps) {
  const src = data.startsWith("data:")
    ? data
    : `data:${mimeType};base64,${data}`

  return <img src={src} alt={alt} className={className} />
}