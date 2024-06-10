import { useEffect, useState } from "react";
import { useEth } from "../contexts/EthContext";

const Stats = () => {
  const [amount, setAmount] = useState(0);
  const { state } = useEth();

  function getAmount() {
    return parseInt(
      state?.web3?.utils?.fromWei(amount ? amount.toString() : "0", "ether") ??
        0
    );
  }

  const getTotalDonations = async () => {
    const total = await state?.contract?.methods.totalDonations().call();
    setAmount(total);
  };

  useEffect(() => {
    getTotalDonations();
    state?.contract?.events["DonationReceived"](
      {},
      (error: any, event: any) => {
        if (error) {
          console.error("Error:", error);
          return;
        }

        console.log("New event received:");
        console.log(event.returnValues);
        getTotalDonations();
      }
    )
      .on("connected", () => {
        console.log("Connected to the blockchain");
      })
      .on("changed", (event: any) => {
        console.log("Event changed:", event.returnValues);
      })
      .on("error", (error: any) => {
        console.error("Event error:", error);
      });
  }, [state]);

  if (!state?.contract || !state?.artifact) {
    return <>Loading...</>;
  }

  return (
    <div className="w-full absolute z-10 bg-primary h-32 bottom-0 left-0">
      <div className="relative w-fit  -translate-y-1/2 -translate-x-1/2 left-1/2 bg-primary-red rounded-3xl flex items-center">
        <div className="p-5 flex items-center gap-5">
          <img
            src={"/donations.png"}
            alt={"People who donated"}
            className="relative h-20 w-20 object-contain"
          />
          <div className="relative flex flex-col">
            <span className="text-primary">{"People who donated"}</span>
            <span className="font-bold text-3xl font-sans">{100}</span>
          </div>
        </div>
        <div className="p-5 flex items-center gap-5">
          <img
            src={"/sponsored.png"}
            alt={"Kids who got sponsored"}
            className="relative h-20 w-20 object-contain"
          />
          <div className="relative flex flex-col">
            <span className="text-primary">{"Kids who got sponsored"}</span>
            <span className="font-bold text-3xl font-sans">
              {getAmount() / 0.001}
            </span>
          </div>
        </div>
        <div className="p-5 flex items-center gap-5">
          <img
            src={"/dollar.png"}
            alt={"Money raised so far"}
            className="relative h-20 w-20 object-contain"
          />
          <div className="relative flex flex-col">
            <span className="text-primary">{"Money raised so far"}</span>
            <span className="font-bold text-3xl font-sans">
              {getAmount()} ETH
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
