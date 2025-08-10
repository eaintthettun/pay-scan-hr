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
  HiOfficeBuilding,
  HiQrcode,
  HiTable,
  HiUsers,
} from "react-icons/hi";
import logo from "../photos/icons/logo.svg";
import { Link } from "react-router-dom";

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

            {/* Dashboard */}
            <Link to="/">
              <SidebarItem icon={HiChartPie} className="mt-5">
                Dashboard
              </SidebarItem>
            </Link>

            {/* Department */}
            <SidebarCollapse icon={HiOfficeBuilding} label="Department">
              <Link to="/teachers">
                <SidebarItem icon={HiAcademicCap}>Teachers</SidebarItem>
              </Link>
              <Link to="/staff" className="block">
                <SidebarItem icon={HiUsers}>Staff</SidebarItem>
              </Link>
            </SidebarCollapse>

            {/* Payment History */}
            <Link to="/payments">
              <SidebarItem icon={HiCurrencyDollar}>
                Payments History
              </SidebarItem>
            </Link>

            {/* Inbox */}
            <Link to="/inbox">
              <SidebarItem icon={HiInbox}>Inbox</SidebarItem>
            </Link>

            <Link to="/lastFiveScans">
              <SidebarItem icon={HiQrcode}>Last 5 QR scans</SidebarItem>
            </Link>

            <Link to="/activities">
              <SidebarItem icon={HiClock}>Activity log</SidebarItem>
            </Link>

            <Link to="/signin">
              <SidebarItem icon={HiArrowSmRight}>Sign in</SidebarItem>
            </Link>
            <Link to="/signup">
              <SidebarItem icon={HiTable}>Sign up</SidebarItem>
            </Link>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
}
