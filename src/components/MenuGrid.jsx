import { Reveal } from "./Reveal";
import MenuSection from "./MenuSection";
import { DEFAULT_MENU_SECTIONS } from "../data/content";

export default function MenuGrid({  className = "" }) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container-custom">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Full Menu</h2>
          <p className="text-muted-foreground mb-12">All prices are inclusive of taxes</p>
        </Reveal>

        <div className="space-y-12">
          {DEFAULT_MENU_SECTIONS.map((section, sectionIdx) => (
            <Reveal key={section.id} delay={80 + sectionIdx * 40}>
              <MenuSection
                title={section.title}
                items={section.items}
                sectionIdx={sectionIdx}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}