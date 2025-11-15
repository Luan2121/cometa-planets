import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import { Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-secondary font-bold text-center p-6 flex flex-col items-center" >
      <p className="mb-2">
        Made With ♥️ by Luis Espana
      </p>
      <div className="flex">
        <a href="https://github.com/Luan2121" target="_blank" className="mr-2">
          <SiGithub />
        </a>
        <a href="mailto:luan.dev21@gmail.com">
          <SiGmail />
        </a>
      </div>
    </footer>
  )
}

export default Footer;