import { ethers } from "ethers";
import "./Buy.css";

const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault();

    // Destructuring state to get the contract
    const { contract } = state;

    // Getting values from form inputs
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    // Parsing Ether value (0.001 ETH in this case)
    const amount = ethers.utils.parseEther("0.001");

    try {
      // Sending the transaction to buy Chai
      const transaction = await contract.buyChai(name, message, { value: amount });

      // Waiting for the transaction to be mined
      await transaction.wait();

      // Alerting the user about the successful transaction
      alert("Transaction is successful");

      // Reloading the page (you may want to consider a better UI update)
      window.location.reload();
    } catch (error) {
      // Handling any errors that occur during the transaction
      console.error("Transaction failed:", error.message);
      alert("Transaction failed. Please check the console for details.");
    }
  };

  return (
    <div className="center">
      <h1>Thanks</h1>
      <form onSubmit={buyChai}>
        <div className="inputbox">
          <input type="text" required="required" id="name" />
          <span>Name</span>
        </div>
        <div className="inputbox">
          <input type="text" required="required" id="message" />
          <span>Message</span>
        </div>
        <div className="inputbox">
          {/* Disable the button if the contract is not available */}
          <input type="submit" value="Pay" disabled={!state.contract} />
        </div>
      </form>
    </div>
  );
};

export default Buy;
