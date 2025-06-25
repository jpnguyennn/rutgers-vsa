"use client";

import { Separator } from "@/components/ui/separator";
import { useWindowWidth } from "@react-hook/window-size";
import {
	ChevronRight,
	CloudCog,
	FileText,
	Home,
	Settings,
	UserCog,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Nav } from "./AdminNav";

export default function AdminSidebar() {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const windowWidth = useWindowWidth();
	const isMobileWidth = windowWidth < 1500;

	function toggleSidebar() {
		setIsCollapsed(!isCollapsed);
	}

	return (
		<div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
			{!isMobileWidth && (
				<div className="absolute right-[-20px] top-7">
					<Button
						onClick={toggleSidebar}
						variant={"secondary"}
						className="rounded-full p-2"
					>
						<ChevronRight />
					</Button>
				</div>
			)}

			<Nav
				isCollapsed={isMobileWidth ? true : isCollapsed}
				links={[
					{
						title: "Home",
						icon: Home,
						variant: "default",
						href: "/admin",
					},
					{
						title: "Documentation",
						icon: FileText,
						variant: "ghost",
						href: "/admin/docs",
					},
				]}
			/>
			<Separator />
			<Nav
				isCollapsed={isMobileWidth ? true : isCollapsed}
				links={[
					{
						title: "Pages",
						icon: Settings,
						variant: "ghost",
						href: "/admin/settings-pages",
					},
					{
						title: "Layout",
						icon: Settings,
						variant: "ghost",
						href: "/admin/settings-layout",
					},
				]}
			/>
			<Separator />
			<Nav
				isCollapsed={isMobileWidth ? true : isCollapsed}
				links={[
					{
						title: "Board Members",
						icon: UserCog,
						variant: "ghost",
						href: "/admin/board",
					},
					{
						title: "Interns",
						icon: UserCog,
						variant: "ghost",
						href: "/admin/interns",
					},
					{
						title: "Gallery",
						icon: CloudCog,
						variant: "ghost",
						href: "/admin/gallery",
					},
				]}
			/>
		</div>
	);
}
