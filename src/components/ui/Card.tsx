import type { ReactNode } from "react";
import { Badge, type BadgeVariant } from "./Badge";
import "./Card.css";

interface CardProps {
  title: string;
  subtitle?: string;
  badge?: { variant: BadgeVariant; label: string };
  children?: ReactNode;
  className?: string;
}

export function Card({ title, subtitle, badge, children, className }: CardProps) {
  return (
    <section className={`card ${className ?? ""}`}>
      <header className="card-header">
        <div className="card-heading">
          <h2 className="card-title">{title}</h2>
          {subtitle ? <p className="card-subtitle">{subtitle}</p> : null}
        </div>
        {badge ? <Badge variant={badge.variant}>{badge.label}</Badge> : null}
      </header> 
      <div className="card-body">{children}</div>
    </section>
  );
}

