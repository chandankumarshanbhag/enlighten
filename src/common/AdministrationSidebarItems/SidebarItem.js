// import react from "react"
import {Icon} from "@mdi/react"
import { mdiViewDashboard,mdiAccountPlus,mdiClipboard,mdiBookshelf,mdiCertificate,mdiFileChart,mdiTune } from '@mdi/js';

export default [
    {
        icon: <Icon path={mdiViewDashboard}
            size={1} />,
        title: "Dashboard",
        href: "/administration"
    },
    {
        icon: <Icon path={mdiAccountPlus}
            size={1} />,
        title: "Admission",
        href: "/administration/admission"
    },
    {
        icon: <Icon path={mdiClipboard}
            size={1} />,
        title: "Applications",
        href: "/administration/applications"
    },
    {
        icon: <Icon path={mdiBookshelf}
            size={1} />,
        title: "Registry",
        href: "/administration/registry",
        divider: true
    },
    {
        icon: <Icon path={mdiCertificate}
            size={1} />,
        title: "Certificates",
        href: "/administration/certificates",
        divider: true
    },
    {
        icon: <Icon path={mdiFileChart}
            size={1} />,
        title: "Report",
        href: "/administration/report",
        divider: true
    },
    {
        icon: <Icon path={mdiTune}
            size={1} />,
        title: "Utility",
        href: "/administration/utility",
        divider: true
    }
];