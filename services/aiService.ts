import OpenAI from "openai"

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function askAI(question: string, context: string) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a helpful customer support assistant."
      },
      {
        role: "user",
        content: `Context: ${context}\n\nQuestion: ${question}`
      }
    ]
  })

  return response.choices[0].message.content
}