declare module 'tailwind.macro' {
  export default function tw(string: TemplateStringsArray): Record<string, string>
}

declare module '*.svg' {
  const content: string
  export default content
}
