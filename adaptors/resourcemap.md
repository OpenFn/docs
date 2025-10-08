---
title: ResourceMap Adaptor
---

## About ResourceMap

[ResourceMap](http://resourcemap.instedd.org/) is a free, open-source collaborative mapping platform developed by InSTEDD that helps organizations track their work, resources, and results geographically. It enables teams to collaboratively record, track, and analyze resources using interactive maps with real-time data updates.

ResourceMap is particularly useful for humanitarian organizations, healthcare systems, supply chain management, and field operations requiring location-based resource tracking and analysis.

## Integration Options

**REST API:** ResourceMap offers a comprehensive REST API that enables external applications to interact with its mapping and data collection services. The API supports multiple data formats (JSON, CSV, GeoJSON, RSS) and provides endpoints for managing collections, sites, layers, and user permissions. Refer to the ResourceMap REST API [documentation](https://github.com/instedd/resourcemap/wiki/REST_API) for detailed guidelines on endpoints and payload formats.

## Authentication

The ResourceMap adaptor uses HTTP basic authentication or can work with publicly accessible collections:

```json
{
  "baseUrl": "https://your-resourcemap-instance.com",
  "username": "your_username",
  "password": "your_password"
}
```

For public collections, only the `baseUrl` is required.


## Helpful Links

- [ResourceMap Official Website](http://resourcemap.instedd.org/)
- [ResourceMap GitHub Repository](https://github.com/instedd/resourcemap)
- [ResourceMap REST API Documentation](https://github.com/instedd/resourcemap/wiki/REST_API)
- [ResourceMap Wiki](https://github.com/instedd/resourcemap/wiki)
- [OpenFn ResourceMap Adaptor Configuration](https://docs.openfn.org/adaptors/packages/resourcemap-configuration-schema)
- [OpenFn ResourceMap Adaptor Docs](https://docs.openfn.org/adaptors/packages/resourcemap-docs)
