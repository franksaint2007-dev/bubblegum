export async function askAI(prompt:string){

  const response = await fetch(
    "https://api.anthropic.com/v1/messages",
    {
      method:"POST",
      headers:{
        "content-type":"application/json",
        "x-api-key":process.env.ANTHROPIC_API_KEY!
      },
      body:JSON.stringify({
        model:"claude-3-5-sonnet",
        max_tokens:2000,
        messages:[
          {
            role:"user",
            content:prompt
          }
        ]
      })
    }
  );

  return response.json();
}