import Glow from '../ui/Glow';
import GrowthSection from './GrowthSection';
import CreatorSection from './CreatorSection';

/** Shared soft-glow background behind the "Growth" and "Create & Manage" sections. */
export default function GrowthAndCreators() {
  return (
    <div className="relative overflow-hidden bg-surface-alt pb-10 pt-20 lg:pb-[33px] lg:pt-[119px]">
      <Glow color="lime" size={1217} left={-192} top={-506} />
      <Glow color="blue" size={1217} right={-548} top={-498} />
      <Glow color="blue" size={1217} left={-548} top={143} />
      <Glow color="lime" size={752} left={-327} top={906} />
      <Glow color="blue" size={1217} right={-459} top={748} />
      <div className="relative space-y-16 lg:space-y-[64px]">
        <GrowthSection />
        <CreatorSection />
      </div>
    </div>
  );
}
