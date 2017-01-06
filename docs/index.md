# OpenFn Documentation
This documentation is for [OpenFn.org](https://www.openfn.org), and is primarily intended to help users of the site. Technical documentation for OpenFn's open-source integration tools and language-packs can be found in their respective repositories at [Github.com/OpenFn](https://github.com/openfn).

There are four sections in this documentation site: an introduction (you are here), detailed documentation, source application setup walkthroughs, and release notes.

If you want a new feature or find a bug, please [submit an issue](https://github.com/openfn/docs/issues). If you find an issue with the documentation or want to share your custom functions, please [submit a pull request](https://github.com/OpenFn/docs/compare)!

## The OpenFn Google Group
Please make sure to check out the [OpenFn Google Group](https://groups.google.com/forum/#!forum/openfn) if you've got questions that aren't answered here.


## FAQs
> *Wait, so, OpenFn does what now?*

Good question. OpenFn is an integration platform as a service. This means our prime directive is to move data quickly and securely between various technologies. In most cases:

1. A source application sends **messages** to your project’s **inbox** when something happens.

2. **Jobs** will be triggered, based on your **filters**, and use the data in those messages to attempt specific actions in destination systems.

3. The **logs** are recorded so you can see precisely what happened and when and where it happened to take action in the event of a failed attempt—like editing the job or even the source message and trying it again.



OpenFn has harnessed the extreme  stability and scalability of Erlang to coordinate these actions and provide users with email alerts, project management tools, and an online job writing IDE.

In this guide you'll find documentation to help you write filters and jobs, along with explanations of OpenFn's key concepts.

If you have any questions, please don't hesitate to email [admin@openfn.org](mailto:admin@openfn.org).
