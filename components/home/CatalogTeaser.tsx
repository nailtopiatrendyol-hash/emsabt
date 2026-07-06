import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { catalogIconMap } from "@/components/ui/icon-map";
import { catalogCategories } from "@/lib/content";

export function CatalogTeaser() {
  return (
    <section className="bg-[var(--color-surface)] py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Ürün Kataloğu"
            title="Orijinal Lexmark yedek parça ve yazıcı kataloğu"
            description="Yedek parçadan bakım kitine, yeni cihaz satışından onarıma kadar tüm ürün ve hizmet kategorilerimiz."
          />
          <Button href="/katalog" variant="outline" icon>
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
                className="group flex flex-col rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--color-red)]/40 hover:shadow-[0_16px_40px_-24px_rgba(210,20,4,0.35)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-red)] group-hover:bg-[var(--color-red)] group-hover:text-white transition-colors">
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
