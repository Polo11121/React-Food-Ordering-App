export const HomePage = () => (
  <div className="flex flex-col gap-12">
    <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
      <h1 className="text-5xl font-bold tracking-tight text-orange-600">
        Tuck into a takeaway today
      </h1>
      <div className="text-xl">Food is just a click away!</div>
    </div>
    <div className="grid md:grid-cols-2 gap-5">
      <img src="/landing.png" alt="phones image" />
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <span className="font-bold text-3-xl tracking-tighter">
          Order takeaway even faster!
        </span>
        <span>
          Download the MernEats App for faster ordering and personalised
          recommendations
        </span>
        <img src="/appDownload.png" alt="mobile applications image" />
      </div>
    </div>
  </div>
);
