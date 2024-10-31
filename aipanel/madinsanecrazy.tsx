"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Message = {
  role: "user" | "assistant"
  content: string
}

type AIModel = {
  id: string
  name: string
  type: "chatgpt" | "self-hosted"
}

const aiModels: AIModel[] = [
  { id: "gpt-3.5-turbo", name: "ChatGPT 3.5", type: "chatgpt" },
  { id: "gpt-4", name: "ChatGPT 4", type: "chatgpt" },
  { id: "self-hosted-1", name: "Self-hosted Model 1", type: "self-hosted" },
  { id: "self-hosted-2", name: "Self-hosted Model 2", type: "self-hosted" },
]

export default function AIAssistantPanel() {
  const [selectedModel, setSelectedModel] = useState<AIModel>(aiModels[0])
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { role: "user", content: input }]
      setMessages(newMessages)
      setInput("")
      // Here you would typically call your AI API with the selectedModel and input
      // For demonstration, we'll just add a mock response
      setTimeout(() => {
        setMessages([...newMessages, { role: "assistant", content: `Response from ${selectedModel.name}` }])
      }, 1000)
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          AI Assistant
          <Select onValueChange={(value) => setSelectedModel(aiModels.find(model => model.id === value) || aiModels[0])}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select AI Model" />
            </SelectTrigger>
            <SelectContent>
              {aiModels.map((model) => (
                <SelectItem key={model.id} value={model.id}>
                  {model.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.role === "assistant" ? "text-blue-600" : "text-green-600"}`}>
              <strong>{message.role === "assistant" ? "AI: " : "You: "}</strong>
              {message.content}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex w-full gap-2">
          <Input
            placeholder="Ask about school work or coding..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}