import "./Badge.css";

export type BadgeVariant = "demo" | "ok" | "error" | "neutral";

interface BadgeProps {
  variant: BadgeVariant;
  children: string;
}

const VARIANT_CLASS: Record<BadgeVariant, string> = {
  demo: "badge-demo",
  ok: "badge-ok",
  error: "badge-error",
  neutral: "badge-neutral",
};

export function Badge({ variant, children }: BadgeProps) {
  return <span className={`badge ${VARIANT_CLASS[variant]}`}>{children}</span>;
}