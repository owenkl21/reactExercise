import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header class="flex flex-col items-center mt-8 mb-16 ">
      <img src={logo} alt="A canvas" class="mb-1 w-44 h-44 object-contain" />
      <h1 className="text-4xl font-semibold tracking-widest text-center uppercase text-zinc-800">
        ReactArt
      </h1>
      <p className="text-xl tracking-wide text-gray-500">
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
