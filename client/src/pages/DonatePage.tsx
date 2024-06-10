import { FC, useState } from "react";
import Layout from "../components/Layout";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Stat from "../components/Stat";
import { useEth } from "../contexts/EthContext";

const DonatePage: FC = () => {
  const { state } = useEth();

  const [amount, setAmount] = useState("1");

  const donate = async (e: any) => {
    e.preventDefault();
    await state?.contract?.methods.donate().send({
      from: state?.accounts[0],
      value: state?.web3.utils.toWei(amount, "ether"),
    });
  };

  if (!state?.contract || !state?.artifact) {
    return <>Loading...</>;
  }

  return (
    <Layout>
      <MaxWidthWrapper className="w-full h-full flex gap-10">
        <h1 className="text-3xl">
          Each ETH <br />
          <span className="font-bold">Saves a life</span>
        </h1>
        <form
          onSubmit={donate}
          className="bg-primary rounded-3xl w-[35rem] p-10"
        >
          <div className="w-full bg-primary-red rounded-3xl p-7">
            <label htmlFor="amount" className="text-lg mb-2">
              Amount (ETH)
            </label>
            <input
              id="amount"
              type="number"
              className="w-full text-black p-2 rounded-md"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min={0}
              required
            />
            <button
              type="submit"
              className="text-black bg-primary font-semibold text-lg px-5 py-2 rounded-3xl uppercase mx-auto mt-8"
            >
              Donate
            </button>
          </div>
        </form>
        <p className="text-white/70 self-end mb-10 max-w-[16rem]">
          Your contribution makes a world of difference. Donate now to bring
          hope and opportunity to disabled African children.
        </p>
      </MaxWidthWrapper>
      <Stat />
    </Layout>
  );
};

export default DonatePage;
