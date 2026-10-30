"use client"

import React, { useEffect, useState } from "react"
import { Command } from "cmdk"
import { useRouter } from "next/navigation"
import { 
  Github, 
  Instagram, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  User, 
  Code, 
  Briefcase, 
  Home,
  RotateCcw
} from "lucide-react"
import { triggerThemeTransition } from "./ThemeTransition"

export const openCommandPalette = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-command-palette"))
  }
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState("dark")
  const router = useRouter()

  // Toggle open state on Ctrl+K and custom event
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    const handleCustomOpen = () => setOpen(true)

    document.addEventListener("keydown", down)
    window.addEventListener("open-command-palette", handleCustomOpen)
    return () => {
      document.removeEventListener("keydown", down)
      window.removeEventListener("open-command-palette", handleCustomOpen)
    }
  }, [])

  // Action Handlers
  const handleNav = (href) => {
    setOpen(false)
    if (href.startsWith("http") || href.startsWith("mailto")) {
      window.open(href, "_blank")
    } else {
      router.push(href)
    }
  }

  const toggleTheme = () => {
    setOpen(false)
    triggerThemeTransition()
  }

  if (!open) return null

  return (
    <Command.Dialog 
      open={open} 
      onOpenChange={setOpen} 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/5 backdrop-blur-sm"
    >
      <div className="w-full max-w-[640px] bg-card border border-border shadow-2xl rounded-xl overflow-hidden font-mono translate-y-[-10%] transition-transform duration-300">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">[ SYSTEM_CMD ]</div>
          <Command.Input 
            autoFocus 
            placeholder="Type a command or search..." 
            className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
          <div className="px-1.5 py-0.5 border border-border rounded text-[10px] text-muted-foreground">ESC</div>
        </div>

        <Command.List className="p-2 max-h-[400px] overflow-y-auto custom-scrollbar">
          <Command.Empty className="px-4 py-8 text-center text-xs text-muted-foreground uppercase tracking-widest">
            No results found_
          </Command.Empty>
 
          <Command.Group heading="Navigation" className="px-2 py-2 text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1">
            <Item onSelect={() => handleNav("/")} icon={<Home size={14}/>}>Home / Overview</Item>
            <Item onSelect={() => handleNav("/projects")} icon={<Code size={14}/>}>Projects / Selected_Work</Item>
            <Item onSelect={() => handleNav("/#experience")} icon={<Briefcase size={14}/>}>Career / Archive</Item>
            <Item onSelect={() => handleNav("/cv.pdf")} icon={<User size={14}/>}>Read_Resume</Item>
          </Command.Group>

          <Command.Group heading="Preferences" className="px-2 py-2 text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-4 mb-1">
            <Item onSelect={toggleTheme} icon={theme === "dark" ? <Sun size={14}/> : <Moon size={14}/>}>
              Toggle Theme (Light / Dark)
            </Item>
            <Item 
              onSelect={() => {
                setOpen(false)
                window.dispatchEvent(new CustomEvent("replay-initial-loader"))
              }} 
              icon={<RotateCcw size={14}/>}
            >
              Replay Intro Animation
            </Item>
          </Command.Group>

          <Command.Group heading="Socials" className="px-2 py-2 text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-4 mb-1">
            <Item onSelect={() => handleNav("https://github.com/sssanthoshsivan")} icon={<Github size={14}/>}>GitHub_Profile</Item>
            <Item onSelect={() => handleNav("https://www.linkedin.com/in/sssanthoshsivan/")} icon={<Linkedin size={14}/>}>Connect_on_LinkedIn</Item>
            <Item onSelect={() => handleNav("https://instagram.com/sssanthosh_sivan/")} icon={<Instagram size={14}/>}>Visuals_Instagram</Item>
            <Item onSelect={() => handleNav("mailto:santhoshkan205@gmail.com")} icon={<Mail size={14}/>}>Send_Email_Direct</Item>
          </Command.Group>
        </Command.List>

        <div className="px-4 py-3 border-t border-border bg-muted/10 flex justify-between items-center text-[9px] font-mono text-muted-foreground uppercase opacity-50">
          <span>UP/DOWN TO NAVIGATE</span>
          <span>ENTER TO SELECT</span>
        </div>
      </div>
    </Command.Dialog>
  )
}

function Item({ children, icon, onSelect }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-xs text-foreground data-[selected=true]:bg-foreground data-[selected=true]:text-background transition-all group"
    >
      <span className="opacity-70 group-data-[selected=true]:opacity-100">{icon}</span>
      <span className="tracking-tight">{children}</span>
    </Command.Item>
  )
}
