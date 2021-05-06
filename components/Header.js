import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";


function Header() {
    return (
        <header className="flex flex-col m-3 sm:flex-row justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon = {HomeIcon}/>
                <HeaderItem title="TRENDING" Icon = {LightningBoltIcon}/>
                <HeaderItem title="LIKED" Icon = {BadgeCheckIcon}/>
                <HeaderItem title="Collection" Icon = {CollectionIcon}/>
                <HeaderItem title="Search" Icon = {SearchIcon}/>
                <HeaderItem title="Profile" Icon = {UserIcon}/>
            </div>
            <Image className="object-contain" src="https://links.papareact.com/ua6" width = {200} height= {100}/>
        </header>
    );
}

export default Header
