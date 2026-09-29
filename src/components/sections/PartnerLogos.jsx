import { PARTNER_LOGOS } from '../../data/content';

export default function PartnerLogos() {
  return (
    <section aria-label="Trusted by" className="bg-surface">
      <ul className="container-page flex min-h-[202px] flex-wrap items-center justify-center gap-x-12 gap-y-8 py-12 lg:justify-between lg:px-[33px] xl:px-[33px]">
        {PARTNER_LOGOS.map((logo) => (
          <li key={logo.src}>
            <img
              src={logo.src}
              alt={logo.alt}
              width={167}
              height={40}
              className="h-8 w-auto lg:h-10"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
