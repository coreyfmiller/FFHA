import { streamText } from 'ai'
import { google } from '@ai-sdk/google'
import { SYSTEM_PROMPT } from '@/lib/chatbot-knowledge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: google('gemini-2.5-flash-lite'),
    system: SYSTEM_PROMPT,
    messages,
    maxTokens: 500,
  })

  return result.toDataStreamResponse()
}
