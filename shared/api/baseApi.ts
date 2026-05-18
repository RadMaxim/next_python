export type ImageResponse = {
  data: string
  mimeType?: string
}

export async function getImage(): Promise<ImageResponse> {
  const response = await fetch("http://127.0.0.1:8000/chart")
  

  if (!response.ok) {
    throw new Error("Failed to fetch image")
  }
  const data = await response.json()
  console.log(data)
  return data
}
