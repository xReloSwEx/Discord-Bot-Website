import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="https://media.discordapp.net/attachments/1169358873287733308/1171159263025041570/ReloX.PNG?ex=655baa0f&is=6549350f&hm=020bc9cb290ef18078c39c77a0682220640d57bf6972aaa749b172cb42f75a2a&=&width=704&height=621" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">ReloX</p>
                            </div>
                            <Menu as="div" className="relative mt-3 inline-block text-left">
                                <div>
                                    <Menu.Button className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <img
                                            src={`https://flagcdn.com/w80/tr.png`}
                                            width="24"
                                            height="18"
                                            className="mr-2 h-4 rounded-sm"
                                        />
                                        Türkçe
                                        <ChevronDownIcon
                                            className="w-5 h-5 ml-2 -mr-1 transform rotate-180 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
<div className="py-1"></div>
<a href="https://top.gg/bot/924325576095973426">
  <img src={"https://top.gg/api/widget/servers/924325576095973426.svg"}/>
</a>
<div className="py-1"></div>
<a href="https://top.gg/bot/924325576095973426">
  <img src={"https://top.gg/api/widget/upvotes/924325576095973426.svg"}/>
</a>
<div className="py-1"></div>
<a href="https://top.gg/bot/924325576095973426">
  <img src={"https://top.gg/api/widget/owner/924325576095973426.svg"}/>
</a>
                                </div>
                            </Menu>
                        
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">linkler</p>
                            <div>
                                <Link href="https://butter-water-technosaurus.glitch.me">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Uptime Servisi
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <a href="https://discord.gg/jBfxSXjrZH" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Destek Sunucusu
                                </a>
                            </div>
                            <div>
                                <a href=" https://discord.com/api/oauth2/authorize?client_id=1170430199242952766&permissions=8&scope=bot" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    ReloX Davet Et
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Sosyal</p>
                            <div>
                                <Link href="https://discord.gg/jBfxSXjrZH">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-discord`} /> Disocrd 
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://github.com/reload/reloxbot">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-github`} /> GitHub 
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.youtube.com/@ReloXBotYT">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-youtube`} /> YouTube 
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Önemli</p>
                            <div>
                                <Link href="/tos">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Terms Of Service
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="/privacy">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Privacy Policy
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; ReloX
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                                <p className={"text-xs text-green-400"}>
                                    Bot Online
                                </p>
                        </div>
                        <p className="text-white text-center sm:text-right text-opacity-50">
                            {"ReloX ❤️"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
