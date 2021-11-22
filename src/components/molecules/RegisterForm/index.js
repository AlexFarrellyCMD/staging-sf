import { useForm } from "react-hook-form";
import Input from "components/atoms/Input";
import Checkbox from "components/atoms/Checkbox";
import Radio from "./Radio";
import SubmitButton from "components/atoms/SubmitButton";
import { useRegisterAccount } from "./queries";
import paths from "core/paths";

const RegisterForm = () => {
  const { registerAccount, errorMessage } = useRegisterAccount();

  const { register, handleSubmit, watch, formState } = useForm();
  const { errors, isSubmitting } = formState;

  const isTrade = watch("type") === "trade";

  return (
    <form onSubmit={handleSubmit(registerAccount)} className="text-start">
      {!!errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <div className="row gx-4">
        <div className="col-sm">
          <Input
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            register={register}
            validation={{ required: true }}
            error={errors.firstName}
          />
        </div>
        <div className="col-sm">
          <Input
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            register={register}
            validation={{ required: true }}
            error={errors.lastName}
          />
        </div>
      </div>

      <Input
        label="Email Address"
        name="email"
        type="email"
        autoComplete="email"
        register={register}
        validation={{ required: true }}
        error={errors.email}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        autoComplete="password"
        register={register}
        validation={{
          required: true,
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
        }}
        error={errors.password}
      />

      <div className="row gx-4">
        <div className="col-sm">
          <Radio
            name="type"
            defaultChecked={true}
            register={register}
            label="I'm a Customer"
            value="customer"
          />
        </div>
        <div className="col-sm">
          <Radio
            name="type"
            register={register}
            label="I'm a Tradesperson"
            value="trade"
          />
        </div>
      </div>

      <Checkbox
        label="I'm happy to be contacted regarding my enquiry & receive future offers from Trade Prices Direct."
        name="consent"
        register={register}
        validation={{ required: true }}
        error={errors.consent}
      />

      {isTrade ? (
        <Checkbox
          label={`I agree to the Trade Prices Direct <a href="/trade-account-terms-conditions" target="_blank">trade account terms & conditions</a>.`}
          name="terms"
          register={register}
          validation={{ required: true }}
          error={errors.terms}
        />
      ) : (
        <Checkbox
          label={`I agree to the Trade Prices Direct <a href="/customer-account-terms-conditions" target="_blank">customer account terms & conditions</a>.`}
          name="terms"
          register={register}
          validation={{ required: true }}
          error={errors.terms}
        />
      )}

      <div className="d-grid">
        <SubmitButton loading={isSubmitting}>Create Account</SubmitButton>
      </div>
    </form>
  );
};

export default RegisterForm;
