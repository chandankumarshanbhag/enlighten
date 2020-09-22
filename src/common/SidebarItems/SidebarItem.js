import React from "react"
import {Icon} from "@mdi/react"
import { mdiAccount,mdiViewDashboard, mdiBank, mdiAccountGroup, mdiCurrencyInr, mdiTeach, mdiBookSearch, mdiLibrary, mdiBusSchool, mdiBed, mdiBriefcase,mdiAccountClock, mdiCogs,mdiPackageVariant } from '@mdi/js';

export default [
    {
        icon: <Icon path={mdiViewDashboard}
            size={1} />,
        title: "Dashboard",
        href: "/",
        divider: true
    },
    {
        icon: <Icon path={mdiBank}
            size={1} />,
        title: "Administration",
        href: "/administration"
    },
    {
        icon: <Icon path={mdiCurrencyInr}
            size={1} />,
        title: "Accounts",
        href: "/accounts",
        divider: true
    }, {
        icon: <Icon path={mdiAccountGroup}
            size={1} />,
        title: "Students",
        href: "/students"
    }, {
        icon: <Icon path={mdiTeach}
            size={1} />,
        title: "Staffs",
        href: "/staffs"
    }, {
        icon: <Icon path={mdiBriefcase}
            size={1} />,
        title: "Placement",
        href: "/placement"
    }, {
        icon: <Icon path={mdiAccountClock}
            size={1} />,
        title: "Alumni",
        href: "/alumni",
        divider: true
    }, {
        icon: <Icon path={mdiLibrary}
            size={1} />,
        title: "Library",
        href: "/library"
    }, {
        icon: <Icon path={mdiBookSearch}
            size={1} />,
        title: "OPAC",
        href: "/opac",
        divider: true
    }, {
        icon: <Icon path={mdiBusSchool}
            size={1} />,
        title: "Transport",
        href: "/transport"
    }, {
        icon: <Icon path={mdiBed}
            size={1} />,
        title: "Hostel",
        href: "/hostel",
        divider: true
    }, {
        icon: <Icon path={mdiPackageVariant}
            size={1} />,
        title: "Inventory",
        href: "/inventory",
        divider: true
    }, {
        icon: <Icon path={mdiCogs}
            size={1} />,
        title: "Console",
        href: "/console"
    }
]