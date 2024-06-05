const { OpenAI } = require('openai')
require('dotenv').config()

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const generateText = async (req, res) => {
  try {
    const { prompt } = req.body

    const desc = await openai.chat.completions.create({
      model: 'gpt-4o', 
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 100
    })

    res.status(200).json({
      description: desc.choices[0].message.content,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      msg: 'Something went wrong while processing your request',
    })
  }
  
}

const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body

    const image = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024'
    });
  
    res.status(200).json({
      imageUrl: image.data[0].url,
    })    
  } catch (error) {
    console.error(error)
    res.status(500).json({
      msg: 'Something went wrong while processing your request',
    })
  }
}

module.exports = { generateText, generateImage }
