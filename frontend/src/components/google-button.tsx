import googleLogo from "../assets/google.svg";

export function GoogleButton() {
  return (
    <button
      type="button"
      className="flex h-10 w-full items-center justify-center gap-3 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-500 transition hover:bg-gray-50"
    >
      <img
        src={googleLogo}
        alt=""
        aria-hidden="true"
        className="h-5 w-5"
      />
      Continue with Google
    </button>
  );
}