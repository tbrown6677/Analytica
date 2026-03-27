import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(request) {
  try {
    const { question } = await request.json()

    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `You are a business intelligence agent for a small business owner. 
          Answer this question clearly and concisely: ${question}`
        }
      ]
    })

    return Response.json({ answer: message.content[0].text })
  } catch (error) {
    console.error('API Error:', error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}