import {NextResponse} from "next/server";
import {askAI} from "@/lib/ai";
import {generateAppBlueprint} from "@/lib/builder";


export async function POST(req:Request){

const body = await req.json();

const idea = body.prompt;

const blueprint = generateAppBlueprint(idea);

const ai = await askAI(
`You are Bubblegum AI.
Act like Claude + Lovable.
Create production ready software from this idea:

${idea}`
);


return NextResponse.json({
 blueprint,
 ai
});

}