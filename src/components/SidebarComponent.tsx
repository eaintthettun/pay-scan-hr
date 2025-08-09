import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiAcademicCap,
  HiArrowSmRight,
  HiChartPie,
  HiClock,
  HiCurrencyDollar,
  HiInbox,
  HiQrcode,
  HiTable,
  HiUsers,
} from "react-icons/hi";
import logo from "../photos/icons/logo.svg";
import { HiUser } from "react-icons/hi2";

export default function SidebarComponent() {
  return (
    <div>
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="/">
              <div className="flex items-center justify-evenly gap-2.5">
                <img src={logo} alt="Logo" className="h-[40px] w-[40px]" />
                <span className="text-2xl font-bold text-orange-600">
                  PayScan HR
                </span>
              </div>
            </SidebarItem>
            <SidebarItem href="#" icon={HiChartPie} className="mt-5">
              Dashboard
            </SidebarItem>
            <SidebarCollapse icon={HiUser} label="Department">
              <SidebarItem href="#" icon={HiAcademicCap}>
                Teachers
              </SidebarItem>
              <SidebarItem href="#" icon={HiUsers}>
                Staff
              </SidebarItem>
            </SidebarCollapse>
            <SidebarItem href="#" icon={HiCurrencyDollar}>
              Payments History
            </SidebarItem>
            <SidebarItem href="#" icon={HiInbox}>
              Inbox
            </SidebarItem>
            <SidebarItem href="#" icon={HiQrcode}>
              Last 5 QR Scans
            </SidebarItem>
            <SidebarItem href="#" icon={HiClock}>
              Recent activity
            </SidebarItem>
            <SidebarItem href="#" icon={HiArrowSmRight}>
              Sign In
            </SidebarItem>
            <SidebarItem href="#" icon={HiTable}>
              Sign Up
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
}
