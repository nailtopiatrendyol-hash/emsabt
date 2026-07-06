"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { supportedBrands } from "@/lib/content";

const requestTypes = [
  "Cihaz Arızası Bildirimi",
  "Onarım Durumu Bilgi Talebi",
  "Yerinde Servis Talebi",
  "Satış / Fiyat Teklifi Talebi",
];

export function ContactForm() {
  const [brand, setBrand] = useState(supportedBrands[0]);
  const [requestType, setRequestType] = useState(requestTypes[0]);
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `*${requestType}*`,
      `Marka: ${brand}`,
      company && `Firma: ${company}`,
      phone && `Telefon: ${phone}`,
      model && `Ürün Model/Seri No: ${model}`,
      message && `Açıklama: ${message}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`${siteConfig.whatsappHref}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "w-full rounded-lg border border-[var(--color-hairline-2)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-red)]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--color-ink)]">
          Ürün Markası
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className={fieldClass}
          >
            {supportedBrands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--color-ink)]">
          Talep Tipi
          <select
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
            className={fieldClass}
          >
            {requestTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--color-ink)]">
          Firma
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={fieldClass}
            placeholder="Firma adınız"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--color-ink)]">
          Telefon
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldClass}
            placeholder="05xx xxx xx xx"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--color-ink)]">
        Ürün Model / Seri No
        <input
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className={fieldClass}
          placeholder="Örn. Lexmark MX611"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--color-ink)]">
        Açıklama
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className={fieldClass}
          placeholder="Arızayı veya talebinizi kısaca anlatın"
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-red)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-red-ink)]"
      >
        <Send className="h-4 w-4" />
        WhatsApp&apos;tan Gönder
      </button>
      <p className="text-xs text-[var(--color-mist-2)]">
        Gönder&apos;e bastığınızda WhatsApp üzerinden {siteConfig.whatsapp} numarasına
        hazır bir mesaj ile yönlendirilirsiniz.
      </p>
    </form>
  );
}
