---
title:
  Automated data exchange to enhance education program monitoring across Brazil
author: Aissatou Diallo
author_url: https://github.com/daissatou2
author_image_url: https://avatars.githubusercontent.com/daissatou2
tags:
  [
    case study,
    Brazil,
    education,
    SFTP,
    Amp Impact,
    M&E,
    Salesforce,
    workflow automation,
  ]
featured: true
---

[Itaú Social](https://www.itausocial.org.br/en/) is one of the largest
organizations in Brazil dedicated to improving Brazilian public education. The
foundation manages programs to train education professionals, strengthen civil
society, offer online education to students, and conduct search in the education
sector. Itaú Social has trained 112,000 professionals and benefited 7.6 million
students across Brazil, according to Itaú's 2021 integrated annual report.

<!--truncate-->

|                                          ![Itaú Social Impact](/img/itau_social.png)                                           |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <b>Itaú Social's impact on Brazilian education in 2020. Source: [Itaú Social's website](https://www.itausocial.org.br/en/)</b> |

Itaú Social manages multiple programs, requiring collaboration with dozens of
stakeholders and education projects across Brazil. To better monitor impact
across its portfolio, Itaú Social began partnering with Vera Solutions in 2018
to build a centralized M&E information system using Amp Impact, Vera's packaged
impact measurement and portfolio management app built on the Salesforce cloud
platform. For more on the Amp Impact solution, check out the Vera Solutions
[case study](https://www.verasolutions.org/portfolio/itau-social/?locale=en#:~:text=Founded%20in%201993%2C%20Ita%C3%BA%20Social,research%20in%20the%20education%20sector).

To analyze impact across its immense network of partner organizations, programs,
and students, Itaú Social staff spend lots of time and money to manually export
and load data between multiple partner data systems and its M&E Amp Impact /
Salesforce solution. Exchanging data via manual, human-dependent processes also
increases the risk of human error, impacting data quality and data security
vulnerability, and makes it difficult to track data loading errors.

Using OpenFn, Itaú Social has automated its most critical data exchange
workflows across partner systems, minimizing the need for staff to manually
migrate data to its M&E system. OpenFn enables automated data sharing, cleaning,
and reporting, thereby increasing efficiency and data quality of these
workflows. This has ultimately helped Itaú Social achieve faster, data-driven
decision-making and better outcomes for students across Brazil.

![Brazil Students](/img/brazil_students.png)

### Two source systems–one destination.

OpenFn is helping Itaú Social consolidate data from two source data systems into
Amp Impact / Salesforce.

|                 ![Itaú Integration Diagram](/img/itau_integration_diagram.png)                 |
| :--------------------------------------------------------------------------------------------: |
| <b>The current implementation integrates data from an API and SFTP server with Salesforce.</b> |

#### Source 1 - Web API:

Itaú Social uses an internal, custom-built system to collect and store important
information about partner organization registration and about enrollment data
for the students they serve. Using OpenFn's universal adaptors, OpenFn
automatically connects via this system's REST API.

#### Source 2 - CSV File Exports saved on an SFTP Server:

Itaú Social uses another system for its Polo distance learning platform called
CrossKnowledge Learning Suite (CKLS). CKLS does not have an available API, so
its administrators export program enrollment data every week and upload the CSV
export files to an SFTP server for OpenFn to extract and transform.

#### Destination - Itaú Social's M&E Information System:

Itaú Social implemented Amp Impact and Salesforce in partnership with
[Vera Solutions](https://verasolutions.org/), a social enterprise providing
cloud and mobile solutions for social sector organizations, to better track its
impact, streamline its operations, and create feedback loops for data-driven
decision making.

To automate data exchange with the two partner source systems, OpenFn extracts
relevant data from the custom app API and the SFTP server, transforms the data
values and applies data cleaning rules to normalize the data, maps the data to
the Amp Impact data model, and finally syncs it to Salesforce. These workflows
run on a scheduled basis using the OpenFn hosted platform (see
[openfn.org](https://openfn.org)).

**This OpenFn-powered solution has empowered Itaú Social to:**

1. securely automate exchange of critical data across partner systems
2. deliver centralized data access and reliable data for enhanced program
   monitoring to program staff and decison-makers
3. automate aggregation of program data to calculate indicator results
4. provide a more holistic picture of student enrollment and journeys across its
   multiple programs

As Itaú Social scales its digitcal ecosystem and programming, it is considering
extending its OpenFn implementation to integrate even more data sources with its
M&E system.

If your organization is interested in automating its data exchange or reporting
workflows, you can check out the
[OpenFn Documentation site](https://docs.openfn.org/documentation/) and post
your questions on [OpenFn Community](http://community.openfn.org). To learn more
about Amp Impact for enhanced impact measurement and portfolio management see
[verasolutions.org](http://verasolutions.org).


