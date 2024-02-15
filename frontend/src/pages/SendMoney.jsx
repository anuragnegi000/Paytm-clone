import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Send money</h2>
          </div>
          <div>
            <div>
              <div>
                {/* <span>{name[0].toUpperCase()}</span> */}
              </div>
              <h3>{name}</h3>
            </div>
            <div>
              <div>
                <label>Amount (in Rs)</label>
                <input
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  type="number"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
              <button onClick={()=>{
                axios.post("http://localhost:3000/api/v1/account/transfer",{
                    to:id,
                    amount
                },{
                    headers:{
                        Authorization:"Bearer "+localStorage.getItem("token")
                    }
                })
              }}>Initiate transfer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
