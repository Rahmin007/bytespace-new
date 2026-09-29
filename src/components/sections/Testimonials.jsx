import Glow from '../ui/Glow';
import { TESTIMONIALS } from '../../data/content';

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-surface-alt pb-20 pt-20 lg:pb-[83px] lg:pt-[111px]"
    >
      <Glow color="lime" size={752} left="calc(50% - 365px)" top={-178} />
      <Glow color="blue" size={1217} left={-482} top={109} />
      <Glow color="lime" size={1217} right={-579} top={-281} />

      <div className="container-page relative">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_567px] lg:gap-10">
          <h2
            id="testimonials-title"
            className="max-w-[480px] font-display text-[32px] font-semibold leading-[1.2] text-black sm:text-[40px] lg:text-[44px]"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-base leading-[1.6] text-ink-soft sm:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:mt-[90px] lg:grid-cols-3 lg:gap-[41px]">
          {TESTIMONIALS.map((testimonial) => (
            <li key={testimonial.name}>
              <figure className="rounded-card bg-white p-6 pb-[30px]">
                <img
                  src={testimonial.avatar}
                  alt=""
                  loading="lazy"
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <figcaption className="mt-[23px]">
                  <p className="font-display text-xl font-semibold text-black">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-lg text-brand">{testimonial.role}</p>
                </figcaption>
                <blockquote className="mt-6 text-lg leading-[1.6] text-ink-soft">
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
