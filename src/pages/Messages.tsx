import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Search, MoreVertical, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";

const mockChats = [
  { id: "1", name: "Ahmed Hassan", lastMsg: "Is the apartment still available?", time: "2m ago", property: "Modern Minimalist Apartment", unread: 2 },
  { id: "2", name: "Sara Mohamed", lastMsg: "I'd like to schedule a visit", time: "1h ago", property: "Luxury Villa with Pool", unread: 0 },
  { id: "3", name: "Omar Ali", lastMsg: "Thank you for the info!", time: "3h ago", property: "Cozy Studio Apartment", unread: 0 },
];

const mockMessages = [
  { id: "1", sender: "them", text: "Hi, is the Modern Minimalist Apartment still available?", time: "10:30 AM" },
  { id: "2", sender: "me", text: "Yes, it's still available! Would you like to schedule a visit?", time: "10:32 AM" },
  { id: "3", sender: "them", text: "That would be great! When is a good time?", time: "10:35 AM" },
  { id: "4", sender: "me", text: "How about this Saturday at 2 PM?", time: "10:36 AM" },
  { id: "5", sender: "them", text: "Is the apartment still available?", time: "10:40 AM" },
];

export default function Messages() {
  const [activeChat, setActiveChat] = useState(mockChats[0].id);
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 h-screen flex">
        {/* Chat list */}
        <div className="w-full md:w-80 lg:w-96 border-r border-border flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="font-heading font-bold text-lg text-foreground mb-3">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {mockChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={`w-full p-4 text-left border-b border-border hover:bg-muted/50 transition-colors ${
                  activeChat === chat.id ? "bg-accent" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-primary">{chat.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-sm text-foreground truncate">{chat.name}</p>
                      <span className="text-xs text-muted-foreground">{chat.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{chat.lastMsg}</p>
                    <p className="text-xs text-primary truncate mt-0.5">{chat.property}</p>
                  </div>
                  {chat.unread > 0 && (
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center shrink-0">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="hidden md:flex flex-1 flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading font-bold text-primary">A</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">Ahmed Hassan</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Modern Minimalist Apartment
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon"><MoreVertical className="h-5 w-5" /></Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {mockMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${
                  msg.sender === "me"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-muted text-foreground rounded-bl-sm"
                }`}>
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === "me" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
              />
              <Button size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
