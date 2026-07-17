"use client";

import {useState} from "react";


export default function ChatBox(){

const [prompt,setPrompt]=useState("");
const [result,setResult]=useState("");


async function build(){

const res = await fetch("/api/generate",{
method:"POST",
headers:{
"content-type":"application/json"
},
body:JSON.stringify({
prompt
})
});

const data=await res.json();

setResult(
JSON.stringify(data,null,2)
);

}


return (
<div>

<h1>Bubblegum AI Builder</h1>

<textarea
value={prompt}
onChange={e=>setPrompt(e.target.value)}
placeholder="Describe the app you want to build..."
/>

<button onClick={build}>
Build App
</button>

<pre>
{result}
</pre>

</div>
)

}