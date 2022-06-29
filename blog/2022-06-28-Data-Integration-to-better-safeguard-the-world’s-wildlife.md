---
title: Data Integration to better safeguard the world’s wildlife
author: Alexa de Vegvar
author_url: https://github.com/alexadevegvar
author_image_url: https://avatars.githubusercontent.com/alexadevegvar
tags:
  [
    case study,
    WCS,
    wildlife,
    Kobo Toolbox,
    PostgreSQL,
    MSSQL,
  ]
  image: https://consosci.org/Portals/0/OpenContent/Files/1839/ci_98723211_Medium.jpg
featured: true
---

Since 2020, the Wildlife Conservation Society (“WCS”) has leveraged the OpenFn Integration Toolkit to collect, clean, and integrate critical data for critical conservation programs targeting the world's largest wild places. WCS and its partners work at the frontline of conservation, and with support from OpenFn, they can automatically and seamlessly integrate and quickly analyse the masses of data collected across dozens of countries.

<!--truncate-->

### WCS saves wildlife and wild places worldwide through science, conservation action, and collaborating with local communities and indigenous people.

Climate change is happening right before our eyes. The [2019 Union Nations SDG Report](https://www.un.org/sustainabledevelopment/blog/2019/05/nature-decline-unprecedented-report/) found that as many as one million animal and plant species are in danger of extinction. Ergo, this also puts the people who highly depend on them at great risk. The earth’s demolition statistics are alarming, with “greenhouse gas emissions [having] doubled, raising average global temperatures by at least 0.7 degrees Celsius.” Less than 25% of the world can still be considered “wilderness”, urging that we must mitigate and avert these disasters without hesitation. Wilderness areas act as critical buffers against climate change, and as time goes on, these areas are diminishing due to global warming, leaving us vulnerable to climate disasters.

### WCS works with multiple data platforms and dozens of partners worldwide and needs an integration solution to enable interoperability and scale.

With projects in nearly 60 countries and across oceans, WCS aims to re-establish a world where wildlife and people thrive in healthy lands and seas. WCS partners work on the frontline of conservation, ranging from Indigenous and local communities to national and local governments. Using mobile survey tools like [KoBo Toolbox](https://www.kobotoolbox.org), WCS field staff can complete and submit data collection forms to track the well-being of local communities they support, local governance, reforestation activities, natural resource use, and other conservation and social science research data. WCS sought out OpenFN to integrate its data collection sources with one database for centralised analysis of all this information.

### OpenFn automates data pipelines from field to office, ensuring WCS decision-makers and researchers can access timely, accurate information. 

WCS implemented OpenFn to automate a standardised data flow between numerous wild meat consumption surveys and an MSSQL database to enable cross-partner data sharing and critical data analysis for a [€45 million initiative](https://newsroom.wcs.org/News-Releases/articleType/ArticleView/articleId/10598/New-45-million-initiative-seeks-to-curb-unsustainable-wildlife-hunting-conserve-biodiversity-and-improve-food-security.aspx). The initiative aims to curb unsustainable wildlife hunting, conserve biodiversity and improve food security.

Since then, WCS has implemented OpenFn to support its partners from [Conservation Social Science Partnership](https://consosci.org/) (“ConSoSci”). ConSoSci uses OpenFn to deploy and analyse research data collected in the field rapidly. One OpenFn solution auto-scans social science Kobo ToolBox surveys to then automatically:
1. Build [PostgreSQL](https://www.postgresql.org/) and [MSSQL](https://www.microsoft.com/en-us/sql-server/sql-server-2019) databases and
2. Integrate the databases, making the field data quickly available for analysis and eliminating multiple manual configurations and data integration steps typically handled by a software engineer.

![OpenFn integration](https://consosci.org/portals/0/ConSoSci%20Toolkit.png)

OpenFn’s solution saves ConSoSci partners time and money, enabling researchers to access reliable data from multiple sources more quickly and effectively. They can then analyse this information to help address critical gaps in social science capacity, implementation, and accessibility in conservation. 

Thanks to the OpenFn Integration Toolkit, WCS has the digital infrastructure to efficiently scale its data collection, analysis, and sharing solutions to enhance interoperability across its programs and partners. OpenFn automatically syncs hundreds of records across dozens of WCS sites daily, enabling the WCS Conservation Technology Team to redirect its focus to its core work–empowering researchers working to mitigate continued environmental damage. WCS believes that “by discovering how to save nature, we can inspire the world to protect it”, and OpenFn is committed to helping conservation stakeholders automate this discovery process worldwide.

To explore WCS and ConSoSci OpenFn solutions, check out the open-source code on Github (github.com/OpenFn/consosci). Next up for WCS are integrations between Kobo ToolBox and Asana. Stay tuned for more!

### Call to Action
If you have questions about our WCS partnership or integration toolkit, head to [community.openfn.org](community.openfn.org) to connect and talk to like-minded social-sector integrators and OpenFn staff. We hope to see you soon!
