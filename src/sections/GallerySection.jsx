import Reveal from '../components/common/Reveal.jsx';

const trustPoints = [
  {
    number: '01',
    title: 'Hygiene First',
    description:
      'We focus on clean and careful food preparation so every meal is prepared with attention to hygiene.',
  },
  {
    number: '02',
    title: 'Quality Ingredients',
    description:
      'Ingredients are handled with care and prepared thoughtfully to preserve the taste and quality of every dish.',
  },
  {
    number: '03',
    title: 'Careful Preparation',
    description:
      'From preparation to cooking, every dish receives attention to detail for a consistent and satisfying meal.',
  },
];

export default function GallerySection() {
  return (
    <section
      className="w-full py-20 lg:py-32 bg-surface"
      id="why-kozhihood"
    >
      <div className="max-w-7xl mx-auto px-gutter">

        {/* Section Heading */}
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary mb-space-xs block">
              WHY KOZHIHOOD
            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-space-lg leading-tight">
              MADE WITH CARE.
              <br />
              <span className="text-primary-container">
                SERVED WITH CONFIDENCE.
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-on-surface-variant font-body-md text-body-md leading-relaxed">
              Good food starts with the way it is prepared. At Kozhihood,
              we focus on careful food handling, quality ingredients and
              thoughtful preparation so every meal feels worth coming back for.
            </p>
          </div>
        </Reveal>

        {/* Trust Content + Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center mt-space-xl">

          {/* Trust Points */}
          <div className="lg:col-span-5">

            <div className="space-y-space-sm">
              {trustPoints.map((point, index) => (
                <Reveal key={point.number} delay={index * 100}>
                  <div className="flex gap-space-md border-b border-outline-variant py-space-md first:border-t">

                    <span className="font-label-sm text-label-sm font-bold text-primary pt-1">
                      {point.number}
                    </span>

                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                        {point.title}
                      </h3>

                      <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed mt-space-xs">
                        {point.description}
                      </p>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>

            {/* Closing Statement */}
            <Reveal delay={300}>
              <p className="font-headline-sm text-headline-sm text-secondary font-bold pt-space-md">
                Great food is not only about flavour.It is about the care behind every plate.
              </p>
            </Reveal>

          </div>

          {/* Three Image Layout */}
          <Reveal
            delay={150}
            className="lg:col-span-7 grid grid-cols-2 gap-space-md relative"
          >

            {/* Large Image */}
            <div className="row-span-2 relative rounded-lg overflow-hidden h-[430px] bg-surface-container shadow-xl">
              <img
                className="w-full h-full object-cover"
                src="/about/preparation.jpg"
                alt="Kozhihood food preparation"
                loading="lazy"
              />
            </div>

            {/* Top Right Image */}
            <div className="relative rounded-lg overflow-hidden h-52 bg-surface-container shadow-xl">
              <img
                className="w-full h-full object-cover"
                src="/about/hygiene.jpg"
                alt="Kozhihood ingredients and preparation"
                loading="lazy"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="relative rounded-lg overflow-hidden h-52 bg-surface-container shadow-xl">
              <img
                className="w-full h-full object-cover"
                src="/about/ingredients.jpg"
                alt="Kozhihood cooking preparation"
                loading="lazy"
              />
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
}