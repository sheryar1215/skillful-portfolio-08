
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { mood } = await req.json()
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY')

    if (!mood) {
      return new Response(
        JSON.stringify({ error: 'Mood is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a design assistant that converts mood/vibe descriptions into theme settings. 
            Respond with a JSON object containing the following properties:
            {
              "colors": {
                "primary": "hex color for primary elements",
                "background": "hex color for background",
                "foreground": "hex color for text",
                "secondary": "hex color for secondary elements",
                "muted": "hex color for muted elements",
                "accent": "hex color for accent elements"
              },
              "fonts": {
                "heading": "name of Google font for headings",
                "body": "name of Google font for body text"
              },
              "buttonStyle": "rounded | pill | square",
              "borderRadius": "sm | md | lg | xl",
              "description": "brief explanation of the chosen design elements"
            }`
          },
          {
            role: 'user',
            content: `Generate a theme based on this mood: ${mood}`
          }
        ],
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected API response format:', data);
      throw new Error('Unexpected response from OpenAI API');
    }
    
    let themeData;

    try {
      themeData = JSON.parse(data.choices[0].message.content);
    } catch (e) {
      // If parsing fails, try to extract JSON from the response
      const jsonMatch = data.choices[0].message.content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        themeData = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Failed to parse theme data');
      }
    }

    return new Response(
      JSON.stringify(themeData),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
