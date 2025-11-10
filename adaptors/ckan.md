---
title: CKAN
---

## App Overview

CKAN (Comprehensive Knowledge Archive Network) is the world’s leading
open-source data portal platform. CKAN makes it easy to publish, share and work
with data. It's a data management system that provides a powerful platform for
cataloging, storing and accessing datasets with a rich front-end, full API (for
both data and catalog), visualization tools and more.

CKAN is a tool for making open data websites. It helps you manage and publish
collections of data. It is used by national and local governments, research
institutions, and other organizations who collect a lot of data. See the public
documentation for more:

- https://ckan.org/
- https://docs.ckan.org/en/2.9/user-guide.html#what-is-ckan

### Helpful Features & Plug-ins

See
[https://docs.ckan.org/en/2.9/extensions/index.html](https://docs.ckan.org/en/2.9/extensions/index.html)

Helpful features include:

1. The CKAN DataStore extension provides an ad hoc database for storage of
   structured data from CKAN resources.
2. Advanced geospatial features, covering data preview, search, and discovery.
3. An intuitive web interface that allows you to easily register, update and
   refine datasets.
4. Completely customizable with themes to match your brand.
5. Creation of a federated network of data portals which share data between each
   other.
6. Rich search experience which allows for quick ‘Google-style’ keyword search
   and filtering.
7. Create data-visualisation views and expose data as line, bar and pie charts.
8. Upload media and image files. Stores files either on the server or in the
   cloud using extensions.
9. CKAN allows you to pick and choose which features you want to use for your
   data portal. Or, you can easily develop your own by following the extending
   guide!

## Integration Use Cases

CKAN has been adopted by enterprise organisations in sectors such as resources,
energy, pharmaceuticals and finance to publish and manage internal data assets.
In addition, CKAN is widely used, mainly in the field of open government data,
where it has become a de facto standard software package. CKAN powers the
national open data portals of the UK, the USA, Australia or the EU, to name only
a few well-known examples.

Using the API you can do things like:

- Access any bit of information in CKAN (if you are authorized!)
- Edit any piece of information in CKAN
- Create a whole new web front-end for CKAN (if you want!)

### Example user stories:

- As a data collector, I want to create a data portal to easily publish and
  share datasets with my community/peers/hub, so that they can leverage my data
  for further research.

- As a researcher, I want a way to search for datasets related to my research
  domain, so that I can run analyses and incorporate other datasets into my
  studies.

- As a data hub, I want to create a web portal where researchers can easily
  browse, share, download, and discuss datasets and research activites, so that
  I can enhance communication, collaboration, and exchange across partners.

See https://docs.ckan.org/en/ckan-1.8/user-stories-list.html for more
app-specific user stories.

## APIs & Integration Options

The APIs available depend on the CKAN version you're using. See API docs:
https://docs.ckan.org/en/2.9/api/index.html

All of a CKAN website’s core functionality (everything you can do with the web
interface and more) can be used by external code that calls the CKAN API. The
CKAN API follows the RESTful (Representational State Transfer) style and uses
JSON by default.

For example, using the CKAN API your app can:

- Get JSON-formatted lists of a site’s datasets, groups or other CKAN objects:
  http://demo.ckan.org/api/3/action/package_list
- Get a full JSON representation of a dataset, resource or other object:
  http://demo.ckan.org/api/3/action/package_show?id=adur_district_spending
- Search for packages or resources matching a query:
  http://demo.ckan.org/api/3/action/package_search?q=spending
- Create, update and delete datasets, resources and other objects
- Get an activity stream of recently changed datasets on a site:
  http://demo.ckan.org/api/3/action/recently_changed_packages_activity_list

Beyond using OpenFn to connect with the API, you can access the API using one
the dedicated tools or libraries written specifically for CKAN. The following
clients are available:

- dpm (data package manager): command-line client and Python library (maintained
  by core CKAN team)
- ckanclient - CKAN Python Client: Python client maintained by the core CKAN
  team
- CKAN Ruby: Ruby Client
- Ckan_client-PHP: PHP client
- Ckan_client-J: Java client
- net-ckan: PERL client
- ckanjs: sophisticated Javascript client built on Backbone.
- Google Refine CKAN Extension: Google Refine client which allows you to get and
  push data to and from a CKAN instance using Google Refine.

## Webhook/webservice for CKAN

See documentation on:

- ckanext-webhooks: https://github.com/datacats/ckanext-webhooks
- ckanext-geopusher : https://github.com/datacats/ckanext-geopusher

## Getting Started with CKAN

CKAN offers robust, public documentation. See the
[CKAN User Guide](https://docs.ckan.org/en/2.9/user-guide.html).

### API Notes

CKAN exposes all core features to its API. See the API guide:
[https://docs.ckan.org/en/2.9/api/](https://docs.ckan.org/en/2.9/api/)

CKAN’s `FileStore` and `DataStore` have their own APIs, see:

- FileStore and file uploads:
  https://docs.ckan.org/en/2.9/maintaining/filestore.html
- DataStore extension: https://docs.ckan.org/en/2.9/maintaining/datastore.html

Note that some API functions require authorization. The API uses the same
authorization functions and configuration as the web interface, so if a user is
authorized to do something in the web interface they’ll be authorized to do it
via the API as well.

To call the CKAN API, post a JSON dictionary in an HTTP POST request to one of
CKAN’s API URLs. The parameters for the API function should be given in the JSON
dictionary. CKAN will also return its response in a JSON dictionary.

One way to post a JSON dictionary to a URL is using the command-line client
Curl. For example, to get a list of the names of all the datasets in the
data-explorer group on demo.ckan.org, install curl and then call the group_list
API function by running this command in a terminal:

```
curl https://demo.ckan.org/api/3/action/group_list
```

The response from CKAN will look like this:

```
{
    "help": "...",
    "result": [
        "data-explorer",
        "department-of-ricky",
        "geo-examples",
        "geothermal-data",
        "reykjavik",
        "skeenawild-conservation-trust"
    ],
    "success": true
}
```

#### JSONP support

To cater for scripts from other sites that wish to access the API, the data can
be returned in JSONP format, where the JSON data is ‘padded’ with a function
call. The function is named in the ‘callback’ parameter. For example:

http://demo.ckan.org/api/3/action/package_show?id=adur_district_spending&callback=myfunction

CKAN's source code can be found at github.

Example normal request:

```
GET /api/rest/dataset/pollution_stats
```

but now with the callback parameter:

```
GET /api/rest/dataset/pollution_stats?callback=name-of-callback-function
returns: jsoncallback({"name": "pollution_stats", ... });
```

This parameter can apply to all POST requests to the Action API and GET requests
to the Search API and v1/v2/v3 APIs.

### App Installation

See the [System Admin guide](https://docs.ckan.org/en/2.9/sysadmin-guide.html).

- To install CKAN see:
  https://docs.ckan.org/en/2.9/maintaining/installing/index.html?highlight=install%20CKAN
- To upgrade CKAN see:
  https://docs.ckan.org/en/2.9/maintaining/upgrading/index.html?highlight=configure%20CKAN

To provide your API token in an HTTP request, include it in either an
Authorization or `X-CKAN-API-Key` header. (The name of the HTTP header can be
configured with the `apikey_header_name` option in your CKAN configuration
file.)

## OpenFn Adaptor

Currently no CKAN-specific adaptor exists, but
[language-http](https://www.github.com/openfn/language-http) can be implemented
to access the web API.

## Implementation Examples

CKAN has been implemented in [catalog.data.gov](https://catalog.data.gov),
[open.canada.ca/data](https://open.canada.ca/data), and
[data.humdata.org](https://data.humdata.org).

### I've noticed a problem with this Adaptor, or something is out of date, what can I do?

Thanks for asking! We are a fully Open Source Digital Public Good, and we welcome contributions from our community. Check out our [Adaptors Wiki](https://github.com/OpenFn/adaptors/wiki) for more information on how you can update Adaptors!

Or, you can always reach out to the Community through our [Community Forum here](https://community.openfn.org/).
