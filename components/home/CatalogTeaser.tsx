import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { catalogIconMap } from "@/components/ui/icon-map";
import { catalogCategories } from "@/lib/content";

export function CatalogTeaser() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, var(--color-red-bright) 0%, var(--color-red) 55%, var(--color-red-deep) 100%)",
      }}
    >
      <NetworkBackground variant="black-on-red" />

      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Ürün Kataloğu"
            title="Orijinal Lexmark yedek parça ve yazıcı kataloğu"
            description="Yedek parçadan bakım kitine, yeni cihaz satışından onarıma kadar tüm ürün ve hizmet kategorilerimiz."
            dark
          />
          <Button href="/katalog" variant="outline-dark" icon>
            Kataloğu Görüntüle
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {catalogCategories.map((category) => {
            const Icon = catalogIconMap[category.icon ?? "archive"];
            return (
              <a
                key={category.slug}
                href={`/katalog#${category.slug}`}
                className="group flex flex-col rounded-[var(--radius-card)] border border-white/10 bg-white p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.6)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-red)] transition-colors group-hover:bg-[var(--color-ink-panel)] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[15px] font-bold leading-snug text-[var(--color-ink)]">
                  {category.title}
                </h3>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
