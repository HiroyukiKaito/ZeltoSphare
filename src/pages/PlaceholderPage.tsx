import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import "./PlaceholderPage.css";

interface PlaceholderPageProps {
  title: string;
  targetPhase: string;
}

export function PlaceholderPage({ title, targetPhase }: PlaceholderPageProps) {
  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">{title}</h1>
        <Badge variant="neutral">Placeholder</Badge>
      </header>
      <Card
        title="MODUL BELUM TERSEDIA"
        badge={{ variant: "demo", label: `Fase ${targetPhase}` }}
      >
        <p className="page-empty-text">
          Halaman ini akan dibangun pada FASE {targetPhase}. Tidak ada fungsi yang
          disembunyikan — modulnya memang belum ada, sesuai roadmap Master Plan.
        </p>
      </Card>
    </div>
  );
}