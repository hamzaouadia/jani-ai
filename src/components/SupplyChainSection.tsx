import { Workflow, Wrench, Database, Github } from "lucide-react";
import NeumorphicEffect from "./NeumorphicEffect";

export default function SupplyChainSection({ innerRef }: { innerRef?: React.RefObject<HTMLDivElement | null> }) {
  const features = [
    {
      title: "Tailored to your workflow",
      desc:
        "We have designed Jani to fit perfectly with your workflow so you can easily integrate it within your organization.",
      Icon: Workflow,
    },
    {
      title: "Custom Made",
      desc: "Request custom features that are unique to your business and workflow.",
      Icon: Wrench,
    },
    {
      title: "Own Your Data",
      desc:
        "With Jani you can choose to self‑host your data, as the platform is open source.",
      Icon: Database,
    },
    {
      title: "Open Sourced",
      desc:
        "Jani AI is open source, allowing anyone to contribute to the software and also self‑host.",
      Icon: Github,
    },
  ];

  return (
        <section ref={innerRef} className="snap-start relative flex flex-col items-center justify-center p-4 lg:h-screen h-full text-[#effdf1] bg-[#1b4332]">
            <div className='w-full h-full flex flex-col justify-end p-2 '>
                <div className='w-full h-60 flex flex-col justify-center items-center text-center'>
                    <p className='lg:text-6xl text-4xl font-bold px-4 pt-8'>Giving observability from farm to fork.</p>
                    <p className="mt-6 text-base lg:text-xl mx-auto max-w-3xl">
                        Map out your supply chain and see where you can optimize, provide your clients with transparency and traceability of your resources.
                    </p>
                </div>
                <div className='w-full lg:h-160 flex lg:flex-row flex-col justify-between'>
                    <div className='lg:w-160 h-full p-5'>
                        {/* Left: Illustration/Map placeholder (swap with your component/image) */}
                        <NeumorphicEffect className="relative rounded-2xl lg:p-6 p-4 flex items-center justify-center min-h-[320px] h-full">
                            <div className="text-center">
                                <div className="text-sm uppercase tracking-wide font-semibold">Supply Chain Map</div>
                                    <p className="mt-2">
                                        Drop in your map, flow diagram, or live metrics component here to visualize every step from farm to fork.
                                    </p>
                                <div className="mt-6 lg:min-h-40 lg:h-80 h-40 rounded-xl border border-dashed border-[#d8f3dc]">
                                    <div className="flex flex-col items-center justify-center h-full">
                                        {/* <span className="text-2xl">[Map/Diagram Placeholder]</span> */}
                                        <label htmlFor="file" className="h-full w-full cursor-pointer lg:text-2xl text-center flex flex-col items-center justify-center">
                                            [Map/Diagram Placeholder]
                                        </label>
                                        <input type="file" id="file" className="hidden" />
                                    </div>
                                </div>
                            </div>
                        </NeumorphicEffect>
                    </div>
                    <div className='lg:w-160 h-full flex flex-col justify-between space-y-6 p-5'>
                        {features.map(({ title, desc, Icon }) => (
                            <NeumorphicEffect
                                key={title}
                                className="rounded-2xl flex items-center bg-[#d8f3dc]/15 shadow-sm p-5"
                            >
                                <div className="flex items-center justify-center gap-3 ">
                                    <div className="rounded-xl border border-[#b7e4c7] p-2">
                                        <Icon className="h-6 w-6 text-[#b7e4c7]" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{title}</h3>
                                        <p className="mt-2 text-sm">{desc}</p>
                                    </div>
                                </div>
                            </NeumorphicEffect>
                        ))}
                    </div>
                </div>
            </div>
        </section>
  );
}
