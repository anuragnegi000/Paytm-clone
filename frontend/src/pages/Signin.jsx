import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";

export const Signin = () => {
  return (
    <div>
      <div>
        <div>
          <Heading label={"Sign in"} />
          <Subheading label={"Enter your credentials to access your account"} />
          <InputBox placeholder="anuragnegi@gmail.com" label={"Email"} />
          <div>
            <Button label={"Sign in"} />
          </div>
          <BottomWarning
            label={"Don't have an account"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
