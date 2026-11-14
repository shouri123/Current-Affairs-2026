import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building2,
  CalendarDays,
  Globe2,
  Handshake,
  Landmark,
  Medal,
  Plane,
  ShieldCheck,
  Trophy,
  UserRound,
  Layers,
} from "lucide-react";

/** Consistent line-icon vocabulary for subject navigation and section headers. */
export const sectionIconMap: Record<string, LucideIcon> = {
  banking: Landmark,
  mous: Handshake,
  days: CalendarDays,
  appointments: UserRound,
  national: Building2,
  international: Globe2,
  defence: ShieldCheck,
  awards: Trophy,
  books: BookOpen,
  sports: Medal,
  travel: Plane,
};

export const defaultSectionIcon: LucideIcon = Layers;

export const sectionAccentClassMap: Record<string, string> = {
  banking: "bg-popYellow",
  mous: "bg-popPink",
  days: "bg-popPurple",
  appointments: "bg-popCyan",
  national: "bg-popMint",
  international: "bg-popCyan",
  defence: "bg-popCoral",
  awards: "bg-popPurple",
  books: "bg-popYellow",
  sports: "bg-popMint",
  travel: "bg-popOrange",
};
