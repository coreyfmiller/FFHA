import { streamText } from 'ai'
import { google } from '@ai-sdk/google'
import { SYSTEM_PROMPT } from '@/lib/chatbot-knowledge'

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = streamText({
      model: google('gemini-2.5-flash'),
      system: SYSTEM_PROMPT,
      messages,
      maxTokens: 500,
    })

    return result.toDataStreamResponse()
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
