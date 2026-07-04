import Container from "./Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 pt-6">
      <Container>
        <nav className="flex items-center justify-between rounded-3xl border border-[#D3DDD7] bg-[#E4ECE7]/95 px-8 py-4 shadow-xl backdrop-blur-xl transition-all duration-300">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">

    <span className="text-3xl">🚀</span>

    <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#2F3437]">
            NOVA AI
        </h1>

        <p className="text-xs text-gray-600">
            Study Workspace
        </p>
    </div>

</div>

          {/* Navigation */}

          <ul className="hidden md:flex items-center gap-10 font-medium text-[#2F3437]">

            <li className="cursor-pointer rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white hover:text-[#5C7C6F]">
              Features
            </li>

            <li className="cursor-pointer rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white hover:text-[#5C7C6F]">
              How it Works
            </li>

            <li className="cursor-pointer rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white hover:text-[#5C7C6F]">
              Contact
            </li>

          </ul>

          <Button>
            Get Started →
          </Button>

        </nav>
      </Container>
    </header>
  );
}