import {
  Archive,
  FolderKanban,
  MapPin,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { CatalogCategory, Service } from "@/lib/content";

export const serviceIconMap: Record<Service["icon"], LucideIcon> = {
  wrench: Wrench,
  shopping: ShoppingBag,
  "map-pin": MapPin,
  users: Users,
  folder: FolderKanban,
  scan: ScanLine,
  database: Archive,
  archive: Archive,
  "shield-check": ShieldCheck,
};

export const catalogIconMap: Record<NonNullable<CatalogCategory["icon"]>, LucideIcon> = {
  archive: Archive,
  wrench: Wrench,
  shopping: ShoppingBag,
  "shield-check": ShieldCheck,
};
