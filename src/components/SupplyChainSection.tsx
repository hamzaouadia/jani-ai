import { Workflow, Wrench, Database, Github } from "lucide-react";

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
        <section ref={innerRef} className="relative flex flex-col items-center justify-center p-4 lg:h-screen h-full bg-white">
            <div className='w-full h-full flex flex-col p-2 '>
                <div className='w-full h-60 flex flex-col justify-center items-center text-center text-black'>
                    <p className='lg:text-6xl text-4xl font-bold px-4 pt-8'>Giving observability from farm to fork.</p>
                    <p className="mt-6 text-base lg:text-xl text-gray-700 mx-auto max-w-3xl">
                        Map out your supply chain and see where you can optimize, provide your clients with transparency and traceability of your resources.
                    </p>
                </div>
                <div className='w-full lg:h-160 flex lg:flex-row flex-col justify-between'>
                    <div className='lg:w-160 h-full p-5'>
                        {/* Left: Illustration/Map placeholder (swap with your component/image) */}
                        <div className="relative rounded-2xl bg-white/60 backdrop-blur border border-green-500 shadow-sm lg:p-6 p-4 flex items-center justify-center min-h-[320px] h-full">
                            <div className="text-center">
                                <div className="text-sm uppercase tracking-wide text-green-700 font-semibold">Supply Chain Map</div>
                                    <p className="mt-2 text-gray-600">
                                        Drop in your map, flow diagram, or live metrics component here to visualize every step from farm to fork.
                                    </p>
                                <div className="mt-6 lg:min-h-40 lg:h-80 h-40 rounded-xl border border-dashed border-green-800">
                                    <div className="flex flex-col items-center justify-center h-full text-green-800">
                                        {/* <span className="text-2xl">[Map/Diagram Placeholder]</span> */}
                                        <label htmlFor="file" className="h-full w-full cursor-pointer lg:text-2xl text-center flex flex-col items-center justify-center">
                                            [Map/Diagram Placeholder]
                                        </label>
                                        <input type="file" id="file" className="hidden" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-160 h-full flex flex-col justify-between space-y-6 p-5'>
                        {features.map(({ title, desc, Icon }) => (
                            <div
                                key={title}
                                className="rounded-2xl flex items-center bg-white border border-green-500 shadow-sm p-5"
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <div className="rounded-xl border border-green-800 p-2">
                                        <Icon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                                        <p className="mt-2 text-sm text-gray-700">{desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
  );
}
