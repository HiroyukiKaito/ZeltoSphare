import "./Badge.css";

export type BadgeVariant = "neutral" | "ok" | "error" | "demo" | "info"; 

interface BadgeProps {
  variant: BadgeVariant;
  children: string;
}

export function Badge({ variant, children }: BadgeProps) {


const variantClass = {
    neutral: "badge--neutral",
    ok: "badge--ok",       // Untuk "Connected" (Hijau)
    error: "badge--error", // Untuk "Not Connected" (Merah)
    demo: "badge--demo",   // Untuk data dummy (Kuning/Amber)
    info: "badge--info",   // Untuk info umum (Biru/Cyan)
  }[variant];

  return <span className={`badge ${variantClass}`}>{children}</span>;
}