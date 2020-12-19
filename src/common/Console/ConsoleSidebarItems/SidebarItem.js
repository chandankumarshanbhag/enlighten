// import react from "react"
import {Icon} from "@mdi/react"
import { mdiViewDashboard,mdiBank,mdiAccountPlus,mdiClipboard,mdiBookshelf,mdiCertificate,mdiFileChart,mdiTune,mdiArrowLeft } from '@mdi/js';

export default [
    {
        icon: <Icon path={mdiArrowLeft}
            size={1} />,
        title: "Back",
        href: "/",
        divider: true
    },
    {
        icon: <Icon path={mdiViewDashboard}
            size={1} />,
        title: "Dashboard",
        href: "/console"
    },
    {
        icon: <Icon path={mdiBank}
            size={1} />,
        title: "Institutions",
        href: "/console/institutions"
    },
    {
        icon: <Icon path={mdiClipboard}
            size={1} />,
        title: "Courses",
        href: "/console/courses",
        divider: true
    },
    // {
    //     icon: <Icon path={mdiBookshelf}
    //         size={1} />,
    //     title: "Registry",
    //     href: "/administration/registry",
    //     divider: true
    // },
    // {
    //     icon: <Icon path={mdiCertificate}
    //         size={1} />,
    //     title: "Certificates",
    //     href: "/administration/certificates",
    //     divider: true
    // },
    // {
    //     icon: <Icon path={mdiFileChart}
    //         size={1} />,
    //     title: "Report",
    //     href: "/administration/report",
    //     divider: true
    // },
    // {
    //     icon: <Icon path={mdiTune}
    //         size={1} />,
    //     title: "Utility",
    //     href: "/administration/utility",
    //     divider: true
    // }
];