import { useState, useCallback } from "react"

export function useClipboard(timeout = 2000) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = useCallback(async (e: React.MouseEvent, text: string, id: string) => {
    e.preventDefault()
    e.stopPropagation()
    
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), timeout)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }, [timeout])

  return { copiedId, copyToClipboard }
}
