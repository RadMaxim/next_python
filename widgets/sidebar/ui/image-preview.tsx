"use client"

import { useQuery } from "@tanstack/react-query"
import { Base64Image } from "./Base64Image"
import { getImage } from "@/shared/api/baseApi"


export function ImagePreview() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["image"],
    queryFn: getImage,
  })

  if (isLoading) return <div>Loading...</div>
  if (isError || !data) return <div>Error loading image</div>

  return (
    <Base64Image
      data={data.data}
      mimeType={data.mimeType}
      className="size-96 rounded-xl object-cover"
    />
  )
}