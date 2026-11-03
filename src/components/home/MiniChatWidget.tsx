import { useState } from "react";
import { Send } from "lucide-react"; // Pastikan lucide-react terinstal

interface MiniChatWidgetProps {
  isConnected: boolean;
  onExpandChat: () => void; // Fungsi untuk pindah ke halaman AI Chat penuh
}

export function MiniChatWidget({ isConnected, onExpandChat }: MiniChatWidgetProps) {
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Nanti di FASE 4 langkah berikutnya, ini akan mengirim pesan ke Rust/Python
    console.log("Mini Chat mengirim:", input);
    setInput("");
    
    // Untuk sekarang, langsung buka full chat
    onExpandChat();
  };

  return (
    <div className="mini-chat-container" style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
      {/* Area Pesan Terakhir (Placeholder) */}
      <div style={{ 
        flex: 1, 
        background: 'rgba(5, 7, 15, 0.5)', 
        borderRadius: '8px', 
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px dashed var(--color-line)'
      }}>
        <p style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: '11px', 
          color: 'var(--color-mute)', 
          textAlign: 'center',
          margin: 0 
        }}>
          {isConnected 
            ? "✨ Aya siap membantu. Ketik pertanyaan cepat di bawah..." 
            : "⚠️ Service mati. Nyalakan Python service untuk mengaktifkan chat."}
        </p>
      </div>

      {/* Input Box Compact */}
      <form onSubmit={handleSend} style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isConnected ? "Tanya Aya sesuatu..." : "Service offline..."}
          disabled={!isConnected}
          style={{
            flex: 1,
            background: 'rgba(5, 7, 15, 0.8)',
            border: '1px solid var(--color-line)',
            borderRadius: '8px',
            padding: '8px 12px',
            color: 'var(--color-text)',
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            outline: 'none'
          }}
        />
        <button 
          type="submit" 
          disabled={!isConnected || !input.trim()}
          style={{
            background: isConnected ? 'var(--color-neon)' : 'var(--color-line)',
            border: 'none',
            borderRadius: '8px',
            width: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: isConnected ? 'pointer' : 'not-allowed',
            color: 'var(--color-bg)'
          }}
        >
          <Send size={14} />
        </button>
      </form>
    </div>
  );
}