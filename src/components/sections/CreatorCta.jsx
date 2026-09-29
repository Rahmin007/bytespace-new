import ScaledStage from '../ui/ScaledStage';
import Shape from '../ui/Shape';
import Button from '../ui/Button';
import { ROUTES } from '../../utils/routes';

export default function CreatorCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-grid relative overflow-hidden">
      {/* Decorative shapes on a 1440 x 488 stage that sits behind the content */}
      <div className="pointer-events-none absolute inset-x-0 top-0" aria-hidden="true">
        <ScaledStage width={1440} height={488} fitWidth={1200} minScale={0.45}>
          <Shape name="spring" color="lime" left={-122} top={-162} size={387} />
          <Shape name="spring" left={179} top={5} size={176} flip />
          <Shape name="cone" left={-50} top={225} size={189} />
          <Shape name="torus" color="lime" left={16} top={298} size={344} />
          <Shape name="pyramid" color="lime" left={1078} top={0} size={189} />
          <Shape name="cylinder" left={1222} top={5} size={372} />
          <Shape name="springWide" color="lime" left={1107} top={289} size={332} />
        </ScaledStage>
      </div>

      <div className="container-page relative flex min-h-[488px] flex-col items-center justify-center py-20 text-center lg:pb-[84px] lg:pt-[80px]">
        <h2
          id="cta-title"
          className="max-w-[600px] font-display text-[32px] font-semibold leading-[1.2] text-white sm:text-[40px] lg:text-[44px]"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-8 max-w-[980px] text-base leading-[1.6] text-surface sm:text-lg lg:mt-[44px]">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button to={ROUTES.signUp} className="mt-10 lg:mt-[53px]">
          Join as Creator
        </Button>
      </div>
    </section>
  );
}
