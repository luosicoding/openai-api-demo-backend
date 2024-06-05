require('dotenv').config()
const { OpenAI } = require('openai')

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const generateText = async (prompt) => {
  const desc = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{
      role: 'user',
      content: prompt
    }],
    max_tokens: 100
  }) 
  console.log(desc.choices[0].message.content)
}

const generateImage = async (prompt) => {
  const imageInfo = await openai.images.generate({
    prompt,
    n: 1,
    size: '512x512'
  })
  console.log(imageInfo.data[0].url)
}

// generateText('推荐一首李白的诗, 50字以内')
// generateImage('大熊猫玩水的图片')
