export function generateAppBlueprint(request:string){

return {
  name:"Bubblegum App",
  description:request,
  stack:[
    "Next.js",
    "React",
    "Tailwind",
    "AI Agents"
  ],
  files:[
    "app/page.tsx",
    "components/UI.tsx",
    "api/routes.ts"
  ]
};

}