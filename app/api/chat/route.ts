import { generateText } from 'ai'
import { google } from '@ai-sdk/google'
import { SYSTEM_PROMPT } from '@/lib/chatbot-knowledge'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = await generateText({
      model: google('gemini-2.5-flash'),
      system: SYSTEM_PROMPT,
      messages,
      maxTokens: 500,
    })

    // Return as a simple data stream format the widget can parse
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(`0:${JSON.stringify(result.text)}\n`))
        controller.close()
      },
    })

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
