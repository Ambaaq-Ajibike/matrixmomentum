import { Header } from "@/components/Header";
import { PlanCard } from "@/components/PlanCard";
import { RoundedButton } from "@/components/RoundedButton";

export default function Home() {
  const imageUrl = "/images/banner-bg.jpg";
  const plans = [
    {
      planType: "Starters Plan",
      percentage: 5,
      hours : 20
    },
    {
      planType: "BEGINNERS PRO PLAN",
      percentage: 8,
      hours : 20
    },
    {
      planType: "PREMIUM PLAN",
      percentage: 12,
      hours : 36
    },
    {
      planType: "PROMO PLAN",
      percentage: 10,
      hours : 7
    },
    {
      planType: "PROFESSIONAL PLAN",
      percentage: 40,
      hours : 76
    },
  ] 
  return (
    <>
      <Header/>
      <div
      className="bg-cover bg-center bg-no-repeat h-lvh w-full text-center md:flex"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="py-14 px-10 md:text-left md:p-40 md:px-64 md:pr-[40pc]">
      <h4 className="text-white text-lg">MaxMomentum</h4>
      <h1 className="text-white md:text-6xl text-5xl uppercase font-bold leading-[4pc]">A way to efficiently invest money</h1>
      <p className="text-white text-xl my-10">What if there should add Edge on your Portfolio!</p>
      <div className="flex md:justify-start gap-5 justify-between items-center">
        <RoundedButton bgColor="bg-white" color="text-primary" text="Create An Account"/>
        <RoundedButton bgColor="bg-secondary" color="text-primary" text="Login"/>
      </div>
      </div>
      
    </div>
    <div className="flex justify-center items-center flex-col md:grid grid-cols-3 md:place-content-center">
      {plans.map((plan, i) => <PlanCard hours={plan.hours} percentage={plan.percentage} planType={plan.planType} key={i} />)}
      
    </div>




    </>

  );
}
